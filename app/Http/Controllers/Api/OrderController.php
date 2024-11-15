<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render("ListOrderPage/index", [
            'test' => Order::latest("created_at")->first()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = $request->user();

        $order = Order::create([
            'user_id' => $user->id,
            'total_price' => $request->total,
            'address_id' => $request->address['id'],
            'payment' => $request->payment['title'],
            "current_status" => "Order Placed"
        ]);

        $order->status()->create([
            'title' => "Order Placed",
            "active" => true
        ]);

        $order->status()->create([
            'title' => "Shipping"
        ]);

        $order->status()->create([
            'title' => "Completed"
        ]);

        if (!empty($request->products)) {
            foreach ($request->products as $product) {
                $order->Product()->attach($product['id'], [
                    "quantity" => $product['quantity']
                ]);
            }
        }

        $cart = $user->Cart;

        $cart->product()->detach();
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {

        $roleName = request()->user()->getRoleNames()->first();

        if ($roleName == "admin") {
            return Inertia::render("OrderManagerDetail/index", [
                "order" => new OrderResource($order),
                "role" => request()->user()->getRoleNames()
            ]);
        }

        if (strstr($roleName, ',', true) == "delivery") {
            return Inertia::render("DeliveryDetailPage/index", [
                "order" => new OrderResource($order),
                "role" => request()->user()->getRoleNames()
            ]);
        }

        return Inertia::render("OrderDetailPage/index", [
            "order" => new OrderResource($order),
            "role" => request()->user()->getRoleNames()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function cancel(Request $request, Order $order)
    {
        $order->status()->where("title", "Cancel")->update([
            "active" => true
        ]);
        $order->status()->whereNot("title", "Cancel")->update([
            "active" => false
        ]);
        $order->update([
            "current_status" => "Cancelled"
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function submit(Request $request, Order $order)
    {
        $order->status()->where("title", "Shipping")->update([
            "active" => true
        ]);
        $order->status()->whereNot("title", "Shipping")->update([
            "active" => false
        ]);
        $order->update([
            "current_status" => "Shipping"
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        $order->status()->where("title", $request->status)->update([
            "active" => true
        ]);
        $order->update([
            "current_status" => $request->status
        ]);

        return response()->json([
            "order" => $order
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        $order->delete();
    }
}
