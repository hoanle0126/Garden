import ClientHeader from "@/Components/Header/ClientHeader";
import { Icon } from "@iconify/react";
import { Head, router, usePage } from "@inertiajs/react";
import { Badge, Box, ButtonBase } from "@mui/material";
import React from "react";

const ClientLayout = ({ children, title }) => {
    const { props } = usePage();
    const user = props.auth.user;

    return (
        <Box>
            <Head title={title} />
            {user && (
                <Box
                    sx={{
                        position: "fixed",
                        padding: "8px 24px 8px 16px",
                        borderTopLeftRadius: "99px",
                        borderBottomLeftRadius: "99px",
                        backgroundColor: "background.paper",
                        boxShadow: "custom.card",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        top: 80,
                        right: 0,
                        cursor: "pointer",
                    }}
                    onClick={() => router.visit(route("checkouts.index"))}
                >
                    <Badge
                        badgeContent={user?.cart.products.length}
                        color="error"
                    >
                        <Icon icon="solar:cart-3-bold" width="24" height="24" />
                    </Badge>
                </Box>
            )}
            <main>
                <ClientHeader />
                {children}
            </main>
        </Box>
    );
};

export default ClientLayout;
