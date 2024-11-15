import { Icon } from "@iconify/react";
import { Head } from "@inertiajs/react";
import { Avatar, Box, IconButton, Stack } from "@mui/material";
import React from "react";

const AdminHeader = ({ title }) => {
    return (
    <header className="h-[80px] flex justify-end items-center px-[40px] gap-[20px]">
            <Head title={title} />
            <Stack sx={{ flexDirection: "row", gap: "12px" }}>
                <IconButton>
                    <Icon icon="solar:bell-bing-bold-duotone" />
                </IconButton>
                <IconButton>
                    <Icon icon="solar:settings-bold-duotone" />
                </IconButton>
            </Stack>
            <Avatar sx={{ overflow: "clip" }} />
        </header>
    );
};

export default AdminHeader;
