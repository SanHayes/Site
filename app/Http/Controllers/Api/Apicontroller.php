<?php
namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Input;
use Symfony\Component\HttpFoundation\Request;
/**
 * 首页接口
 */
class ApiController extends Controller
{

    public function index()
    {
        $msg = 'http';
        $data = 'SERVER_ERROR';
        $rtp = Input::get("rtp", "GetQuotesDetail");
        if($rtp == 'GetQuotesDetail'){
            $id = Input::get("id", 0);
            if($id == 0){
                $msg = 'SERVER_ERROR';
            }else{
                $data = Cache::get($rtp . '&' . $id);
                if ($data){
                    $time = time() * 1000;
                    $data['quotes']['updatetime'] = $time;
                    $data['quotes']['time'] = date('m-d H:i:s', $time / 1000);
                    return array("msg" => 'cache', "time" => time(), "date" => date('m-d H:i:s'), "data" => $data);
                } else {
                    $data = $this->cache($rtp, $id);
                }
            }
        }else{
            $type = Input::get("type", 1);
            $qid = Input::get("qid", 0);
            if($qid == 0){
                $msg = 'SERVER_ERROR';
            }else{
                $data = Cache::get($rtp . '&' . $qid . '&' . $type);
                if ($data){
                    return array("msg" => 'cache', "time" => time(), "date" => date('m-d H:i:s'), "data" => $data);
                } else {
                    $data = $this->cache($rtp, $qid, $type);
                }
            }
        }
        return array("msg" => $msg, "time" => time(), "date" => date('m-d H:i:s'), "data" => $data);
    } 
    
    public function cache($rtp, $id, $type = 1)
    {
        if($rtp == 'GetQuotesDetail'){
            $data = json_decode(file_get_contents('https://m.sojex.net/api.do?rtp=GetQuotesDetail&id=' . $id), true)['data'];
            Cache::put($rtp . '&' . $id, $data, 1);
            return $data;
        }else{
            $data = json_decode(file_get_contents('https://test.aozhao.vip/api.do?rtp=CandleStick&type='.$type.'&qid='.$id), true)['data'];
            Cache::put($rtp . '&' . $id . '&' . $type, $data, $type);
            return $data;
        }
    }
    
    public function formatTimeline($type, $day_time = null)
    {
        empty($day_time) && $day_time = time();
        switch ($type) {
            //1分钟
            case 1:
                $time_string = date('Y-m-d H:i', $day_time);
                $time = strtotime($time_string);
                break;
            //5分钟
            case 2:
                $start_time = strtotime(date('Y-m-d H:00:00', $day_time));
                $minute = intval(date('i', $day_time));
                $multiple = floor($minute / 5);
                $minute = $multiple * 5;
                $time = $start_time + $minute * 60;
                break;
            //15分钟
            case 3:
                $start_time = strtotime(date('Y-m-d H:00:00', $day_time));
                $minute = intval(date('i', $day_time));
                $multiple = floor($minute / 15);
                $minute = $multiple * 15;
                $time = $start_time + $minute * 60;
                break;
            //30分钟
            case 4:
                $start_time = strtotime(date('Y-m-d H:00:00', $day_time));
                $minute = intval(date('i', $day_time));
                $multiple = floor($minute / 30);
                $minute = $multiple * 30;
                $time = $start_time + $minute * 60;
                break;
            //1小时
            case 5:
                $time = strtotime(date('Y-m-d H:00:00', $day_time));
                break;
            //一天
            case 6:
                $time = strtotime(date('Y-m-d', $day_time));
                break;
            
            //一周
            case 7:
                $start_time = strtotime(date('Y-m-d', $day_time));
                $week = intval(date('w', $day_time));
                $diff_day = $week;
                $time = $start_time - $diff_day * 86400;
                break;
            //一月
            case 8:
                $time_string = date('Y-m', $day_time);
                $time = strtotime($time_string);
                break;
            //一年
            case 9:
                $time = strtotime(date('Y-01-01', $day_time));
                break;
            default:
                $time = time();
                break;
        }
        return $time * 1000;
    }
}
