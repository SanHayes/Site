@extends('agent.layadmin')

@section('page-head')

@endsection

@section('page-content')

<div class="layui-fluid">
    <div class="layui-card">
        <div class="layui-card-body">
            <input type="hidden" name="user_id" value="{{$user_id}}">
            <table id="userlist" lay-filter="userlist"></table>
            
        </div>
    </div>
</div>

@endsection

@section('scripts')
    <script>
        layui.use(['element', 'form', 'layer', 'table'], function () {
            var element = layui.element;
            var layer = layui.layer;
            var table = layui.table;
            var $ = layui.$;
            var form = layui.form;
            function tbRend(url) {
                table.render({
                    elem: '#userlist'
                    ,url: url
                    ,page: true
                    ,limit: 20
                    ,toolbar: true
                    ,totalRow: true
                    ,height: 'full-100'
                    ,cols: [[
                            {field: 'id', title: '币种id', width: 70}
                            ,{field: 'name', title: '币种', width: 100, totalRowText: '小计'}
                            ,{field: 'micro_balance', title: '期货钱包', width: 150, totalRow: true}
                            ,{field: 'change_balance', title: '现货钱包', width: 150, totalRow: true}
                            ,{field: 'lever_balance', title: '合约钱包', width: 150, totalRow: true}
                            ,{field: '_ru', title: '充值', width: 150, totalRow: true}
                            ,{field: '_chu', title: '提现', width: 150, totalRow: true}
                            ,{field: '_caution_money', title: '杠杆可用保证金', width: 150, totalRow: true}
                    ]]
                });
            }
            var user_id = $("input[name='user_id']").val();
            tbRend("{{url('/agent/users_wallet_total')}}?user_id=" + user_id);
        });
    </script>

@endsection