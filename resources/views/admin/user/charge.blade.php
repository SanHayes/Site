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
                <button class="layui-btn btn-search" id="mobile_search" lay-submit lay-filter="mobile_search"><i
                            class="layui-icon layui-icon-search"></i></button>
            </div>
        </div>
    </div>

    <script type="text/html" id="switchTpl">
        <input type="checkbox" name="is_recommend" value="@{{d.id}}" lay-skin="switch" lay-text="是|否"
               lay-filter="sexDemo" @{{ d.is_recommend== 1 ? 'checked' : '' }}>
    </script>

    <table id="demo" lay-filter="test"></table>
    <script type="text/html" id="barDemo">
        <a class="layui-btn layui-btn-xs" lay-event="show">查看</a>
    </script>
    <script type="text/html" id="statustml">
        @{{d.status==1 ? '<span class="layui-badge layui-bg-green">'+'&nbsp;&nbsp;待审核&nbsp;&nbsp;'+'</span>' : '' }}
        @{{d.status==2 ? '<span class="layui-badge layui-bg-red">'+'充值完成'+'</span>' : '' }}
        @{{d.status==3 ? '<span class="layui-badge layui-bg-black">'+'充值拒绝'+'</span>' : '' }}
    </script>
    <script type="text/html" id="ophtml">
        @{{d.status==1 ? '<button type="button" class="layui-btn layui-btn-xs" onclick="pass(\'+d.id+\')">通过</button><button type="button" class="layui-btn layui-btn-danger layui-btn-xs" onclick="refuse(\'+d.id+\')" data-id=\'+d.id+\' class="btn-refuse">拒绝</button>' : '' }}
    </script>
    <script type="text/html" id="imagetml">
        <img onclick="show('@{{d.image}}')" src="@{{d.image}}" style="width:30px;">
    </script>

@endsection

@section('scripts')
    <script>
        layui.use(['table', 'form', 'layer'], function () {
            var table = layui.table;
            var $ = layui.jquery;
            var form = layui.form;
            var layer = layui.layer;
            var util = layui.util;
            //第一个实例
            var Table = table.render({
                elem: '#demo'
                , url: "{{url('admin/user/charge_list')}}" //数据接口
                , page: true //开启分页
                , id: 'mobileSearch'
                , cols: [[ //表头
                    {field: 'id', title: 'ID', width: 80, sort: true}
                    , {field: 'account_number', title: '用户名', width: 100}
                    , {field: 'name', title: '虚拟币', width: 80}
                    , {field: 'is_online', title: '充值类型', width: 120, templet:function(obj){
                        return obj.is_online == 0 ? '区块链充值' : '在线充值';
                    }}
                    , {field: 'user_account', title: '支付账号/订单号', width: 200}
                    , {field: 'image', title: '转账截图', align: 'center', width: 100, templet: '#imagetml'}
                    // ,{field: 'address', title: '提币地址', width:100}
                    , {field: 'amount', title: '数量', width: 180}
                    // ,{field: 'hes_account', title: '承兑商交易账号', width:180}
                    // ,{field: 'money', title: '交易额度', width:100}
                    , {field: 'status', title: '交易状态', width: 100, templet: '#statustml'}
                    , {field: 'created_at', title: '提币时间', width: 180}
                    , {field: 'to_address', title: '充值账号', width: 180}
                    , {field: 'remark', title: '备注', width: 180}
                    , {fixed: 'right', title: '操作', width: 120, align: 'center', toolbar: '#ophtml'}
                ]]
            });
            
            // form.on('submit(demo-table-search)',function(obj){
            //     var account =  $("input[name='account']").val()
            //     tbRend("{{url('admin/user/charge_list')}}?account="+account);
            //     return false;
            // });
            form.on('submit(mobile_search)', function(obj){
                console.log(obj.field)
                Table.reload({
                    where: obj.field
                });
                return false;
            });
            //监听热卖操作
            // form.on('switch(sexDemo)', function(obj){
            //     var id = this.value;
            //     $.ajax({
            //         url:'{{url('admin/product_hot')}}',
            //         type:'post',
            //         dataType:'json',
            //         data:{id:id},
            //         success:function (res) {
            //             if(res.error != 0){
            //                 layer.msg(res.msg);
            //             }
            //         }
            //     });
            // });
        })

        function show(url) {
            layer.open({
                title: '转账截图',
                type: 1,
                area: ['640px', '700px'],
                content: `<img src='${url}' style="width:640px;">` //这里content是一个普通的String
            });
        }

        function pass(id) {
            var loadIndex = layer.load(0);
            $.ajax({
                url: '{{url('admin/user/pass_req')}}',
                type: 'post',
                dataType: 'json',
                data: {id: id},
                success: function (res) {
                    console.log(res);
                    if (res.type != 'ok') {
                        alert(res.message);
                        window.location.reload();
                    } else {
                        layer.msg('充值确认成功');
                        window.location.reload();
                    }
                    layer.close(loadIndex)
                }
            })
        }

        function refuse(id) {
            var loadIndex = layer.load(0);
            $.ajax({
                url: '{{url('admin/user/refuse_req')}}',
                type: 'post',
                dataType: 'json',
                data: {id: id},
                success: function (res) {
                    if (res.type != 'ok') {
                        alert(res.message);
                        window.location.reload();
                    } else {
                        layer.msg('充值驳回成功');
                        window.location.reload();
                    }
                    layer.close(loadIndex)
                }
            })
        }

        //监听提交

    </script>

@endsection
