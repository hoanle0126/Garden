import { Head, Link, router, usePage } from "@inertiajs/react";
import {
    AppBar,
    Avatar,
    Box,
    Button,
    IconButton,
    MenuItem,
    MenuList,
    Popover,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import LogoEverprimary from "resources/assets/logo";
import NavItems from "../data/navItems";
import { Palette } from "@/Theme/elements/palette";
import { motion } from "framer-motion";
import { typography } from "@/Theme/elements/typography";
import { Icon } from "@iconify/react";

const SecondaryHeader = ({ shadow }) => {
    const { url, props } = usePage();
    const MotionTypography = motion(Typography);
    const MotionStack = motion(Stack);
    const MotionBox = motion(Box);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <Box
            sx={{
                height: 60,
                backgroundColor: "#fff",
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
            <Stack
                sx={{
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: "end",
                    gap: "40px",
                }}
            >
                {NavItems().map((navItem) => (
                    <Typography
                        color={navItem.active ? "primary" : "text.primary"}
                        sx={{
                            fontSize: typography.subtitle2.fontSize,
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
                        key={navItem.name}
                    >
                        <Link href={navItem.to}>{navItem.name}</Link>
                    </Typography>
                ))}
            </Stack>
            {!props.auth.user ? (
                <>
                    <Button
                        sx={{
                            textTransform: "none",
                            marginLeft: "24px",
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
            ) : (
                <>
                    <IconButton sx={{ marginLeft: "12px", marginRight: "8px" }}>
                        <Icon
                            icon="solar:settings-bold-duotone"
                            width="28"
                            height="28"
                        />
                    </IconButton>
                    <Avatar onClick={handleClick} sx={{ cursor: "pointer" }} />
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                    >
                        <MenuList
                            sx={{
                                width: "128px",
                            }}
                        >
                            <MenuItem
                                onClick={() =>
                                    router.visit(route("client.profile"))
                                }
                            >
                                <Icon icon="solar:user-circle-linear" />
                                <Typography variant="body2">Profile</Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={() =>
                                    router.visit(route("orders.index"))
                                }
                            >
                                <Icon icon="solar:cart-large-minimalistic-outline" />
                                <Typography variant="body2">
                                    My Orders
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={() => router.post(route("logout"))}
                            >
                                <Icon icon="solar:logout-2-broken" />
                                <Typography variant="body2">Logout</Typography>
                            </MenuItem>
                        </MenuList>
                    </Popover>
                </>
            )}
        </Box>
    );
};

export default SecondaryHeader;
