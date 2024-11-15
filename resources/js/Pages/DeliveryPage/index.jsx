import { Icon } from "@iconify/react";
import { router, usePage } from "@inertiajs/react";
import {
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
import React from "react";
import OrderTable from "resources/js/Components/Tables/OrderTable";

const DeliveryPage = () => {
    const { props } = usePage();

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
                    width: "calc(100vw - 270px)",
                    position: "absolute",
                    left: 270,
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
                        padding: "20px",
                        gap: "20px",
                        height: "calc(100vh - 60px)",
                    }}
                >
                    <Typography variant="h4">Deliveries</Typography>
                    <OrderTable
                        rows={props.orders}
                        tabs={false}
                        status={"Shipping"}
                    />
                </Stack>
            </Box>
        </Box>
    );
};

export default DeliveryPage;
