import { createTheme, tabClasses } from "@mui/material";
import { Palette } from "./elements/palette";
import { primaryFont, typography } from "./elements/typography";
import { Shadows } from "./elements/shadow";
import { Icon } from "@iconify/react";

export function MuiTheme() {
    const shadows = Shadows(Palette());

    return createTheme({
        palette: Palette(),
        typography: typography,
        fontFamily: primaryFont,
        shadows: shadows,
        components: {
            MuiButton: {
                defaultProps: {
                    style: {
                        fontWeight: 600,
                        textTransform: "none",
                    },
                },
                variants: [
                    {
                        props: { variant: "contained", color: "inherit" },
                        style: {
                            backgroundColor: Palette().grey[900],
                            color: Palette().background.paper,
                            "&:hover": {
                                backgroundColor: Palette().grey[700],
                                boxShadow: shadows.color.custom,
                            },
                        },
                    },
                    {
                        props: { variant: "contained", color: "secondary" },
                        style: {
                            "&:hover": {
                                boxShadow: shadows.color.secondary,
                            },
                        },
                    },
                    {
                        props: { variant: "outlined", color: "inherit" },
                        style: {
                            color: Palette().background.onPaper,
                            borderColor: Palette().grey[400],
                        },
                    },
                    {
                        props: { size: "medium" },
                        style: {
                            borderRadius: "8px",
                            padding: "4px 12px",
                        },
                    },
                    {
                        props: { size: "large" },
                        style: {
                            borderRadius: "8px",
                            padding: "8px 16px",
                        },
                    },
                    {
                        props: { size: "heading" },
                        style: {
                            borderRadius: "99px",
                            padding: "12px 32px",
                            fontSize: typography.h5.fontSize,
                            "&:hover": {
                                transform: "scale(1.02)",
                            },
                        },
                    },
                ],
            },
            MuiCheckbox: {
                defaultProps: {
                    icon: (
                        <Icon
                            icon="solar:stop-outline"
                            width="20"
                            height="20"
                        />
                    ),
                    checkedIcon: (
                        <Icon
                            icon="solar:check-square-bold"
                            width={20}
                            height={20}
                        />
                    ),
                    indeterminateIcon: (
                        <Icon
                            icon="solar:minus-square-bold"
                            width="20"
                            height="20"
                        />
                    ),
                },
            },
            MuiPopper: {
                defaultProps: {
                    sx: {
                        "& .MuiPaper-root": {
                            borderRadius: "8px",
                            boxShadow: "custom.card",
                            border: "1px solid",
                            borderColor: "divider",
                            "& .MuiList-root": {
                                paddingX: "4px",
                                paddingY: "4px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                                "& .MuiButtonBase-root.MuiMenuItem-root": {
                                    borderRadius: "8px",
                                    paddingX: "8px",
                                    gap: "12px",
                                    fontSize: "14px",
                                    lineHeight: "22px",
                                    fontWeight: "400",
                                    letterSpacing: 0,
                                },
                            },
                        },
                    },
                },
            },
            MuiPopover: {
                defaultProps: {
                    sx: {
                        "& .MuiPaper-root": {
                            borderRadius: "8px",
                            boxShadow: "custom.card",
                            border: "1px solid",
                            borderColor: "divider",
                            "& .MuiList-root": {
                                paddingX: "4px",
                                paddingY: "4px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                                "& .MuiButtonBase-root.MuiMenuItem-root": {
                                    borderRadius: "8px",
                                    paddingX: "8px",
                                    gap: "12px",
                                    fontSize: "14px",
                                    lineHeight: "22px",
                                    fontWeight: "400",
                                    letterSpacing: 0,
                                },
                                "& svg": {
                                    width: "14px",
                                    height: "14px",
                                },
                            },
                        },
                    },
                },
            },
            MuiCard: {
                defaultProps: {
                    sx: {
                        boxShadow: "custom.card",
                        padding: "20px",
                        borderRadius: "12px",
                    },
                },
            },
            MuiOutlinedInput: {
                defaultProps: {
                    sx: {
                        borderRadius: "8px",
                    },
                },
            },
            MuiRating: {
                defaultProps: {
                    icon: <Icon icon="solar:star-bold" />,
                    emptyIcon: <Icon icon="solar:star-bold" />,
                },
                variants: [
                    {
                        props: { size: "small" },
                        style: {
                            "& svg": {
                                width: 18,
                                height: 18,
                            },
                        },
                    },
                ],
            },
            MuiTabs: {
                variants: [
                    {
                        props: { color: "primary" },
                        style: {
                            [`& .${tabClasses.root}`]: {
                                textTransform: "none",
                                fontStyle: typography.subtitle2,
                            },
                        },
                    },
                ],
                defaultProps: {
                    style: {
                        [`& .${tabClasses.root}`]: {
                            textTransform: "none",
                            fontStyle: typography.subtitle2,
                        },
                    },
                },
            },
        },
    });
}
