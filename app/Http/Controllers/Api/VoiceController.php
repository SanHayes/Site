<?php
//钱包专用的控制器 交易所可以删掉这个控制器ldh
namespace App\Http\Controllers\Api;

use App\ChargeReq;
use App\UsersWalletOut;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;
use App\Http\Requests;

class VoiceController extends Controller
{
    public function lists(){
        $WalletOut = UsersWalletOut::where(['status'=>1,'look'=>0])->get();
        $ChargeReq = DB::table('charge_req')
            ->join('users', 'users.id', '=', 'charge_req.uid')
            ->join('currency', 'currency.id', '=', 'charge_req.currency_id')
            ->select('charge_req.*', 'users.account_number', 'currency.name')
            ->where(['charge_req.status'=>1,'charge_req.look'=>0,'charge_req.is_online'=>0])
            ->orderBy('charge_req.id', 'desc')->get();
        $Orders = DB::table('micro_orders')
            ->join('users', 'users.id', '=', 'micro_orders.user_id')
            ->join('currency', 'currency.id', '=', 'micro_orders.currency_id')
            ->select('micro_orders.*', 'users.account_number', 'currency.name')
            ->where(['micro_orders.status'=>1,'micro_orders.look'=>0])
            ->orderBy('micro_orders.id', 'desc')->get();
        return $this->success([
            'withdraw' => $WalletOut,
            'recharge' => $ChargeReq,
            'orders' => $Orders
        ]);
    }
}
