import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";
import { Box, Breadcrumbs, Button, Stack, Typography } from "@mui/material";
import React from "react";

const AdminDefaultLayout = ({ title, children, action }) => {
    return (
        <main className="p-[30px] pt-0 flex flex-col gap-[28px] w-full h-[calc(100vh-80px)]">
            <Stack direction={"row"} sx={{ alignItems: "center" }}>
                <Stack gap={"4px"}>
                    <Typography variant="h4">{title}</Typography>
                    <Breadcrumbs
                        aria-label="breadcrumb"
                        separator={
                            <Box
                                className="w-[4px] h-[4px] rounded-full mx-[4px]"
                                sx={{ backgroundColor: "text.disabled" }}
                            />
                        }
                        sx={{
                            "li:not(:last-child)": {
                                marginBottom: 0,
                            },
                        }}
                    >
                        <Link underline="hover" href="/admin">
                            <Typography
                                variant="body2"
                                color={"text.secondary"}
                            >
                                Dashboard
                            </Typography>
                        </Link>
                        <Typography variant="body2" color={"text.disabled"}>
                            {title}
                        </Typography>
                    </Breadcrumbs>
                </Stack>
                <div className="flex-1"></div>
                <Box>{action}</Box>
            </Stack>
            {children}
        </main>
    );
};

export default AdminDefaultLayout;
