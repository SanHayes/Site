@extends('admin._layoutNew')

@section('page-head')
<style>
    .hide {
        display: none;
    }
</style>
@endsection

@section('page-content')
    <form class="layui-form" action="">
        <div class="layui-tab">
            <div class="layui-tab-content">
                <div class="layui-tab-item layui-show">
                    <div class="layui-form-item">
                        <label class="layui-form-label">名称</label>
                        <div class="layui-input-inline">
                            <input type="text" name="title" lay-verify="required" autocomplete="off" placeholder="" class="layui-input" value="{{$result->title}}">
                        </div>
                        <div class="layui-form-mid layui-word-aux">请确保在交易所中该类型名称是唯一的</div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">排序</label>
                        <div class="layui-input-inline">
                            <input type="number" class="layui-input" id="sort" name="sort" value="{{$result->sort}}" placeholder="排序为升序">
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">值</label>
                        <div class="layui-input-inline">
                        <input type="number" class="layui-input" id="value" name="value" value="{{$result->value}}" placeholder="值">
                        </div>
                        <div class="layui-form-mid layui-word-aux">$</div>
                    </div>
                </div>
            </div>
        </div>
       
        <input id="currency_type_id" type="hidden" name="id" value="{{$result->id}}">
        <div class="layui-form-item">
            <div class="layui-input-block">
                <button class="layui-btn" lay-submit="" lay-filter="demo1">立即提交</button>
                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
            </div>
        </div>
    </form>

@endsection

@section('scripts')
<script>
    layui.use(['upload', 'form', 'laydate', 'element', 'layer'], function () {
        var upload = layui.upload 
            ,form = layui.form
            ,layer = layui.layer
            ,$ = layui.$
            ,laydate = layui.laydate
            ,index = parent.layer.getFrameIndex(window.name)
            ,element = layui.element
        var uploadInst = upload.render({
            elem: '#upload_test' //绑定元素
            ,url: '{{URL("api/upload")}}?scene=admin' //上传接口
            ,done: function(res){
                //上传完毕回调
                if (res.type == "ok"){
                    $("#thumbnail").val(res.message)
                    $("#img_thumbnail").show()
                    $("#img_thumbnail").attr("src",res.message)
                } else{
                    alert(res.message)
                }
            }
            ,error: function(){
                //请求异常回调
            }
        }); 
        var currency_type_id = $('#currency_type_id').val();

        //监听提交
        form.on('submit(demo1)', function(data){
            var data = data.field;
            $.ajax({
                url:'{{url('admin/currency_type_postAdd')}}'
                ,type:'post'
                ,dataType:'json'
                ,data: data
                ,success: function(res) {
                    layer.msg(res.message, {
                        time: 2000
                        ,end: function () {
                            if(res.type == 'ok') {
                                parent.layer.close(index);
                                parent.window.location.reload();
                            }
                        }
                    });
                    
                }
            });
            return false;
        });
        form.on('checkbox(microtrade)', function (data) {
            if (data.elem.checked) {
                $('#micro_trade_fee').removeClass('hide');
            } else {
                $('#micro_trade_fee').addClass('hide');
            }
        });
        
    });
</script>

@endsection