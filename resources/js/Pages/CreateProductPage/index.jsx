import AdminLayout from "@/Layouts/AdminLayout";
import AdminDefaultLayout from "@/Layouts/AdminDefaultLayout";
import React from "react";
import {
    Grid2,
    Box,
    Button,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    styled,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { Palette } from "@/Theme/elements/palette";
import GeneralTab from "./components/GeneralTab";
import AdvancedTab from "./components/AdvancedTab";
import { uploadToCloudinary } from "resources/utils/uploadToCloudinary";
import { router, usePage } from "@inertiajs/react";
import { CustomTabPanel } from "@/Components/CustomTabPanel";

const CreateProductPage = () => {
    const [tab, setTab] = React.useState("1");
    const { props } = usePage();
    const [product, setProduct] = React.useState({
        images: [],
        category: props.categories[0],
        quantity: 0,
        price: {
            base_price: 0,
            sales: 0,
        },
    });

    React.useEffect(() => {
        console.log("Product ", product);
        console.log(props.categories);
    }, [product]);

    const handleTab = (event, newValue) => {
        setTab(newValue);
    };

    const handleChange = (event) => {
        setProduct({
            ...product,
            category: event.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("products.store"), product, {
            onSuccess: () => {
                router.visit(route("products.index"));
            },
        });
    };

    const handleSelectImage = async (e) => {
        const imgUrl = await uploadToCloudinary(e.target.files[0]);
        setProduct({
            ...product,
            thumbnail: imgUrl,
        });
    };

    return (
        <AdminLayout title={"Create product"}>
            <AdminDefaultLayout title={"Create new product"}>
                <Grid2
                    container
                    spacing={"28px"}
                    sx={{ paddingBottom: "12px" }}
                >
                    <Grid2 size={3}>
                        <Stack gap={"28px"}>
                            <Paper
                                sx={{
                                    boxShadow: "custom.card",
                                    borderRadius: "12px",
                                    padding: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "24px",
                                    paddingBottom: "40px",
                                }}
                            >
                                <Typography variant="h6">Thumbnail</Typography>
                                <Box
                                    sx={{
                                        boxShadow: "custom.card",
                                        width: 160,
                                        height: 160,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "12px",
                                        marginX: "auto",
                                        position: "relative",
                                    }}
                                >
                                    {product?.thumbnail && (
                                        <img
                                            src={product.thumbnail}
                                            alt=""
                                            className="w-full h-full rounded-[12px]"
                                        />
                                    )}
                                    <Icon
                                        icon="solar:gallery-wide-bold"
                                        width="120"
                                        height="120"
                                        color={Palette().grey[300]}
                                    />
                                    <label htmlFor="thumbnail">
                                        <Box
                                            sx={{
                                                width: "24px",
                                                height: "24px",
                                                backgroundColor:
                                                    "background.paper",
                                                position: "absolute",
                                                border: "1px solid",
                                                borderColor: "divider",
                                                right: "-8px",
                                                top: "-8px",
                                                borderRadius: 99,
                                                boxShadow: "custom.card",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <Icon
                                                icon="solar:pen-bold"
                                                width="14"
                                                height="14"
                                                color={Palette().text.disabled}
                                            />
                                            <input
                                                type="file"
                                                id="thumbnail"
                                                className="hidden"
                                                onChange={handleSelectImage}
                                            />
                                        </Box>
                                    </label>
                                </Box>
                                <Typography
                                    variant="captiontext"
                                    color={"text.disabled"}
                                    width={"90%"}
                                >
                                    Set the product thumbnail image. Only *.png,
                                    *.jpg and *.jpeg image files are accepted
                                </Typography>
                            </Paper>
                            <Paper
                                sx={{
                                    boxShadow: "custom.card",
                                    borderRadius: "12px",
                                    padding: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "24px",
                                    paddingBottom: "40px",
                                }}
                            >
                                <Typography variant="h6">Category</Typography>
                                <FormControl fullWidth>
                                    <InputLabel
                                        id="demo-simple-select-label"
                                        color="custom"
                                    >
                                        Categories
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={
                                            product.category || props.categories
                                        }
                                        label="Categories"
                                        onChange={handleChange}
                                        color="custom"
                                    >
                                        {props.categories.map((category) => (
                                            <MenuItem
                                                value={category}
                                                key={category}
                                            >
                                                <Stack
                                                    direction={"row"}
                                                    alignItems={"center"}
                                                    gap={"8px"}
                                                >
                                                    <img
                                                        src={category.thumbnail}
                                                        alt=""
                                                        className="w-[16px] h-[16px]"
                                                    />
                                                    {category.name}
                                                </Stack>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <Button variant="outlined" color="inherit">
                                    Create new category
                                </Button>
                            </Paper>
                        </Stack>
                    </Grid2>
                    <Grid2 size={9}>
                        <Box
                            sx={{
                                borderBottom: 1,
                                borderColor: "primary.lighter",
                            }}
                        >
                            <Tabs
                                value={tab}
                                onChange={handleTab}
                                sx={{
                                    "& .MuiButtonBase-root.MuiTab-root": {
                                        textTransform: "none",
                                        fontWeight: 600,
                                    },
                                }}
                            >
                                <Tab label="General" value="1" />
                                <Tab label="Advanced" value="2" />
                            </Tabs>
                        </Box>
                        <CustomTabPanel tab={tab} index={1}>
                            <GeneralTab
                                product={product}
                                setProduct={setProduct}
                            />
                        </CustomTabPanel>
                        <CustomTabPanel tab={tab} index={2}>
                            <AdvancedTab
                                product={product}
                                setProduct={setProduct}
                            />
                        </CustomTabPanel>
                        <Stack
                            sx={{
                                flexFlow: "row",
                                flexDirection: "row",
                                justifyContent: "right",
                                position: "sticky",
                                bottom: 24,
                                marginTop: "24px",
                            }}
                        >
                            <Button
                                variant="contained"
                                color="inherit"
                                sx={{ boxShadow: "main.z1" }}
                                endIcon={<Icon icon="eva:save-fill" />}
                                onClick={handleSubmit}
                            >
                                Save
                            </Button>
                        </Stack>
                    </Grid2>
                </Grid2>
            </AdminDefaultLayout>
        </AdminLayout>
    );
};

export default CreateProductPage;
