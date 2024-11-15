import { Palette } from "@/Theme/elements/palette";
import { Icon } from "@iconify/react";
import {
    Box,
    Button,
    Card,
    Input,
    OutlinedInput,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import { uploadToCloudinary } from "resources/utils/uploadToCloudinary";

const GeneralTab = ({ product, setProduct }) => {
    const handleSelectImage = async (e) => {
        const imgUrl = await uploadToCloudinary(e.target.files[0]);
        setProduct({
            ...product,
            images: [...product?.images, { ...product?.images, src: imgUrl }],
        });
    };

    return (
        <Stack
            sx={{
                paddingTop: "20px",
                gap: "28px",
                "& .MuiInputBase-input.MuiOutlinedInput-input": {
                    fontSize: 14,
                },
            }}
        >
            <Card>
                <Stack gap={"20px"}>
                    <Typography variant="h6">General</Typography>
                    <Stack gap={"8px"}>
                        <Typography variant="subtitle2">
                            Product Name
                        </Typography>
                        <OutlinedInput
                            size="small"
                            color="custom"
                            fullWidth
                            placeholder="Enter product name..."
                            value={product?.name}
                            onChange={(e) =>
                                setProduct({ ...product, name: e.target.value })
                            }
                        />
                        <Typography
                            variant="captiontext"
                            color={"text.disabled"}
                        >
                            A product name is required and recommended to be
                            unique.
                        </Typography>
                    </Stack>
                    <Stack gap={"8px"}>
                        <Typography variant="subtitle2">Desciption</Typography>
                        <OutlinedInput
                            color="custom"
                            fullWidth
                            multiline
                            maxRows={10}
                            value={product?.description}
                            minRows={10}
                            placeholder="Enter product description..."
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    description: e.target.value,
                                })
                            }
                        />
                        <Typography
                            variant="captiontext"
                            color={"text.disabled"}
                        >
                            Set a description to the product for better
                            visibility.
                        </Typography>
                    </Stack>
                </Stack>
            </Card>
            <Card>
                <Stack gap={"20px"}>
                    <Typography variant="h6">Image</Typography>
                    {product.images.length > 0 && (
                        <Stack direction={"row"} gap={"24px"}>
                            {product.images.map((image) => (
                                <Box
                                    key={image}
                                    sx={{
                                        width: 160,
                                        height: 160,
                                        boxShadow: "custom.card",
                                        borderRadius: "12px",
                                        position: "relative",
                                    }}
                                >
                                    <img
                                        src={image.src}
                                        alt=""
                                        className="w-full h-full rounded-[12px]"
                                    />
                                    <Box
                                        sx={{
                                            width: "24px",
                                            height: "24px",
                                            backgroundColor: "background.paper",
                                            position: "absolute",
                                            right: "-8px",
                                            top: "-8px",
                                            borderRadius: 99,
                                            boxShadow: "custom.card",
                                            border: "1px solid",
                                            borderColor: "divider",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            cursor: "pointer",
                                        }}
                                        onClick={() =>
                                            setProduct({
                                                ...product,
                                                images: product.images.filter(
                                                    (img) => img !== image
                                                ),
                                            })
                                        }
                                    >
                                        <Icon
                                            icon="eva:close-fill"
                                            width="16"
                                            height="16"
                                            color={Palette().text.disabled}
                                        />
                                    </Box>
                                </Box>
                            ))}
                        </Stack>
                    )}
                    <Button
                        component="label"
                        variant="outlined"
                        color="inherit"
                        startIcon={<Icon icon="solar:gallery-send-broken" />}
                    >
                        Click to upload
                        <input
                            type="file"
                            className="hidden"
                            onChange={handleSelectImage}
                        />
                    </Button>
                </Stack>
            </Card>
            <Card>
                <Stack gap={"20px"}>
                    <Typography variant="h6">Price</Typography>
                    <Stack gap={"8px"}>
                        <Typography variant="subtitle2">Base price</Typography>
                        <OutlinedInput
                            size="small"
                            color="custom"
                            fullWidth
                            placeholder="Enter base price..."
                            type="number"
                            value={product?.price?.base_price}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    price: {
                                        ...product.price,
                                        base_price: e.target.value,
                                    },
                                })
                            }
                        />
                        <Typography
                            variant="captiontext"
                            color={"text.disabled"}
                        >
                            Set the product price.
                        </Typography>
                    </Stack>
                    <Stack gap={"8px"}>
                        <Typography variant="subtitle2">Sales</Typography>
                        <OutlinedInput
                            size="small"
                            color="custom"
                            fullWidth
                            placeholder="Enter sale price..."
                            type="number"
                            value={product?.price?.sales}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    price: {
                                        ...product.price,
                                        sales: e.target.value,
                                    },
                                })
                            }
                        />
                    </Stack>
                </Stack>
            </Card>
        </Stack>
    );
};

export default GeneralTab;
