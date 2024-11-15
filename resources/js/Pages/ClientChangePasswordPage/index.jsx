import ClientDefaultLayout from "@/Layouts/ClientDefaultLayout";
import ClientLayout from "@/Layouts/ClientLayout";
import ClientUserLayout from "@/Layouts/ClientUserLayout";
import { Icon } from "@iconify/react";
import { usePage } from "@inertiajs/react";
import {
    Avatar,
    Box,
    Button,
    Divider,
    FormControlLabel,
    OutlinedInput,
    Radio,
    RadioGroup,
    Stack,
    Typography,Grid2
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";

const ClientChangePasswordPage = () => {
    const { props } = usePage();
    const user = props.auth.user;

    return (
        <ClientLayout>
            <ClientDefaultLayout>
                <ClientUserLayout>
                    <Stack
                        sx={{
                            padding: "20px",
                            gap: "20px",
                            minHeight: "calc(100vh - 160px)",
                        }}
                    >
                        <Typography variant="h5">Change Password</Typography>
                        <Divider />
                        <Stack
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                flex: 1,
                                padding: "40px",
                            }}
                        >
                            <Grid2
                                container
                                columnSpacing="24px"
                                rowSpacing="40px"
                            >
                                <Grid2 size={4}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        Current password
                                    </Typography>
                                </Grid2>
                                <Grid2 size={8} textAlign="left">
                                    <OutlinedInput
                                        size="small"
                                        fullWidth
                                        type="password"
                                    />
                                </Grid2>
                                <Grid2 size={4}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        New password
                                    </Typography>
                                </Grid2>
                                <Grid2 size={8} textAlign="left">
                                    <OutlinedInput
                                        size="small"
                                        fullWidth
                                        type="password"
                                    />
                                </Grid2>
                                <Grid2 size={4}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        Confirm new password
                                    </Typography>
                                </Grid2>
                                <Grid2 size={8} textAlign="left">
                                    <OutlinedInput
                                        size="small"
                                        fullWidth
                                        type="password"
                                    />
                                </Grid2>
                            </Grid2>
                            <div className="flex-1"></div>
                            <Button
                                variant="contained"
                                fullWidth
                                color="inherit"
                            >
                                Save
                            </Button>
                        </Stack>
                    </Stack>
                </ClientUserLayout>
            </ClientDefaultLayout>
        </ClientLayout>
    );
};

export default ClientChangePasswordPage;
