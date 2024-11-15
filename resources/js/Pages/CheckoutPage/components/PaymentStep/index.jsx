import { ThemeContext } from "@/Context/context";
import { formatCurrency } from "@/Function/formatCurrency";
import { Icon } from "@iconify/react";
import { Box, ButtonBase, Stack, Typography, Grid2 } from "@mui/material";
import React from "react";

const PaymentStep = ({ order, setOrder }) => {
    return (
        <Stack gap={"32px"}>
            <Box
                sx={{
                    borderRadius: "16px",
                    boxShadow: "custom.card",
                    padding: "24px",
                }}
            >
                <Typography variant="h5">Delivery</Typography>
                <Grid2 container marginTop={"24px"} spacing={"16px"}>
                    {[
                        {
                            title: "Free",
                            num_days: "5-7 days delivery",
                            price: 0,
                            icon: "carbon:bicycle",
                        },
                        {
                            title: "Standard",
                            num_days: "3-5 days delivery",
                            price: 10,
                            icon: "carbon:delivery-truck",
                        },
                        {
                            title: "Express",
                            num_days: "2-3 days delivery",
                            price: 20,
                            icon: "carbon:plane",
                        },
                    ].map((it, index) => (
                        <Grid2 key={index} size={6}>
                            <Box
                                sx={{
                                    border: "1px solid",
                                    borderColor: "divider",
                                    padding: "20px",
                                    borderRadius: "8px",
                                    display: "flex",
                                    gap: "16px",
                                    outline:
                                        order.delivery?.title === it.title &&
                                        "2px solid black",
                                    cursor: "pointer",
                                }}
                                onClick={() =>
                                    setOrder({ ...order, delivery: it })
                                }
                            >
                                <Icon icon={it.icon} width="28" height="28" />
                                <Stack gap={"8px"}>
                                    <Typography variant="subtitle1">
                                        {it.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {it.num_days}
                                    </Typography>
                                </Stack>
                                <div className="flex-1"></div>
                                <Typography variant="h5">
                                    ${it.price}
                                </Typography>
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
            <Box
                sx={{
                    borderRadius: "16px",
                    boxShadow: "custom.card",
                    padding: "24px",
                }}
            >
                <Typography variant="h5">Payment</Typography>
                <Stack marginTop={"24px"} gap={"16px"}>
                    {[
                        {
                            title: "Pay with Paypal",
                            description:
                                "You will be redirected to PayPal website to complete your purchase securely.",
                            icon: "logos:paypal",
                        },
                        {
                            title: "Cash",
                            description:
                                "Pay with cash when your order is delivered.",
                            icon: "tabler:cash",
                        },
                    ].map((it, index) => (
                        <Box
                            key={index}
                            sx={{
                                border: "1px solid",
                                borderColor: "divider",
                                padding: "20px",
                                borderRadius: "8px",
                                display: "flex",
                                gap: "16px",
                                cursor: "pointer",
                                outline:
                                    order?.payment?.title === it.title &&
                                    "2px solid black",
                            }}
                            onClick={() => setOrder({ ...order, payment: it })}
                        >
                            <Stack gap={"8px"}>
                                <Typography variant="subtitle1">
                                    {it.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color={"text.secondary"}
                                >
                                    {it.description}
                                </Typography>
                            </Stack>
                            <div className="flex-1"></div>
                            <Icon icon={it.icon} width="28" height="28" />
                        </Box>
                    ))}
                </Stack>
            </Box>
        </Stack>
    );
};

export default PaymentStep;
