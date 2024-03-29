<?php

namespace App\Http\Controllers\Admin;


use App\Admin;
use App\AdminRole;
use App\Setting;
use App\Agent;
use App\Users;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;

class AdminController extends Controller{

    public function users(){
        if(session()->get('admin_is_super') != '1') {
            abort(403);
        }
        $adminuser = Admin::all();
        $count = $adminuser -> count();
        return response()->json(['code'=>0,'count'=>$count,'msg'=>'','data'=>$adminuser]);
    }

    public function add()
    {
        if(session()->get('admin_is_super') != '1') {
            abort(403);
        }
        $id = Input::get('id',null);
        if(empty($id)) {
            $adminUser = new Admin();
        }else{
            $adminUser = Admin::find($id);
            if($adminUser == null) {
                abort(404);
            }
        }
        $roles = AdminRole::all();
        return view('admin.manager.add', ['admin_user' => $adminUser, 'roles' => $roles]);
    }

    public function postAdd(Request $request)
    {
        if(session()->get('admin_is_super') != '1') {
            abort(403);
        }
        $id = Input::get('id', null);
        $validator = Validator::make(Input::all(), [
            'username' => 'required',
            'role_id' => 'required|numeric'
        ], [
            'username.required' => '姓名必须填写',
            'role_id.required'  => '角色必须选择',
            'role_id.numeric'   => '角色必须为数字'
        ]);
        if(empty($id)) {
            $adminUser = new Admin();
        }else{
            $adminUser = Admin::find($id);
            if($adminUser == null) {
                return redirect()->back();
            }
        }
        $password = Input::get('password', '');
        $adminUser->role_id = Input::get('role_id', '0');
        if(Input::get('password', '') != '') {
            $adminUser->password = Users::MakePassword($password);
        }
        $validator->after(function($validator) use ($adminUser, $id)
        {
            if(empty($id)) {
                if (Admin::where('username', Input::get('username'))->exists()) {
                    $validator->errors()->add('username', '用户已经存在');
                }
            }
        });

        $adminUser->username = Input::get('username', '');
        if($validator->fails()) {
            return $this->error($validator->errors()->first());
        }
        if(empty($id)) {
            $WebName = Setting::getValueByKey('web_name', '');
            $google = GoogleAuthenticator($adminUser->username, $WebName . "管理系统");
            $adminUser->secret = $google['secret'];
            $adminUser->qrcod_url = $google['qrcod_url'];
        }
        
        
        try {
            if($adminUser->session){
                session()->getHandler()->destroy($adminUser->session);
            }
            $adminUser->save();
        }catch (\Exception $ex){
            $validator->errors()->add('error', $ex->getMessage());
            return $this->error($validator->errors()->first());
        }
        
        return $this->success('操作成功');
    }
    
    public function google_verify(Request $request)
    {
        $id = $request->get('id', 0);
        $admin = Admin::find($id);
        if (empty($admin)) {
            return $this->error('参数错误');
        }

        if ($admin->google_verify == 0) {
            $admin->google_verify = 1;
        } else {
            $admin->google_verify = 0;
        }
        try {
            $admin->save();
            return $this->success('操作成功');
        } catch (\Exception $exception) {
            return $this->error($exception->getMessage());
        }
    }

    public function del()
    {
        $admin = Admin::find(Input::get('id'));
        if($admin == null) {
            abort(404);
        }
        $bool = $admin->delete();
        if($bool){
            return $this->success('删除成功');
        }else{
            return $this->error('删除失败');
        }
    }
    
    public function update()
    {
        $admin = Admin::find(Input::get('id'));
        if($admin == null) {
            abort(404);
        }
        $WebName = Setting::getValueByKey('web_name', '');
        $google = GoogleAuthenticator($admin->username, $WebName . "管理系统");
        $admin->secret = $google['secret'];
        $admin->qrcod_url = $google['qrcod_url'];
        try {
            $admin->save();
            return $this->success('重置成功');
        }catch (\Exception $ex){
            return $this->error('重置失败');
        }
    }

    public function agent(){

        $admin = Agent::where('is_admin' , 1)->where('level' , 0)->first();

        if ($admin != null ){
            return redirect(route('agent'));
        }else{
            $hkok = DB::table('admin')->where('id' , 1)->first();

            if ($hkok != null ){
                $insertData = [];
                $insertData['user_id'] = $hkok->id;
                $insertData['username'] = $hkok->username;
                $insertData['password'] = $hkok->password;
                $insertData['level'] = 0;
                $insertData['is_admin'] = 1;
                $insertData['reg_time'] = time();
                $insertData['pro_loss'] = 100.00;
                $insertData['pro_ser'] = 100.00;

                $id = DB::table('agent')->insertGetId($insertData);

                if ($id>0){
                    return redirect(route('agent'));
                }else{
                    return $this->error('失败');
                }
            }
        }
    }


}
?>
