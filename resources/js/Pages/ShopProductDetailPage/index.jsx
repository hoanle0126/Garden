import ClientLayout from "@/Layouts/ClientLayout";
import { typography } from "@/Theme/elements/typography";
import { Icon } from "@iconify/react";
import { Link, usePage } from "@inertiajs/react";
import {
    Box,
    Breadcrumbs,
    Button,
    ButtonBase,
    Card,
    Divider,
    IconButton,
    Rating,
    Stack,
    Tab,
    Tabs,
    Typography,Grid2
} from "@mui/material";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "@/Components/EmblaCarousel";
import { Palette } from "@/Theme/elements/palette";
import ProductThumbnail from "./components/ProductThumbnail";
import ProductMainDetail from "./components/ProductMainDetail";
import ProductService from "./components/ProductService";
import { CustomTabPanel } from "@/Components/CustomTabPanel";
import ProductReviewTab from "./components/ProductReviewTab";

const OPTIONS = {};
const SLIDE_COUNT = 10;

const ShopProductDetailPage = () => {
    const [tab, setTab] = React.useState("1");
    const { props } = usePage();
    const product = props.product;
    const SLIDES = [product.thumbnail].concat(
        product.images.map((it) => it.src)
    );

    const [productOrder, setProductOrder] = React.useState({
        quantity: 1,
    });

    const handleTab = (event, newValue) => {
        setTab(newValue);
    };

    React.useEffect(() => {
        console.log("product", props.product);
    }, []);

    return (
        <ClientLayout>
            <Box
                sx={{
                    marginTop: "60px",
                    paddingX: "180px",
                    paddingY: "48px",
                    "& .MuiTypography-root.MuiBreadcrumbs-root": {
                        fontStyle: typography.body2,
                        color: "text.primary",
                        "& .current": {
                            color: "text.secondary",
                        },
                    },
                }}
            >
                <Breadcrumbs
                    aria-label="breadcrumb"
                    separator={
                        <Box
                            className="w-[4px] h-[4px] rounded-full mx-[4px]"
                            sx={{ backgroundColor: "text.disabled" }}
                        />
                    }
                >
                    <Link href="/">Home</Link>
                    <Link href="/material-ui/getting-started/installation/">
                        Shop
                    </Link>
                    <Link
                        href="/material-ui/react-breadcrumbs/"
                        className="current"
                    >
                        Breadcrumbs
                    </Link>
                </Breadcrumbs>
                <Grid2 container columnSpacing={"72px"} rowSpacing={"72px"}>
                    <Grid2 size={7}>
                        <ProductThumbnail slides={SLIDES} options={OPTIONS} />
                    </Grid2>
                    <Grid2 size={5}>
                        <ProductMainDetail
                            productOrder={productOrder}
                            setProductOrder={setProductOrder}
                        />
                    </Grid2>
                    <Grid2 size={12}>
                        <ProductService />
                    </Grid2>
                    <Grid2 size={12}>
                        <Stack
                            sx={{
                                boxShadow: "custom.card",
                                borderRadius: "12px",
                                overflow: "hidden",
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
                                    borderBottom: "2px solid",
                                    borderColor: "divider",
                                }}
                            >
                                <Tab label="General" value="1" />
                                <Tab label="Advanced" value="2" />
                            </Tabs>
                            <CustomTabPanel tab={tab} index={1}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "start",
                                        padding: "40px 24px",
                                        gap: "16px",
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: product.feature,
                                    }}
                                ></Box>
                            </CustomTabPanel>
                            <CustomTabPanel tab={tab} index={2}>
                                <ProductReviewTab />
                            </CustomTabPanel>
                        </Stack>
                    </Grid2>
                </Grid2>
            </Box>
        </ClientLayout>
    );
};

export default ShopProductDetailPage;
