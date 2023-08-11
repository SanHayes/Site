<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CurrencyType extends Model
{
    protected $table = 'currency_type';
    public $timestamps = false;
    protected $appends = [];

    public function currency()
    {
        return $this->belongsTo('App\CurrencyMatch', 'currency_type', 'value')->withDefault();
    }
}
