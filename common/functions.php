<?php 
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\DB;
use App\AccountLog;
use App\WalletLog;

defined('DECIMAL_SCALE') || define('DECIMAL_SCALE', 8);
bcscale(DECIMAL_SCALE);

function bc_add($left_operand, $right_operand, $out_scale = DECIMAL_SCALE)
{
    return bc_method('bcadd', $left_operand, $right_operand, $out_scale);
}

function GoogleAuthenticator($username = 'admin',$app_name = '管理系统')
{
    require_once '../app/GoogleAuthenticator.php';
	// 引用谷歌验证类 若无法引用请看文章最后
	$google = new \App\PHPGangsta_GoogleAuthenticator();
	// 生成谷歌key
	$secret = $google->createSecret();
	//echo "<hr>";
	// 将谷歌加密key信息保存，并生成二维码链接
	$qrcod_url = $google->getQRCodeGoogleUrl($username, $secret, $app_name);
    //echo '<img src="'.$qrcod_url.'">';
    return ['secret' => $secret, 'qrcod_url' => $qrcod_url];
}

function GoogleVerify($secret, $code)
{
    require_once '../app/GoogleAuthenticator.php';
	// 引用谷歌验证类 若无法引用请看文章最后
	$google = new \App\PHPGangsta_GoogleAuthenticator();
	
    // 谷歌身份验证器上展示的6位数字验证码
    if($code == '') return ['result' => false];
    
    // 误差时间，谷歌身份验证器30秒更换一次，这个表示最大的误差时间
    $time = 0;//0表示实时
    
    // 获取验证结果 返回结果true，false
    $checkResult = $google->verifyCode($secret,$code,$time);
    
    return ['result' => $checkResult];
}

function mtranslate($val, $to, $from = 'zh')
{
    require_once dirname(__DIR__).'/public/translate.php';

    $from = $from;
    $to = $to;
    $value = $val;

    $res = translate($value, $from, $to);
    //file_put_contents('/www/wwwroot/Site/translate.txt',json_encode($res));
    if (!isset($res['trans_result'])) {
        return $value;
    } else {
        return isset($res['trans_result']) ? $res['trans_result'][0]['dst'] : $value;
    }

}
function t50Obj2array($obj,$isstr=false){
	if($isstr){
		//字符串输出 
		return json_encode($obj,JSON_UNESCAPED_UNICODE);
	}else{
		//输出array
		return json_decode(json_encode($obj,JSON_UNESCAPED_UNICODE),true);
	}
	
}

//调用配置文件
function getConfig($file,$isstr=false){
	$cfg=include($file);
	return t50Obj2array($cfg,$isstr);
}

function bc_sub($left_operand, $right_operand, $out_scale = DECIMAL_SCALE)
{
    return bc_method('bcsub', $left_operand, $right_operand, $out_scale);
}

function bc_mul($left_operand, $right_operand, $out_scale = DECIMAL_SCALE)
{
    return bc_method('bcmul', $left_operand, $right_operand, $out_scale);
}

function bc_div($left_operand, $right_operand, $out_scale = DECIMAL_SCALE)
{
    return bc_method('bcdiv', $left_operand, $right_operand, $out_scale);
}

function bc_mod($left_operand, $right_operand, $out_scale = DECIMAL_SCALE)
{
    return bc_method('bcmod', $left_operand, $right_operand, $out_scale);
}

function bc_comp($left_operand, $right_operand)
{
    return bc_method('bccomp', $left_operand, $right_operand);
}

function bc_pow($left_operand, $right_operand)
{
    return bc_method('bcpow', $left_operand, $right_operand);
}

function bc_method($method_name, $left_operand, $right_operand, $out_scale = DECIMAL_SCALE)
{
    $left_operand = number_format($left_operand, DECIMAL_SCALE, '.', '');
    $method_name != 'bcpow' && $right_operand = number_format($right_operand, DECIMAL_SCALE, '.', '');
    $result = call_user_func($method_name, $left_operand, $right_operand);
    return $method_name != 'bccomp' ? number_format($result, $out_scale, '.', '') : $result;
}

/**
 * 科学计算发转字符串
 *
 * @param float $num 数值
 * @param integer $double
 * @return void
 */
function sctonum($num, $double = DECIMAL_SCALE)
{
    if (false !== stripos($num, "e")) {
        $a = explode("e", strtolower($num));
        return bcmul($a[0], bcpow(10, $a[1], $double), $double);
    } else {
        return $num;
    }
}

