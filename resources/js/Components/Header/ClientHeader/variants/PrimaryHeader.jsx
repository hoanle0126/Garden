import { Head, Link } from "@inertiajs/react";
import { AppBar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import LogoEverprimary from "resources/assets/logo";
import NavItems from "../data/navItems";
import { Palette } from "@/Theme/elements/palette";
import { motion } from "framer-motion";
import { typography } from "@/Theme/elements/typography";
import { Icon } from "@iconify/react";

const PrimaryHeader = ({ shadow }) => {
    const MotionTypography = motion(Typography);
    const MotionStack = motion(Stack);
    const MotionBox = motion(Box);

    return (
        <MotionBox
            sx={{
                height: 60,
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                display: "flex",
                alignItems: "center",
                paddingX: "180px",
                gap: "12px",
                zIndex: "1000",
                boxShadow: shadow && "custom.z1",
            }}
        >
            <LogoEverprimary size={40} primary={Palette().primary.main} />
            <MotionStack
                sx={{
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: "center",
                    gap: "80px",
                }}
            >
                {NavItems().map((navItem) => (
                    <MotionTypography
                        variant="h6"
                        color={navItem.active && "primary"}
                        sx={{
                            position: "relative",
                            display: "inline-flex",
                            justifyContent: "center",
                            fontWeight: 600,
                            alignItems: "center",
                            "&::before": {
                                width: "6px",
                                height: "6px",
                                left: "-12px",
                                opacity: 1,
                                content: "''",
                                borderRadius: "50%",
                                position: "absolute",
                                backgroundColor:
                                    navItem.active && "primary.main",
                            },
                        }}
                        key={navItem}
                    >
                        <Link href={navItem.to}>{navItem.name}</Link>
                    </MotionTypography>
                ))}
            </MotionStack>
            <>
                <Button
                    sx={{
                        textTransform: "none",
                    }}
                    variant="outlined"
                    color="inherit"
                    onClick={() => router.visit(route("login"))}
                >
                    Register
                </Button>
                <Button
                    sx={{
                        textTransform: "none",
                    }}
                    variant="contained"
                    color="inherit"
                    onClick={() => router.visit(route("login"))}
                >
                    Login
                </Button>
            </>
        </MotionBox>
    );
};

export default PrimaryHeader;
