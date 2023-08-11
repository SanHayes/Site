<?php

namespace App\Http\Controllers\Admin;

use App\{Ltc,LtcBuy,Currency, CurrencyMatch};
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Request;

class LtcController extends Controller{

    public function index(){
        return view("admin.ltc.index");
    }

    public function lists(Request $request){
        $limit = $request->get('limit',10);
        $list = Ltc::orderBy('id','desc')->paginate($limit);
        return response()->json(['code'=>0,'data'=>$list->items(),'count'=>$list->total()]);
    }

    public function add()
    {
        $currency = Currency::get();
        return view('admin.ltc.add',['currencies'=>$currency]);
    }

    public function postAdd(Request $request){
        $currency_id = $request->get('currency_id','');
        $days = $request->get('days','');
        $rates = $request->get('rates','');
        $pricemin = $request->get('pricemin','');
        $state = $request->get('state','');
        if(empty($currency_id)){
            return $this->error('请选择币种');
        }
        if(empty($days)){
            return $this->error('请输入产品期限');
        }
        if(empty($rates)){
            return $this->error('请输入产品利率');
        }
        if(empty($pricemin)){
            return $this->error('请输入起投金额');
        }
        $currency_name = Currency::where('id',$currency_id)->value('name');

        $id = $request->get('id','');
        if(empty($id)){
            $result = new Ltc();
        }else{
            $result = Ltc::find($id);
        }
        try{
            $result->currency_id = $currency_id;
            $result->currency_name = $currency_name;
            $result->days = $days;
            $result->rates = $rates;
            $result->pricemin = $pricemin;
            $result->state = $state;
            $result->save();
            return $this->success('添加成功');
        }catch (\Exception $e){
            return $this->error($e->getMessage());
        }
    }

    public function edit()
    {
        $id = Input::get('id',null);
        if(empty($id)){
            return $this->error('参数错误');
        }
        $result = DB::table('futures_market')->where('id', $id)->first();
        if(empty($result)){
            return $this->error('无此数据');
        }
        $currency = Currency::get();
        return view('admin.ltc.add', ['result'=>$result, 'currencies'=>$currency]);
    }

    public function del(Request $request){
        $id = $request->get('id','');
        if(empty($id)){
            return $this->error('参数错误');
        }
        $result = Ltc::find($id);
        try{
            $result->delete();
            return $this->success('删除成功');
        }catch(\Exception $e){
            return $this->error($e->getMessage());
        }
    }
    
    public function ltcBuy(){
        return view("admin.ltc.ltcBuy");
    }

    public function buyList(Request $request){
        $limit = $request->get('limit',10);
        $account = $request->input('account', '');
        $result = new LtcBuy();
        $result = $result::with(['user'])
            ->when($account != '', function ($query) use ($account) {
                $query->whereHas('user', function ($query) use ($account) {
                    $account != '' && $query->where("account_number", 'like', '%' . $account . '%');
                });
            })->orderBy('id','desc')->paginate($limit);
        return response()->json(['code'=>0,'data'=>$result->items(),'count'=>$result->total()]);
    }
    
    public function ltcHandle()
    {
        $id = $request->get('id',0);
        if(empty($id)){
            return $this->error('参数错误');
        }
        $futures_market_buy = DB::table('futures_market_buy')->where('id',$id)->get();
        if($futures_market_buy){
            DB::beginTransaction();
            $users_wallet = DB::table('users_wallet')->where([
                ['user_id','=',$futures_market_buy->user_id],
                ['currency','=',3]
            ])->increment('micro_balance', $futures_market_buy->interest + $futures_market_buy->money); //返回的金额  待定
            if($users_wallet){
                $interestinfo = '期货赎回，返还利息USDT:'.$futures_market_buy->interest;
                //写入 account_log
                $account_id = DB::table('account_log')->insertGetId(['user_id' => $futures_market_buy->user_id, 'value' => '+'.$futures_market_buy->interest, 'created_time' => time(), 'info' => $interestinfo,'type' => 666, 'currency' => 3,'info_en' => $interestinfo,'info_jp' => $interestinfo,'info_hk' => $interestinfo,'info_spa' => $interestinfo,'info_kr' => $interestinfo,'transfered' => 1]);
                $futures_update = DB::table('futures_market_buy')->where(['id'=>$futures_market_buy->id])->update(['state'=>2]);
                if($futures_update){
                    $moneyinfo = '期货赎回，返还本金USDT:'.$futures_market_buy->money;
                    //写入 account_log
                    $account_id = DB::table('account_log')->insertGetId(['user_id' => $futures_market_buy->user_id, 'value' => '+'.$futures_market_buy->money, 'created_time' => time(), 'info' => $moneyinfo,'type' => 666, 'currency' => 3,'info_en' => $moneyinfo,'info_jp' => $moneyinfo,'info_hk' => $moneyinfo,'info_spa' => $moneyinfo,'info_kr' => $moneyinfo,'transfered' => 1]);
                    DB::commit();
                } else {
                    DB::rollBack();
                }
            }else{
                return $this->error('金额写入失败');
            }
        }else{
            return $this->error('数据不存在');
        }
    }
}
?>