/**
 * 改变钱包余额
 *
 * @param \App\UsersWallet &$wallet 用户钱包模型实例
 * @param integer $balance_type 1.法币,2.币币交易,3.杠杆交易,4.秒合约,5.保险
 * @param float $change 添加传正数，减少传负数
 * @param integer $account_log_type 类似于之前的场景
 * @param string $memo 备注
 * @param boolean $is_lock 是否是冻结或解冻资金
 * @param integer $from_user_id 触发用户id
 * @param integer $extra_sign 子场景标识
 * @param string $extra_data 附加数据
 * @param bool $zero_continue 改变为0时继续执行,默认为假不执行
 * @param bool $overflow 余额不足时允许继续处理,默认为假不允许
 * @return true|string 成功返回真，失败返回假
 *
 * @throws \Exception
 */
function change_wallet_balance(&$wallet, $balance_type, $change, $account_log_type, $memo = '', $is_lock = false, $from_user_id = 0, $extra_sign = 0, $extra_data = '', $zero_continue = false, $overflow = false)
{
    //file_put_contents('/www/wwwroot/Site/memo.txt',$memo . "\r\n" , FILE_APPEND);
    //为0直接返回真不往下再处理
    if (!$zero_continue && bc_comp($change, 0) == 0) {
        $path = base_path() . '/storage/logs/wallet/';
        $filename = date('Ymd') . '.log';
        file_exists($path) || @mkdir($path);
        error_log(date('Y-m-d H:i:s') . ' 改变金额为0,不处理' . PHP_EOL, 3, $path . $filename);
        return true;
    }

    $param = compact(
        'balance_type',
        'change',
        'account_log_type',
        'memo',
        'is_lock',
        'from_user_id',
        'extra_sign',
        'extra_data',
        'zero_continue',
        'overflow'
    );

    try {
        if (!in_array($balance_type, [1, 2, 3, 4, 5, 6])) {
            throw new \Exception('Incorrect currency type');//货币类型不正确
        }
        DB::transaction(function () use (&$wallet, $param) {
            extract($param);
            $fields = [
                '',
                'legal_balance',
                'change_balance',
                'lever_balance',
                'micro_balance',
                'insurance_balance',
                'mining_machine_balance'
            ];
            $field = ($is_lock ? 'lock_' : '') . $fields[$balance_type];
            $wallet->refresh(); //取最新数据
            $user_id = $wallet->user_id;
            $before = $wallet->$field;
            $after = bc_add($before, $change);
            //判断余额是否充足
            if (bc_comp($after, 0) < 0 && !$overflow) {
                throw new \Exception('Insufficient wallet balance');//钱包余额不足
            }
            $now = time();
            AccountLog::unguard();
            
            $r_md5 = md5($memo);
            $r_md5_en = '';//Redis::get($r_md5.'_en');
            $r_md5_kor = '';//Redis::get($r_md5.'_kor');
            $r_md5_cht = '';//Redis::get($r_md5.'_cht');
            $r_md5_jp = '';//Redis::get($r_md5.'_jp');
            $r_md5_spa = '';//Redis::get($r_md5.'_spa');
            
            if($r_md5_en != ''){
                $memo_en = $r_md5_en;
            }else{
                $r_md5_en = mtranslate($memo, 'en');
                Redis::set($r_md5.'_en',$r_md5_en);  
                $memo_en = $r_md5_en;
            }
            
            if($r_md5_kor != ''){
                $memo_kr = $r_md5_kor;
            }else{
                $r_md5_kor = mtranslate($memo, 'kor');
                Redis::set($r_md5.'_kor',$r_md5_kor);  
                $memo_kr = $r_md5_kor;
            }
            
            if($r_md5_cht != ''){
                $memo_hk = $r_md5_cht;
            }else{
                $r_md5_cht = mtranslate($memo, 'cht');
                Redis::set($r_md5.'_cht',$r_md5_cht);  
                $memo_hk = $r_md5_cht;
            }
            
            if($r_md5_jp != ''){
                $memo_jp = $r_md5_jp;
            }else{
                $r_md5_jp = mtranslate($memo, 'jp');
                Redis::set($r_md5.'_jp',$r_md5_jp);  
                $memo_jp = $r_md5_jp;
            }
            
            if($r_md5_spa != ''){
                $memo_spa = $r_md5_spa;
            }else{
                $r_md5_spa = mtranslate($memo, 'spa');
                Redis::set($r_md5.'_spa',$r_md5_spa);  
                $memo_spa = $r_md5_spa;
            }
            
            $account_log = AccountLog::create([
                'user_id' => $user_id,
                'value' => $change,
                'info' => $memo,
                'info_en' => $memo_en,
                'info_kr' => $memo_kr,
                'info_hk' => $memo_hk,
                'info_jp' => $memo_jp,
                'info_spa' => $memo_spa,
                'type' => $account_log_type,
                'created_time' => $now,
                'currency' => $wallet->currency,
            ]);
            WalletLog::unguard();
            $wallet_log = WalletLog::create([
                'account_log_id' => $account_log->id,
                'user_id' => $user_id,
                'from_user_id' => $from_user_id,
                'wallet_id' => $wallet->id,
                'balance_type' => $balance_type,
                'lock_type' => $is_lock ? 1 : 0,
                'before' => $before,
                'change' => $change,
                'after' => $after,
                'memo' => $memo,
                'memo_en' => $memo_en,
                'memo_kr' => $memo_kr,
                'memo_hk' => $memo_hk,
                'memo_jp' => $memo_jp,
                'memo_spa' => $memo_spa,
                'extra_sign' => $extra_sign,
                'extra_data' => $extra_data,
                'create_time' => $now,
            ]);
            $wallet->$field = $after;
            $result = $wallet->save();
            if (!$result) {
                throw new \Exception('Abnormal change balance of wallet');//钱包变更余额异常
            }
        });
        return true;
    } catch (\Exception $e) {
        throw $e;
        return $e->getMessage();
    } finally {
        AccountLog::reguard();
        WalletLog::reguard();
    }
}


