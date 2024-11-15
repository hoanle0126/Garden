import { Palette } from "@/Theme/elements/palette";
import { Icon } from "@iconify/react";
import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import LogoEverprimary from "resources/assets/logo";
import ListNavItems from "./data/listNavItems";
import { router } from "@inertiajs/react";
import { typography } from "@/Theme/elements/typography";

const AdminSidebar = () => {
    const [activeSidebar, setActiveSidebar] = useState(true);

    return (
        <>
            <Box
                sx={{
                    width: activeSidebar ? 300 : 96,
                    transitionDuration: "100ms",
                }}
            />
            <Box
                sx={{
                    width: activeSidebar ? 300 : 96,
                    position: "fixed",
                    top: 0,
                    height:"100vh",
                    borderRight: 1,
                    borderColor: "divider",
                    transitionDuration: "100ms",
                    "& .aside": {
                        "&__header": {
                            height: 80,
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            padding: "28px",
                            width: "100%",
                            "& .MuiButtonBase-root": {
                                backgroundColor: "#fff",
                                position: "absolute",
                                right: -12,
                                width: 24,
                                height: 24,
                                borderRadius: 99,
                                borderWidth: "1px",
                                borderStyle: "solid",
                                borderColor: "divider",
                                rotate: !activeSidebar && "180deg",
                                transitionDuration: "180ms",
                            },
                        },
                        "&__list__content": {
                            gap: activeSidebar ? "20px" : "8px",
                        },
                        "&__content": {
                            paddingX: activeSidebar ? "20px" : "8px",
                            gap: "8px",
                            "&__title": {
                                textTransform: "uppercase",
                                fontWeight: 700,
                                color: "text.disabled",
                                paddingX: "8px",
                            },
                            "&__nav": {
                                gap: "4px",
                                "&__item": {
                                    padding: "8px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    color: "text.secondary",
                                    flexDirection: activeSidebar
                                        ? "row"
                                        : "column",
                                    justifyContent: "start",
                                    gap: "8px",
                                    "&:hover": {
                                        backgroundColor: "grey.200",
                                    },
                                    "&.active": {
                                        backgroundColor: "primary.lighter",
                                        color: "primary.dark",
                                        "&:hover": {
                                            backgroundColor: "primary.light",
                                        },
                                    },
                                    "& .MuiTypography-root ": {
                                        fontStyle: activeSidebar
                                            ? typography.body2
                                            : typography.captiontext,
                                    },
                                },
                            },
                        },
                    },
                }}
            >
                <Box className="aside__header">
                    <LogoEverprimary
                        size={40}
                        primary={Palette().primary.main}
                    />
                    <ButtonBase
                        onClick={() => setActiveSidebar(!activeSidebar)}
                    >
                        <Icon icon="eva:arrow-ios-back-fill" />
                    </ButtonBase>
                </Box>
                <Stack className="aside__list__content">
                    {ListNavItems().map((navItem) => (
                        <Stack key={navItem} className="aside__content">
                            {activeSidebar && (
                                <Typography
                                    variant="captiontext"
                                    className="aside__content__title"
                                >
                                    {navItem.name}
                                </Typography>
                            )}
                            <Stack className="aside__content__nav">
                                {navItem.items.map((item) => (
                                    <ButtonBase
                                        key={item}
                                        className={`aside__content__nav__item ${
                                            item.active && "active"
                                        }`}
                                        onClick={() => router.visit(item.to)}
                                    >
                                        <Icon
                                            icon={item.icon}
                                            width={21}
                                            height={21}
                                        />
                                        <Typography>{item.name}</Typography>
                                    </ButtonBase>
                                ))}
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Box>
        </>
    );
};

export default AdminSidebar;
