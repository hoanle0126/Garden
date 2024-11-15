import { Palette } from "@/Theme/elements/palette";
import { Icon } from "@iconify/react";
import { router, usePage } from "@inertiajs/react";
import {
    Avatar,
    Box,
    Button,
    IconButton,
    LinearProgress,
    Pagination,
    Rating,
    Stack,
    Typography,Grid2
} from "@mui/material";
import React from "react";
import ReviewModal from "resources/js/Components/ReviewModal";
import { formatDate } from "resources/js/Function/formatDate";

const ProductReviewTab = () => {
    const { props } = usePage();
    const [open, setOpen] = React.useState(false);
    const [like, setLike] = React.useState({
        like: 0,
        dislike: 0,
    });

    const handleLikeDislike = (id, type) => {
        router.put(
            route("reviews.update", id),
            { like: type },
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    // Cập nhật lại trạng thái sau khi yêu cầu thành công
                    setLikeState((prevState) => ({
                        ...prevState,
                        [type]: prevState[type] === id ? null : id,
                    }));
                },
            }
        );
    };

    const userLikedOrDisliked = (likes, reactionType) => {
        return likes.some((likeItem) => likeItem[reactionType] === 1);
    };

    const hasProductInOrder = (user, productId) => {
        return user.orders.some((order) =>
            order.products.some((product) => product.id === productId)
        );
    };

    React.useEffect(() => {
        console.log("Review", props.auth.user);
    }, []);

    return (
        <Box>
            <Grid2
                container
                borderBottom={"1px dashed"}
                borderColor={"divider"}
            >
                <Grid2 size={4} paddingY={"40px"}>
                    <Stack alignItems={"center"} gap={"8px"}>
                        <Typography variant="subtitle2">
                            Average rating
                        </Typography>
                        <Typography variant="h2">
                            {props.review.length === 0
                                ? 0
                                : Math.min(
                                      props.review.reduce(
                                          (total, reviewItem) =>
                                              total + reviewItem.rating,
                                          0
                                      ) / props.review.length,
                                      5 // Đảm bảo rằng điểm trung bình không vượt quá 5
                                  ).toFixed(2)}
                            /5
                        </Typography>
                        <Rating
                            value={
                                props.review.reduce(
                                    (total, reviewItem) =>
                                        total + reviewItem.rating,
                                    0
                                ) / props.review.length
                            }
                        />
                        <Typography
                            variant="captiontext"
                            color={"text.disabled"}
                        >
                            ({props.review.length} reviews)
                        </Typography>
                    </Stack>
                </Grid2>
                <Grid2
                    size={4}
                    sx={{
                        borderLeft: "1px",
                        borderRight: "1px",
                        borderColor: "divider",
                        borderStyle: "dashed",
                    }}
                    paddingY={"40px"}
                >
                    <Stack
                        alignItems={"center"}
                        justifyContent={"space-around"}
                        height={"100%"}
                    >
                        {[5, 4, 3, 2, 1].map((it) => (
                            <Stack
                                key={it}
                                direction={"row"}
                                sx={{
                                    width: "100%",
                                    justifyContent: "center",
                                    paddingX: "40px",
                                    alignItems: "center",
                                    gap: "16px",
                                }}
                            >
                                <Typography variant="subtitle2">
                                    {it} Star
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={
                                        props.review.length === 0
                                            ? 0
                                            : (props.review.filter(
                                                  (reviewItem) =>
                                                      reviewItem.rating === it
                                              ).length /
                                                  props.review.length) *
                                              100
                                    }
                                    color="custom"
                                    sx={{
                                        flex: 1,
                                        borderRadius: "90px",
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    color={"text.secondary"}
                                >
                                    {
                                        props.review.filter(
                                            (reviewItem) =>
                                                reviewItem.rating === it
                                        ).length
                                    }
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
                </Grid2>
                <Grid2 size={4} paddingY={"40px"}>
                    <Stack
                        alignItems={"center"}
                        gap={"8px"}
                        justifyContent={"center"}
                        height={"100%"}
                    >
                        <Button
                            color="inherit"
                            variant="contained"
                            startIcon={<Icon icon="solar:pen-bold" />}
                            onClick={() => setOpen(true)}
                        >
                            Write your review
                        </Button>
                        <ReviewModal
                            open={open}
                            onClose={() => setOpen(false)}
                        />
                    </Stack>
                </Grid2>
            </Grid2>
            <Stack
                sx={{
                    paddingY: "40px",
                    gap: "40px",
                }}
            >
                {props.review?.map((it) => (
                    <Stack key={it.id} direction={"row"} gap={"16px"}>
                        <Stack sx={{ width: 240, alignItems: "center" }}>
                            <Avatar
                                sx={{
                                    width: 64,
                                    height: 64,
                                    marginBottom: "20px",
                                }}
                            />
                            <Typography variant="subtitle1">
                                {it.user.first_name} {it.user.last_name}
                            </Typography>
                            <Typography
                                variant="body2"
                                color={"text.secondary"}
                            >
                                {formatDate(it.created_at)}
                            </Typography>
                        </Stack>
                        <Stack
                            sx={{ flex: 1, paddingRight: "60px", gap: "8px" }}
                        >
                            <Stack direction="row" alignItems="center">
                                <Rating
                                    size="small"
                                    value={it.rating}
                                    readOnly
                                />

                                <div className="flex-1"></div>
                                <IconButton>
                                    <Icon icon="solar:menu-dots-bold" />
                                </IconButton>
                            </Stack>
                            {hasProductInOrder(it.user, props.product.id) && (
                                <Stack
                                    direction={"row"}
                                    alignItems={"center"}
                                    gap={"4px"}
                                >
                                    <Icon
                                        icon="solar:verified-check-bold"
                                        color={Palette().success.main}
                                    />
                                    <Typography
                                        variant="captiontext"
                                        color={"success.main"}
                                    >
                                        Verified purchase
                                    </Typography>
                                </Stack>
                            )}
                            <Typography variant="body2">
                                {it.comment}
                            </Typography>
                            <Stack
                                direction={"row"}
                                alignItems={"center"}
                                gap={"12px"}
                                marginTop={"8px"}
                            >
                                <Stack
                                    direction={"row"}
                                    alignItems={"center"}
                                    gap={"4px"}
                                    sx={{
                                        cursor: "pointer",
                                        userSelect: "none",
                                    }}
                                    onClick={() =>
                                        handleLikeDislike(it.id, "like")
                                    }
                                >
                                    <Icon
                                        icon={`solar:like-${
                                            userLikedOrDisliked(it.like, "like")
                                                ? "bold"
                                                : "broken"
                                        }`}
                                    />
                                    <Typography variant="body2">
                                        {
                                            it.like.filter(
                                                (likeItem) =>
                                                    likeItem.like === 1
                                            ).length
                                        }
                                    </Typography>
                                </Stack>
                                <Stack
                                    direction={"row"}
                                    alignItems={"center"}
                                    gap={"4px"}
                                    sx={{
                                        cursor: "pointer",
                                        userSelect: "none",
                                    }}
                                    onClick={() =>
                                        // setLike({ dislike: !like.dislike })
                                        handleLikeDislike(it.id, "dislike")
                                    }
                                >
                                    <Icon
                                        icon={`solar:dislike-${
                                            userLikedOrDisliked(
                                                it.like,
                                                "dislike"
                                            )
                                                ? "bold"
                                                : "broken"
                                        }`}
                                    />
                                    <Typography variant="body2">
                                        {
                                            it.like.filter(
                                                (likeItem) =>
                                                    likeItem.dislike === 1
                                            ).length
                                        }
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                ))}
            </Stack>
        </Box>
    );
};

export default ProductReviewTab;
