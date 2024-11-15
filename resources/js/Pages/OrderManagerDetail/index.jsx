import { Icon } from "@iconify/react";
import { router, usePage } from "@inertiajs/react";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    timelineItemClasses,
    TimelineSeparator,
} from "@mui/lab";
import {
    Autocomplete,
    Avatar,
    Box,
    Button,
    Grid2,
    IconButton,
    Stack,
    Step,
    StepConnector,
    stepConnectorClasses,
    StepContent,
    StepLabel,
    Stepper,
    styled,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { formatCurrency } from "resources/js/Function/formatCurrency";
import { formatDate } from "resources/js/Function/formatDate";
import { formatTime } from "resources/js/Function/formatTime";
import getPriceValue from "resources/js/Function/getPriceValue";
import AdminDefaultLayout from "resources/js/Layouts/AdminDefaultLayout";
import AdminLayout from "resources/js/Layouts/AdminLayout";

const OrderManagerDetail = () => {
    const { props } = usePage();

    React.useEffect(() => {
        console.log(props.order);
    }, []);

    return (
        <AdminLayout title={"Detail"}>
            <main className="p-[30px] pt-0 flex flex-col gap-[28px] w-full h-[calc(100vh-80px)]">
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
                            <Typography variant="body2" color="text.secondary">
                                {formatDate(props.order.created_at)
                                    .concat(" ")
                                    .concat(formatTime(props.order.created_at))}
                            </Typography>
                        </Stack>
                    </Stack>
                    <div className="flex-1"></div>
                    <Autocomplete
                        disablePortal
                        options={["test 1", "test 1"]}
                        sx={{ width: 120 }}
                        size="small"
                        renderInput={(params) => (
                            <TextField {...params} label="Movie" />
                        )}
                    />
                    <Button
                        startIcon={<Icon icon="solar:check-read-broken" />}
                        variant="contained"
                        color="inherit"
                        onClick={() =>
                            router.put(route("orders.update", props.order.id), {
                                status: "Shipping",
                            })
                        }
                    >
                        Submit
                    </Button>
                </Stack>
                <Grid2 container spacing="20px" padding="20px">
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
                                        {props.order.products.map((item) => (
                                            <Stack
                                                key={item}
                                                direction="row"
                                                gap="12px"
                                                sx={{
                                                    borderTop:
                                                        props.order.products.indexOf(
                                                            item
                                                        ) != 0 && "1px dashed",
                                                    borderColor: "divider",
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
                                                                item.pivot
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
                                        ))}
                                    </Stack>
                                </Box>
                                <Grid2
                                    container
                                    sx={{
                                        padding: "20px",
                                    }}
                                >
                                    <Grid2 size={9}>
                                        {["Subtotal"].map((item) => (
                                            <Stack
                                                key={item}
                                                sx={{ alignItems: "end" }}
                                            >
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {item}
                                                </Typography>
                                            </Stack>
                                        ))}
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
                            <Box
                                sx={{
                                    boxShadow: "custom.card",
                                    borderRadius: "12px",
                                }}
                            >
                                <Stack
                                    sx={{
                                        padding: "20px",
                                        borderBottom: "1px dashed",
                                        borderColor: "divider",
                                        gap: "20px",
                                    }}
                                >
                                    <Typography variant="h6">
                                        History
                                    </Typography>
                                    <Stack direction="row">
                                        <Timeline
                                            sx={{
                                                padding: 0,
                                                [`& .${timelineItemClasses.root}:last-child`]:
                                                    {
                                                        minHeight: 0,
                                                    },
                                                [`& .${timelineItemClasses.root}:before`]:
                                                    {
                                                        flex: 0,
                                                        padding: 0,
                                                    },
                                                "& .MuiTimelineConnector-root":
                                                    {
                                                        backgroundColor:
                                                            "divider",
                                                    },
                                            }}
                                        >
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot color="primary" />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent>
                                                    <Stack>
                                                        <Typography variant="subtitle2">
                                                            Eat
                                                        </Typography>
                                                        <Typography
                                                            variant="captiontext"
                                                            color="text.secondary"
                                                        >
                                                            Eat
                                                        </Typography>
                                                    </Stack>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent>
                                                    Code
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                </TimelineSeparator>
                                                <TimelineContent>
                                                    Sleep
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
                                        <Stack
                                            sx={{
                                                border: "1px dashed",
                                                borderColor: "divider",
                                                padding: "20px",
                                                borderRadius: "12px",
                                                minWidth: "240px",
                                                gap: "16px",
                                            }}
                                        >
                                            {[1, 2].map((item) => (
                                                <Stack key={item} gap="4px">
                                                    <Typography
                                                        variant="subtitle2"
                                                        color="text.secondary"
                                                    >
                                                        Order Time
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        30 Oct 2024 2:36 pm
                                                    </Typography>
                                                </Stack>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid2>
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
                                        sx={{ width: "44px", height: "44px" }}
                                    />
                                    <Stack gap="4px">
                                        <Typography variant="subtitle2">
                                            {props.order.user.first_name
                                                .concat(" ")
                                                .concat(
                                                    props.order.user.last_name
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
                                <Typography variant="h6">Delivery</Typography>
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
                                                DHL
                                            </Typography>
                                            <Typography variant="body2">
                                                Standard
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    textDecoration: "underline",
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
                                <Typography variant="h6">Shipping</Typography>
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
                                                19034 Verna Unions Apt. 164 -
                                                Honolulu, RI / 87535
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
                                                365-374-4961
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
                                <Typography variant="h6">Payment</Typography>
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
                </Grid2>
            </main>
        </AdminLayout>
    );
};

export default OrderManagerDetail;
