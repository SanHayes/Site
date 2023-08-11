@extends('admin._layoutNew')
@section('page-head')
    <style>
        li[hidden] {
            display: none;
        }

        .layui-form-label {
            width: 180px;
        }

        .layui-input-block {
            margin-left: 210px;
        }
        textarea{
            resize: none;
        }
    </style>
@stop
@section('page-content')

    <div class="larry-personal-body clearfix">
        <form class="layui-form col-lg-5">
            <div class="layui-tab">
                <div class="layui-tab-content">
                    <!--谷歌验证-->
                    <div class="layui-tab-item layui-show">
                        <div class="layui-form-item">
                            <label class="layui-form-label">登录账号[UserName]：</label>
                            <div class="layui-input-block">
                                <div class="layui-form-mid">@if(isset($setting['username'])){{$setting['username'] ?? ''}}@endif</div>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">谷歌密钥[SECRET]：</label>
                            <div class="layui-input-block">
                                <div class="layui-form-mid">@if(isset($setting['secret'])){{$setting['secret'] ?? ''}}@endif</div>
                            </div>
                        </div>
                        
                        <div class="layui-form-item layui-form-text">
                            <label class="layui-form-label">绑定二维码[QrCode]：</label>
                            <div class="layui-input-block">
                                <img src="@if(!empty($setting['qrcod_url'])){{$setting['qrcod_url']}}@endif" id="img_thumbnail" class="thumbnail" style="display: @if(!empty($setting['qrcod_url'])){{"block"}}@else{{"none"}}@endif;max-width: 200px;height: auto;margin-top: 5px;">
                            </div>
                        </div>
                        
                        <div class="layui-form-item">
                            <label class="layui-form-label">是否开启谷歌验证：</label>
                            <div class="layui-input-block">
                                <div class="layui-input-inline">
                                    <input type="checkbox" value="@if(isset($setting['id'])){{$setting['id'] ?? ''}}@endif" lay-skin="switch" lay-filter="sexDemo" lay-text="是|否" {{$setting['google_verify'] == 1 ? 'checked' : '' }}>
                                </div>
                                <div class="layui-form-mid layui-word-aux">请绑定Authenticator成功后,再启用谷歌验证,否则将不能登录</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
@stop
@section('scripts')
    <script type="text/javascript">
        window.onload = function () {
            layui.use(['layer', 'table'], function () { //独立版的layer无需执行这一句
                var $ = layui.jquery;
                var layer = layui.layer; //独立版的layer无需执行这一句
                var table = layui.table;
                var form = layui.form;
                //监听审核操作
                form.on('switch(sexDemo)', function(obj){
                    var id = this.value;
                    
                    $.ajax({
                        url:'{{url('admin/manager/google_verify')}}',
                        type:'post',
                        dataType:'json',
                        data:{id:id},
                        success:function (res) {
                            layer.msg(res.message);
                        }
                    });
                });
            });
        }
    </script>
@stop