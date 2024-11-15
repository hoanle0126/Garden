import { Icon } from "@iconify/react";
import { router, usePage } from "@inertiajs/react";
import {
    Autocomplete,
    Avatar,
    Box,
    Button,
    ButtonBase,
    Divider,
    Grid2,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MuiTheme } from "resources/js/Theme";
import { formatCurrency } from "resources/js/Function/formatCurrency";
import getPriceValue from "resources/js/Function/getPriceValue";
import { formatDate } from "resources/js/Function/formatDate";
import { formatTime } from "resources/js/Function/formatTime";

const token =
    "pk.eyJ1IjoiaG9hbmxlMDEyNiIsImEiOiJjbHZyeGwzdmkwdWR5MmtwMTBwYWd3cDIyIn0.PIxdMnf3YAuUjrAqP5FSsw";

const DeliveryDetailPage = () => {
    const { props } = usePage();

    const mapRef = useRef();
    const mapContainerRef = useRef();

    React.useEffect(() => {
        mapboxgl.accessToken = token;
        const mapCenter = [108.176082, 16.042299];
        const destination = [108.151983, 15.975693];
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: destination,
            zoom: 12,
        });

        // Thêm marker vào tọa độ trung tâm
        new mapboxgl.Marker().setLngLat(mapCenter).addTo(mapRef.current);

        // Thêm marker vào tọa độ trung tâm
        new mapboxgl.Marker().setLngLat(destination).addTo(mapRef.current);

        // Lấy dữ liệu tuyến đường từ Directions API và hiển thị trên bản đồ
        const getRoute = async () => {
            const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${mapCenter[0]},${mapCenter[1]};${destination[0]},${destination[1]}?geometries=geojson&access_token=${token}`;

            const response = await fetch(url);
            const data = await response.json();
            const route = data.routes[0].geometry;

            // Thêm tuyến đường vào bản đồ
            mapRef.current.addSource("route", {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: route,
                },
            });

            mapRef.current.addLayer({
                id: "route",
                type: "line",
                source: "route",
                layout: {
                    "line-join": "round",
                    "line-cap": "round",
                },
                paint: {
                    "line-color": MuiTheme().palette.grey[700],
                    "line-width": 5,
                },
            });
        };

        mapRef.current.on("load", getRoute);

        return () => {
            mapRef.current.remove();
        };
    }, []);

    React.useEffect(() => {
        console.log("order ", props);
    }, []);

    return (
        <Box>
            <Stack
                sx={{
                    width: 270,
                    height: "100vh",
                    backgroundColor: "primary.darker",
                    position: "fixed",
                }}
            >
                <Stack
                    sx={{
                        alignItems: "center",
                        padding: "20px",
                        gap: "4px",
                        borderBottom: "1px dashed",
                        borderColor: "grey.0",
                    }}
                >
                    <Avatar sx={{ width: 100, height: 100 }} />
                    <div className="h-[8px]"></div>
                    <Typography variant="h4" color="grey.0">
                        {props.auth.user.first_name} {props.auth.user.last_name}
                    </Typography>
                    <Typography variant="body2" color="grey.0">
                        {props.auth.user.role.split(",")[1]}
                    </Typography>
                </Stack>
                <div className="flex-1"></div>
                <ButtonBase
                    sx={{
                        padding: "12px",
                        color: "grey.0",
                    }}
                    onClick={() => router.post(route("logout"))}
                >
                    Logout
                </ButtonBase>
            </Stack>
            <Box
                sx={{
                    width: "calc(100vw - 278px)",
                    position: "absolute",
                    left: 270,
                    overflow: "hidden",
                }}
            >
                <Stack
                    sx={{
                        width: "100%",
                        height: "60px",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingX: "20px",
                        gap: "12px",
                    }}
                >
                    <div className="flex-1"></div>
                    <IconButton>
                        <Icon icon="solar:bell-bold-duotone" />
                    </IconButton>
                    <IconButton>
                        <Icon icon="solar:chat-round-line-line-duotone" />
                    </IconButton>
                </Stack>
                <Stack
                    sx={{
                        width: "100%",
                        padding: "20px",
                        gap: "20px",
                    }}
                >
                    <Stack
                        direction={"row"}
                        sx={{
                            alignItems: "center",
                            paddingRight: "20px",
                            gap: "12px",
                        }}
                    >
                        <Stack direction="row" alignItems="start" gap="8px">
                            <IconButton>
                                <Icon icon="solar:alt-arrow-left-outline" />
                            </IconButton>
                            <Stack gap="4px">
                                <Typography variant="h4">
                                    Order #{props.order.id}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {formatDate(props.order.created_at)
                                        .concat(" ")
                                        .concat(
                                            formatTime(props.order.created_at)
                                        )}
                                </Typography>
                            </Stack>
                        </Stack>
                        <div className="flex-1"></div>
                        <Button
                            startIcon={<Icon icon="solar:check-read-broken" />}
                            variant="contained"
                            color="inherit"
                            onClick={() =>
                                router.put(
                                    route("orders.update", props.order.id),
                                    {
                                        status: "Completed",
                                    }
                                )
                            }
                        >
                            Submit
                        </Button>
                    </Stack>
                    <div
                        className="w-full h-[400px] bg-gray-300 rounded-[12px]"
                        id="map-container"
                        ref={mapContainerRef}
                    />
                    <Grid2 container spacing={"20px"}>
                        <Grid2 size={4}>
                            <Box
                                sx={{
                                    boxShadow: "custom.card",
                                    borderRadius: "12px",
                                }}
                            >
                                <Stack
                                    sx={{
                                        padding: "20px",
                                        gap: "20px",
                                        borderBottom: "1px dashed",
                                        borderColor: "divider",
                                    }}
                                >
                                    <Typography variant="h6">
                                        Customer info
                                    </Typography>
                                    <Stack direction="row" gap="12px">
                                        <Avatar
                                            sx={{
                                                width: "44px",
                                                height: "44px",
                                            }}
                                        />
                                        <Stack gap="4px">
                                            <Typography variant="subtitle2">
                                                {props.order.user.first_name
                                                    .concat(" ")
                                                    .concat(
                                                        props.order.user
                                                            .last_name
                                                    )}
                                            </Typography>
                                            <Typography
                                                variant="captiontext"
                                                color="text.secondary"
                                            >
                                                {props.order.user.email}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack
                                    sx={{
                                        padding: "20px",
                                        gap: "20px",
                                        borderBottom: "1px dashed",
                                        borderColor: "divider",
                                    }}
                                >
                                    <Typography variant="h6">
                                        Delivery
                                    </Typography>
                                    <Grid2 container spacing="12px">
                                        <Grid2 size={4}>
                                            <Stack gap="12px">
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    Ship by
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    Speedy
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    Tracking No.
                                                </Typography>
                                            </Stack>
                                        </Grid2>
                                        <Grid2 size={8}>
                                            <Stack gap="12px">
                                                <Typography variant="body2">
                                                    {props.auth.user.first_name}{" "}
                                                    {props.auth.user.last_name}
                                                </Typography>
                                                <Typography variant="body2">
                                                    Standard
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        textDecoration:
                                                            "underline",
                                                    }}
                                                >
                                                    SPX037739199373
                                                </Typography>
                                            </Stack>
                                        </Grid2>
                                    </Grid2>
                                </Stack>
                                <Stack
                                    sx={{
                                        padding: "20px",
                                        gap: "20px",
                                        borderBottom: "1px dashed",
                                        borderColor: "divider",
                                    }}
                                >
                                    <Typography variant="h6">
                                        Shipping
                                    </Typography>
                                    <Grid2 container spacing="12px">
                                        <Grid2 size={4}>
                                            <Stack gap="12px">
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    Address
                                                </Typography>
                                            </Stack>
                                        </Grid2>
                                        <Grid2 size={8}>
                                            <Stack gap="12px">
                                                <Typography variant="body2">
                                                    {
                                                        props.order.address
                                                            .address
                                                    }
                                                    , {props.order.address.ward}
                                                    ,{" "}
                                                    {
                                                        props.order.address
                                                            .district
                                                    }
                                                    , {props.order.address.city}
                                                </Typography>
                                            </Stack>
                                        </Grid2>
                                        <Grid2 size={4}>
                                            <Stack gap="12px">
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    Phone number
                                                </Typography>
                                            </Stack>
                                        </Grid2>
                                        <Grid2 size={8}>
                                            <Stack gap="12px">
                                                <Typography variant="body2">
                                                    {props.order.user.phone ||
                                                        "None"}
                                                </Typography>
                                            </Stack>
                                        </Grid2>
                                    </Grid2>
                                </Stack>
                                <Stack
                                    sx={{
                                        padding: "20px",
                                        gap: "20px",
                                        borderBottom: "1px dashed",
                                        borderColor: "divider",
                                    }}
                                >
                                    <Typography variant="h6">
                                        Payment
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        gap="12px"
                                        alignItems="center"
                                    >
                                        <div className="flex-1"></div>
                                        <Typography variant="subtitle2">
                                            **** **** **** 5678
                                        </Typography>
                                        <Icon icon="logos:mastercard" />
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid2>
                        <Grid2 size={8}>
                            <Stack gap="20px">
                                <Box
                                    sx={{
                                        boxShadow: "custom.card",
                                        borderRadius: "12px",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            padding: "20px",
                                            borderBottom: "1px dashed",
                                            borderColor: "divider",
                                        }}
                                    >
                                        <Typography variant="h6">
                                            Details
                                        </Typography>
                                        <Stack sx={{ paddingTop: "20px" }}>
                                            {props.order.products.map(
                                                (item) => (
                                                    <Stack
                                                        key={item}
                                                        direction="row"
                                                        gap="12px"
                                                        sx={{
                                                            borderTop:
                                                                props.order.products.indexOf(
                                                                    item
                                                                ) != 0 &&
                                                                "1px dashed",
                                                            borderColor:
                                                                "divider",
                                                            paddingY: "6px",
                                                        }}
                                                    >
                                                        <img
                                                            src={item.thumbnail}
                                                            alt=""
                                                            className="w-[48px] h-[48px] rounded-[12px]"
                                                        />
                                                        <Stack
                                                            sx={{
                                                                justifyContent:
                                                                    "center",
                                                                flex: 1,
                                                            }}
                                                        >
                                                            <Typography variant="body2">
                                                                {item.name}
                                                            </Typography>
                                                            <Stack
                                                                direction="row"
                                                                gap="12px"
                                                            >
                                                                <Typography
                                                                    variant="body2"
                                                                    color="text.secondary"
                                                                >
                                                                    #{item.id}
                                                                </Typography>
                                                                <div className="flex-1"></div>
                                                                <Typography variant="body2">
                                                                    x
                                                                    {
                                                                        item
                                                                            .pivot
                                                                            .quantity
                                                                    }
                                                                </Typography>
                                                                <Typography variant="subtitle2">
                                                                    {formatCurrency(
                                                                        getPriceValue(
                                                                            item.price
                                                                        )
                                                                    )}
                                                                </Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Stack>
                                                )
                                            )}
                                        </Stack>
                                    </Box>
                                    <Grid2
                                        container
                                        sx={{
                                            padding: "20px",
                                        }}
                                    >
                                        <Grid2 size={9}>
                                            <Stack
                                                sx={{
                                                    alignItems: "end",
                                                    gap: "8px",
                                                }}
                                            >
                                                {[
                                                    {
                                                        title: "Subtotal",
                                                    },
                                                    { title: "Shipping" },
                                                    {
                                                        title: "Discount",
                                                        color: "error.main",
                                                    },
                                                    {
                                                        title: "Total",
                                                        variant: "h6",
                                                        color: "text.primary",
                                                    },
                                                ].map((item, index) => (
                                                    <Typography
                                                        key={index}
                                                        variant={
                                                            item.variant ||
                                                            "body2"
                                                        }
                                                        color={
                                                            item.color ||
                                                            "text.secondary"
                                                        }
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                ))}
                                            </Stack>
                                        </Grid2>
                                        <Grid2 size={3}>
                                            {["Subtotal"].map((item) => (
                                                <Stack
                                                    key={item}
                                                    sx={{ alignItems: "end" }}
                                                >
                                                    <Typography variant="subtitle2">
                                                        {item}
                                                    </Typography>
                                                </Stack>
                                            ))}
                                        </Grid2>
                                    </Grid2>
                                </Box>
                            </Stack>
                        </Grid2>
                    </Grid2>
                </Stack>
            </Box>
        </Box>
    );
};

export default DeliveryDetailPage;
