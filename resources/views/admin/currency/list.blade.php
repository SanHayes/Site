@extends('admin._layoutNew')

@section('page-head')
<style>
    p.percent {
        text-align: right;
        margin-right: 10px;
    }
    p.percent::after {
        content: '%';
    }
</style>
@endsection

@section('page-content')
    <table id="demo" lay-filter="test"></table>
@endsection

@section('scripts')
    <script type="text/html" id="barDemo">
        <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
        <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
    </script>
    <script type="text/html" id="toolbar">
        <div>
            <button class="layui-btn layui-btn-sm layui-btn-primary" lay-event="refresh"> <i class="layui-icon layui-icon-refresh"></i> </button>
            <button class="layui-btn layui-btn-sm layui-btn-primary" lay-event="add"> <i class="layui-icon layui-icon-add-1"></i> 添加</button>
        </div>
    </script>
    <script>
        layui.use(['table','form'], function(){
            var table = layui.table;
            var $ = layui.jquery;
            var form = layui.form;
            //第一个实例
            table.render({
                elem: '#demo'
                ,toolbar: '#toolbar'
                ,url: "{{url('admin/currency_type_list')}}" //数据接口
                ,page: true //开启分页
                ,id:'mobileSearch'
                ,cols: [[ //表头
                    {field: 'id', title: 'id', width:60, sort: true}
                    ,{field: 'title', title: '名称'}
                    ,{field: 'value', title: '值'}
                    ,{field: 'sort', title: '排序'}
                    ,{title:'操作',toolbar: '#barDemo'}
                ]]
            });

            table.on('toolbar(test)', function (obj) {
                switch (obj.event) {
                    case 'add':
                        layer.open({
                            title: '添加币种类型'
                            ,type: 2
                            ,content: '/admin/currency_type_add'
                            ,area: ['480px', '650px']
                        });
                        break;
                    case 'refresh':
                        window.location.reload();
                        break;
                    default:
                        break;
                }
            });

            table.on('tool(test)', function(obj){
                var data = obj.data;
                if(obj.event === 'del'){
                    layer.confirm('真的删除行么', function(index){
                        $.ajax({
                            url:'{{url('admin/currency_type_del')}}',
                            type:'post',
                            dataType:'json',
                            data:{id:data.id},
                            success:function (res) {
                                if(res.type == 'error'){
                                    layer.msg(res.message);
                                }else{
                                    obj.del();
                                    layer.close(index);
                                }
                            }
                        });


                    });
                } else if(obj.event === 'edit'){
                    layer_show('编辑币种类型','{{url('admin/currency_type_add')}}?id='+data.id);
                }
            });

            //监听提交
            form.on('submit(mobile_search)', function(data){
                var account_number = data.field.account_number;
                table.reload('mobileSearch',{
                    where:{account_number:account_number},
                    page: {curr: 1}         //重新从第一页开始
                });
                return false;
            });

        });
    </script>

@endsection