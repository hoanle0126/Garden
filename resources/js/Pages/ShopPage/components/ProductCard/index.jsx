import { formatCurrency } from "@/Function/formatCurrency";
import { Icon } from "@iconify/react";
import { router, usePage } from "@inertiajs/react";
import {
    Box,
    IconButton,
    Modal,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";
import React from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const ProductCard = ({ product }) => {
    const [opentCartIcon, setOpenCardIcon] = React.useState();
    const { props } = usePage();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        props.auth.user
            ? router.post(route("checkouts.store", product.id), { quantity: 1 })
            : setOpen(true);
    };
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box
                sx={{
                    boxShadow:
                        "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    zIndex: 0,
                    position: "relative",
                }}
                onMouseEnter={() => setOpenCardIcon(product)}
                onMouseLeave={() => setOpenCardIcon("")}
            >
                <Box sx={{ padding: "8px" }}>
                    <Box
                        sx={{
                            position: "relative",
                        }}
                    >
                        <img
                            src={product.thumbnail}
                            alt=""
                            className="w-full h-full aspect-square rounded-[12px]"
                        />
                        {opentCartIcon == product && (
                            <IconButton
                                sx={{
                                    position: "absolute",
                                    bottom: 12,
                                    right: 12,
                                    backgroundColor: "secondary.main",
                                    cursor: "pointer",
                                    "&:hover": {
                                        backgroundColor: "secondary.dark",
                                    },
                                }}
                                onClick={handleOpen}
                            >
                                <Icon icon="solar:cart-plus-bold" />
                            </IconButton>
                        )}
                    </Box>
                </Box>
                <Stack
                    sx={{
                        padding: "16px 24px 24px",
                        gap: "20px",
                        alignItems: "start",
                        width: "100%",
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        router.visit(`/shops/${product.id}`);
                    }}
                >
                    <Typography variant="subtitle2">{product.name}</Typography>
                    <Stack
                        direction={"row"}
                        sx={{
                            gap: "4px",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <Tooltip
                            title={product.category.name}
                            placement="top-start"
                        >
                            <img
                                src={product.category.thumbnail}
                                className="w-[24px] z-[1000] cursor-default h-[24px] "
                            ></img>
                        </Tooltip>
                        <div className="flex-1"></div>
                        {product.price.sales > 0 && (
                            <Typography
                                variant="h6"
                                sx={{
                                    textDecoration: "line-through",
                                }}
                                color="text.disabled"
                            >
                                {formatCurrency(product.price.base_price)}
                            </Typography>
                        )}
                        <Typography variant="h6">
                            {formatCurrency(
                                product.price.base_price -
                                    (product.price.base_price *
                                        product.price.sales) /
                                        100
                            )}
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Text in a modal {product.id}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default ProductCard;
