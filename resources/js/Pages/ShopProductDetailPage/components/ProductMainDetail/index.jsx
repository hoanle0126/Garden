import { Icon } from "@iconify/react";
import { router, usePage } from "@inertiajs/react";
import {
    Box,
    Button,
    Divider,
    IconButton,
    Rating,
    Stack,
    Typography,
} from "@mui/material";
import { useMotionValue, useTransform } from "framer-motion";
import React from "react";

const ProductMainDetail = ({ productOrder, setProductOrder }) => {
    const { props } = usePage();
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const product = props.product;

    return (
        <Stack
            sx={{
                padding: "32px 32px 32px 0px",
                height: "100%",
            }}
        >
            <Stack
                sx={{
                    height: "100%",
                    borderRadius: "16px",
                    justifyContent: "end",
                    gap: "16px",
                    paddingTop: "40px",
                }}
            >
                <Typography
                    variant="subtitle2"
                    color={"primary.main"}
                    sx={{
                        textTransform: "uppercase",
                        fontWeight: 700,
                    }}
                >
                    In stock
                </Typography>
                <Typography variant="h6">{product.name}</Typography>
                <Stack direction={"row"} alignItems={"center"} gap={"12px"}>
                    <Rating
                        value={
                            props.review.reduce(
                                (total, it) => total + it.rating,
                                0
                            ) / props.review.length
                        }
                        readOnly
                    />
                    <Typography variant="body2" color={"text.disabled"} sx={{}}>
                        ({props.review.length} reviews)
                    </Typography>
                </Stack>
                <Typography variant="h5" sx={{}}>
                    $97.14
                </Typography>
                <Typography variant="body2" sx={{}} color={"text.secondary"}>
                    Featuring the original ripple design inspired by Japanese
                    bullet trains, the Nike Air Max 97 lets you push your style
                    full-speed ahead.
                </Typography>
                <Divider
                    sx={{
                        borderStyle: "dashed",
                    }}
                />
                <div className="flex-1"></div>
                <Stack alignItems={"end"} gap={"8px"}>
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        width={"100%"}
                    >
                        <Typography variant="subtitle2">Quantity</Typography>
                        <Stack
                            sx={{
                                border: "1px solid black",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "8px",
                                padding: "4px",
                                borderColor: "divider",
                                borderRadius: "8px",
                            }}
                        >
                            <IconButton
                                size="small"
                                sx={{ borderRadius: "8px" }}
                                disabled={productOrder.quantity === 1}
                                onClick={() =>
                                    setProductOrder({
                                        ...productOrder,
                                        quantity: productOrder.quantity - 1,
                                    })
                                }
                            >
                                <Icon
                                    icon="eva:minus-fill"
                                    width={16}
                                    height={16}
                                />
                            </IconButton>
                            <Typography>{productOrder.quantity}</Typography>
                            <IconButton
                                size="small"
                                sx={{ borderRadius: "8px" }}
                                disabled={
                                    productOrder.quantity === product.quantity
                                }
                                onClick={() =>
                                    setProductOrder({
                                        ...productOrder,
                                        quantity: productOrder.quantity + 1,
                                    })
                                }
                            >
                                <Icon
                                    icon="eva:plus-fill"
                                    width={16}
                                    height={16}
                                />
                            </IconButton>
                        </Stack>
                    </Stack>
                    <Typography variant="captiontext" color={"text.secondary"}>
                        Available: {product.quantity}
                    </Typography>
                </Stack>
                <Divider />
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    gap={"20px"}
                >
                    <Button
                        color="secondary"
                        variant="contained"
                        size="large"
                        fullWidth
                        startIcon={<Icon icon="solar:cart-plus-bold" />}
                        onClick={() =>
                            router.post(
                                route("checkouts.store", product.id),
                                productOrder
                            )
                        }
                    >
                        Add to card
                    </Button>
                </Stack>
                <Stack
                    sx={{
                        height: "66px",
                        marginTop: "8px",
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: "8px",
                    }}
                >
                    <div>
                        <Button
                            color="inherit"
                            startIcon={<Icon icon="eva:plus-fill" />}
                        >
                            Compare
                        </Button>
                    </div>
                    <div>
                        <Button
                            color="inherit"
                            startIcon={<Icon icon="eva:heart-fill" />}
                        >
                            Favorite
                        </Button>
                    </div>
                    <div>
                        <Button
                            color="inherit"
                            startIcon={<Icon icon="eva:share-fill" />}
                        >
                            Favorite
                        </Button>
                    </div>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ProductMainDetail;
