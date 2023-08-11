<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Users;

class Qrpng extends Controller
{
    
    public function qr_create(Request $request){
         include_once __DIR__.'/phpqrcode.php';
                $qrcode = new \QRcode();
        ob_clean();
        $png = $qrcode->png($request->get('text'), false , QR_ECLEVEL_L , 10);
        return $png;
    }
    
    //获取在线客服列表
    public function online_service_list(){
        $kf_list = config('new_config.whatsapps');
        $whatsapps = explode(',',$kf_list);
        foreach ($whatsapps as $k => $v){
            $whatsapps[$k] = 'https://wa.me/'.$v;
        }
        return $this->success($whatsapps);
    }
    
    public function get_withdraw_password(Request $request){
        $user_id = Users::getUserId();
        $user = Users::where('id',$user_id)->first();
        if (empty($user)) return $this->error("账号错误");
        if (empty($user['withdraw_password'])){
            return $this->success("no");
        } else {
            return $this->success("yes");
        }
    }
    
    // 修改密码
    public function forgetPassword(Request $request)
    {
        $user_id = Users::getUserId();
        $oldpassword = $request->get('oldpassword', '');
        $password = $request->get('password', '');
        $repassword = $request->get('repassword', '');
        // $code = Input::get('code', '');

        if (empty($password) || empty($repassword) || empty($oldpassword)) {
            return $this->error('请输入登录密码,新登录密码和确认密码');
        }
        
        if ($repassword != $password) {
            return $this->error('输入两次密码不一致');
        }
        
        // $code_string = session('code');
        // if ($code != '9188') {
        //     if (empty($code) || ($code != $code_string)) {
        //         return $this->error('验证码不正确');
        //     }
        // }
        
        $user = Users::where('id',$user_id)->first();
        if (empty($user)) {
            return $this->error('账号不存在');
        }
        if ($user['password'] != Users::MakePassword($oldpassword)) {
            return $this->error('登录密码错误');
        }
        $user->password = Users::MakePassword($password);
        
        try {
            $user->save();
            session([
                'code' => ''
            ]); // 销毁
            return $this->success("修改密码成功");
        } catch (\Exception $ex) {
            return $this->error($ex->getMessage());
        }
    }
    
    //设置提现密码
    public function set_withdraw_password(Request $request){
        $user_id = Users::getUserId();
        $old_password = $request->get('old_password','');
        $withdraw_password = $request->get('withdraw_password','');
        $withdraw_password_confirm = $request->get('withdraw_password_confirm','');
        // $code = $request->get('code', '');
        if (empty($old_password) || empty($withdraw_password) || empty($withdraw_password_confirm)) {
            return $this->error('请输入提现密码,新提现密码和确认密码');
        }
        $user = Users::where('id',$user_id)->first();
        if (empty($user)) return $this->error("账号错误");
        if ($user['withdraw_password'] != $old_password)  return $this->error("提现密码错误");
        if ($withdraw_password != $withdraw_password_confirm) return $this->error("输入两次密码不一致");
        // $code_string = session('code');
        // if ($code != '9188') {
        //     if (empty($code) || ($code != $code_string)) {
        //         return $this->error('验证码不正确');
        //     }
        // }
        Users::where('id',$user_id)->update(["withdraw_password" => $withdraw_password]);
        return $this->success("设置提现密码成功");
    }
    
    public function jm_password($password){
        $salt = 'ABCDEFG';
        $passwordChars = str_split($password);
        foreach ($passwordChars as $char) {
            $salt .= md5($char);
        }
        return md5($salt);
    }
    
    public function fanyi(Request $request){
        $text=$request->get('text');
        $lang=$request->get('lang');
        $message = mtranslate($text, $lang);
        return json_encode(['code'=>200, 'msg'=>$message]);
    }
}