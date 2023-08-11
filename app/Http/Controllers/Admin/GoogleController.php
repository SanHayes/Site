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

class GoogleController extends Controller{

    public function setting(){
        $id = session()->get('admin_id');
        $admin = Admin::where('id', $id)->first()->toArray();
        return view('admin.google.index', ['setting' => $admin]);
    }
}
?>