@extends('admin._layoutNew')

@section('page-head')

@endsection

@section('page-content')
    <div class="layui-form">
        <div class="layui-item hidden" id="more">
            <div class="layui-inline" style="margin-left: 10px;">
                <label>账号</label>
                <div class="layui-input-inline">
                    <input type="text" name="account" placeholder="请输入手机号或邮箱" autocomplete="off" class="layui-input" value="">
                </div>
            </div>
            <div class="layui-btn-group">
                <button class="layui-btn" id="btn-search" lay-submit lay-filter="btn-search"><i class="layui-icon layui-icon-search"></i></button>
            </div>
        </div>
    </div>

    <table id="ltclist" lay-filter="ltclist"></table>

    <script type="text/html" id="barDemo">
        <a class="layui-btn layui-btn-xs" lay-event="handle">赎回</a>
        <a class="layui-btn layui-btn-xs" lay-event="edit">修改</a>
        <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="delete">删除</a>
    </script>

@endsection

@section('scripts')
<script>
    window.onload = function() {
        document.onkeydown=function(event){
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if(e && e.keyCode==13){ // enter 键
                $('#btn-search').click();
            }
        };
        layui.use(['element', 'form', 'layer', 'table'], function () {
            var element = layui.element;
            var layer = layui.layer;
            var table = layui.table;
            var $ = layui.$;
            var form = layui.form;
            var data_table = table.render({
                elem: '#ltclist'
                , url: "{{url('/admin/ltc/buyList')}}"
                , page: true
                , limit: 10
                , id: 'mobileSearch'
                , cols: [[
                    { field: 'id', title: 'ID', width: 100}
                    , {field:'account_number', title: '账号', width:100, templet:function(obj){
                            return obj.user.account_number;
                        }
                    }
                    , {field:'currency_name',title:'期货名称', width: 100}
                    , {field:'days',title:'产品期限', width: 100, templet:function(obj){
                            return obj.days + "(天)";
                        }
                    }
                    , {field:'money',title:'购买金额'}
                    , {field:'interest',title:'最终收益'}
                    , {field:'time',title:'下单时间', templet:function(obj){
                            return layui.util.toDateString(obj.time * 1000, 'yyyy-MM-dd HH:mm:ss');
                        }
                    }
                    , {field:'totime',title:'结算时间', templet:function(obj){
                            return layui.util.toDateString(obj.totime * 1000, 'yyyy-MM-dd HH:mm:ss');
                        }
                    }
                    , {field:'state',title:'状态', templet:function(obj){
                            return obj.state == 1 ? '未结算' : '已赎回';
                        }
                    }
                    //, {fixed: 'right', title: '操作', minWidth: 150, align: 'center', toolbar: '#barDemo'}
                ]]
            });
            form.on('submit(btn-search)', function (data) {
                var option = {
                    where: data.field,
                    page: {curr: 1}
                }
                data_table.reload(option);
                return false;
            });
            //监听工具条
            table.on('tool(ltclist)', function (obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
                var data = obj.data;
                var layEvent = obj.event;
                var tr = obj.tr;
                if (layEvent === 'delete') { //删除
                    layer.confirm('真的要删除吗？', function (index) {
                        //向服务端发送删除指令
                        $.ajax({
                            url: '{{url('admin/ltc/del')}}',
                            type: 'post',
                            dataType: 'json',
                            data: {id: data.id},
                            success: function (res) {
                                if (res.type == 'ok') {
                                    layer.alert(res.message);
                                    obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
                                    layer.close(index);

                                } else {
                                    layer.close(index);
                                    layer.alert(res.message);
                                }
                            }
                        });
                    });
                } else if (layEvent === 'edit') { //编辑
                    var index = layer.open({
                        title: '修改订单'
                        , type: 2
                        , content: '{{url('/admin/ltc/edit')}}?id=' + data.id
                        , maxmin: true
                    });
                    layer.full(index);
                }
            });
        });
    }
</script>

@endsection