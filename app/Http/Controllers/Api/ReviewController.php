<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ReviewResource;
use App\Models\Review;
use App\Models\ReviewLike;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        Review::create([
            "rating" => $request->rating,
            "comment" => $request->comment,
            "user_id" => $request->user()->id,
            "product_id" => $request->product,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Review $review)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Review $review)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Review $review)
    {
        $reviewValue = Review::find($review)->first();
        $reviewLike = ReviewLike::where("user_id", $request->user()->id)->where("review_id", $review->id)->first();

        if (!$reviewLike) {
            ReviewLike::create([
                "user_id" => $request->user()->id,
                "review_id" => $review->id,
                "like" => $request->like === "like",
                "dislike" => $request->like === "dislike"
            ]);
        } else {
            // Nếu yêu cầu là like
            if ($request->like === "like") {
                $reviewLike->update([
                    "like" => !$reviewLike->like, // Đổi trạng thái like
                    "dislike" => false // Đảm bảo dislike luôn false nếu đang like
                ]);
            }
            // Nếu yêu cầu là dislike
            else {
                $reviewLike->update([
                    "dislike" => !$reviewLike->dislike, // Đổi trạng thái dislike
                    "like" => false // Đảm bảo like luôn false nếu đang dislike
                ]);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Review $review)
    {
        //
    }
}
