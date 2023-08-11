<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LtcBuy extends Model
{
    protected $table = 'futures_market_buy';
    public $timestamps = false;
    
    
    /**
     * 用户关联
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user() {
        // 第一个参数为目标分类的模型，第二个参数为目标分类的主键ID，第三个参数为关联字段
        return $this->hasOne(Users::class, 'id', 'user_id')->select(['id','account_number']);
    }
}