/**
 * 变更用户通证
 *
 * @param \App\Users $user 用户模型实例
 * @param float $change 添加传正数，减少传负数
 * @param integer $account_log_type 需在AccountLog中注册类型
 * @param string $memo
 * @return bool|string
 */
function change_user_candy(&$user, $change, $account_log_type, $memo)
{
    try {
        if (!$user) {
            throw new \Exception('用户异常');
        }
        $user->refresh();
        DB::beginTransaction();
        $before = $user->candy_number;
        $after = bc_add($before, $change);
        $user->candy_number = $after;
        $user_result = $user->save();
        if (!$user_result) {
            throw new \Exception('奖励通证到账失败');
        }
        $memo = $memo . ',原数量:' . $before . ',变更后:' . $after;
        
        $r_md5 = md5($memo);
        $r_md5_en = '';//Redis::get($r_md5.'_en');
        $r_md5_kor = '';//Redis::get($r_md5.'_kor');
        $r_md5_cht = '';//Redis::get($r_md5.'_cht');
        $r_md5_jp = '';//Redis::get($r_md5.'_jp');
        $r_md5_spa = '';//Redis::get($r_md5.'_spa');
        
        if($r_md5_en != ''){
            $memo_en = $r_md5_en;
        }else{
            $r_md5_en = mtranslate($memo, 'en');
            Redis::set($r_md5.'_en',$r_md5_en);  
            $memo_en = $r_md5_en;
        }
        
        if($r_md5_kor != ''){
            $memo_kr = $r_md5_kor;
        }else{
            $r_md5_kor = mtranslate($memo, 'kor');
            Redis::set($r_md5.'_kor',$r_md5_kor);  
            $memo_kr = $r_md5_kor;
        }
        
        if($r_md5_cht != ''){
            $memo_hk = $r_md5_cht;
        }else{
            $r_md5_cht = mtranslate($memo, 'cht');
            Redis::set($r_md5.'_cht',$r_md5_cht);  
            $memo_hk = $r_md5_cht;
        }
        
        if($r_md5_jp != ''){
            $memo_jp = $r_md5_jp;
        }else{
            $r_md5_jp = mtranslate($memo, 'jp');
            Redis::set($r_md5.'_jp',$r_md5_jp);  
            $memo_jp = $r_md5_jp;
        }
        
        if($r_md5_spa != ''){
            $memo_spa = $r_md5_spa;
        }else{
            $r_md5_spa = mtranslate($memo, 'spa');
            Redis::set($r_md5.'_spa',$r_md5_spa);  
            $memo_spa = $r_md5_spa;
        }
            
        $log_result = AccountLog::insertLog([
            'user_id' => $user->id,
            'value' => $change,
            'info' => $memo,
            'info_en' => $memo_en,
            'info_kr' => $memo_kr,
            'info_hk' => $memo_hk,
            'info_jp' => $memo_jp,
            'info_spa' => $memo_spa,
            'type' => $account_log_type,
        ]);
        if (!$log_result) {
            throw new \Exception('记录日志失败');
        }
        DB::commit();
        return true;
    } catch (\Exception $e) {
        DB::rollBack();
        return $e->getMessage();
    }
}

function make_multi_array($fields, $count, $datas)
{
    $return_array = [];
    for ($i = 1; $i <= $count; $i++) {
        $current_data = [];
        foreach ($fields as $key => $field) {
            $current_data[$field] = current($datas[$field]);
            next($datas[$field]);
        }
        $return_array[] = $current_data;
    }
    return $return_array;
}

function get_lang_config($key)
{
    $lang = \Request::header('lang');
    $value = config('lang.'.$lang.'.'.$key);
    return $value;
}