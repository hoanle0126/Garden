<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Http;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function createPayment(Request $request)
    {
        $order = [
            'app_id' => config('services.zalo_pay.app_id'),
            'app_user' => 'your_app_user', // User ID của bạn
            'app_trans_id' => date('ymd') . '_' . uniqid(), // Mã giao dịch
            'app_time' => round(microtime(true) * 1000),
            'amount' => $request->amount,
            'embed_data' => json_encode(['promotioninfo' => '']),
            'item' => json_encode([]), // Danh sách các sản phẩm
        ];

        $order['mac'] = hash_hmac('sha256', implode('|', $order), config('services.zalo_pay.key1'));

        $response = Http::post(config('services.zalo_pay.endpoint') . '/create', $order);

        return $response->json();
    }
}
