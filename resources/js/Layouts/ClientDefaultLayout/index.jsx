import { typography } from "@/Theme/elements/typography";
import { Link } from "@inertiajs/react";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import React from "react";

const ClientDefaultLayout = ({ children, title, breadcrumbs, header }) => {
    return (
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
            {header && <Typography variant="h4">{title}</Typography>}
            {breadcrumbs && (
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
            )}
            {children}
        </Box>
    );
};

export default ClientDefaultLayout;
