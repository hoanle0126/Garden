import ClientDefaultLayout from "@/Layouts/ClientDefaultLayout";
import ClientLayout from "@/Layouts/ClientLayout";
import { typography } from "@/Theme/elements/typography";
import { Icon } from "@iconify/react";
import { Link, router, usePage } from "@inertiajs/react";
import {
    Avatar,
    Box,
    Card,
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Stack,
    Typography,
    Grid2,
} from "@mui/material";
import React from "react";

const ClientUserLayout = ({ children }) => {
    const { props, url } = usePage();
    const user = props.auth.user;
    const [open, setOpen] = React.useState("");

    return (
        <Grid2 container spacing={"24px"}>
            <Grid2 size={3}>
                <Stack
                    sx={{
                        gap: "16px",
                    }}
                >
                    <Stack
                        direction={"row"}
                        sx={{
                            alignItems: "center",
                            gap: "8px",
                        }}
                    >
                        <Avatar sx={{ width: "48px", height: "48px" }} />
                        <Stack>
                            <Typography variant="subtitle1">
                                {user.first_name
                                    .concat(" ")
                                    .concat(user.last_name)}
                            </Typography>
                            <Stack
                                direction={"row"}
                                sx={{
                                    fontStyle: typography.captiontext,
                                    alignItems: "center",
                                    gap: "4px",
                                    color: "text.secondary",
                                    cursor: "pointer",
                                }}
                            >
                                <Icon icon="solar:pen-2-bold" />
                                Edit
                            </Stack>
                        </Stack>
                    </Stack>
                    <Divider />
                    <MenuList>
                        {[
                            {
                                title: "My account",
                                icon: "solar:user-circle-",
                                href: "/auth",
                                children: [
                                    {
                                        title: "Profile",
                                        href: "/profile",
                                    },
                                    {
                                        title: "Change password",
                                        href: "/change-password",
                                    },
                                    {
                                        title: "Banks",
                                        href: "/banks",
                                    },
                                ],
                            },
                            {
                                title: "Orders",
                                icon: "solar:cart-large-minimalistic-",
                                href: "/orders",
                            },
                            {
                                title: "Notifications",
                                icon: "solar:bell-",
                                href: "/notifications",
                            },
                            {
                                title: "Vouchers",
                                icon: "solar:ticket-sale-",
                                href: "/vouchers",
                            },
                            {
                                title: "Coins",
                                icon: "solar:chat-round-money-",
                                href: "/coins",
                            },
                        ].map((it, index) => (
                            <Box key={it.title.concat(index)}>
                                <MenuItem
                                    sx={{
                                        borderRadius: "8px",
                                        paddingY: "8px",
                                        fontStyle:
                                            url === "/user".concat(it.href)
                                                ? typography.subtitle2
                                                : typography.body2,
                                        backgroundColor:
                                            url === "/user".concat(it.href) &&
                                            "background.neutral",
                                    }}
                                    onClick={() => {
                                        it.children
                                            ? setOpen(
                                                  open === it.title
                                                      ? ""
                                                      : it.title
                                              )
                                            : router.visit(
                                                  "/user".concat(it.href)
                                              );
                                    }}
                                >
                                    <ListItemIcon>
                                        <Icon
                                            icon={it.icon.concat(
                                                url.includes(
                                                    "/user".concat(it.href)
                                                )
                                                    ? "bold"
                                                    : "linear"
                                            )}
                                            width="24"
                                            height="24"
                                        />
                                    </ListItemIcon>
                                    <ListItemText>{it.title}</ListItemText>
                                </MenuItem>
                                {it.children && (
                                    <Collapse
                                        in={
                                            open === it.title ||
                                            url.includes(
                                                "/user".concat("/auth")
                                            )
                                        }
                                        timeout="auto"
                                        unmountOnExit
                                    >
                                        <MenuList>
                                            {it.children?.map(
                                                (itChild, indexChild) => (
                                                    <MenuItem
                                                        key={itChild.href.concat(
                                                            indexChild
                                                        )}
                                                        sx={{
                                                            pl: "12px",
                                                            borderRadius: "8px",
                                                            gap: "12px",
                                                            fontStyle:
                                                                typography.body2,
                                                            backgroundColor:
                                                                url ===
                                                                    "/user"
                                                                        .concat(
                                                                            it.href
                                                                        )
                                                                        .concat(
                                                                            itChild.href
                                                                        ) &&
                                                                "background.neutral",
                                                        }}
                                                        onClick={() =>
                                                            router.visit(
                                                                "/user/auth".concat(
                                                                    itChild.href
                                                                )
                                                            )
                                                        }
                                                    >
                                                        <div className="w-[8px]" />
                                                        <Icon
                                                            icon="solar:forward-2-bold"
                                                            width="20"
                                                            height="20"
                                                        />
                                                        {itChild.title}
                                                    </MenuItem>
                                                )
                                            )}
                                        </MenuList>
                                    </Collapse>
                                )}
                            </Box>
                        ))}
                    </MenuList>
                </Stack>
            </Grid2>
            <Grid2 size={9}>{children}</Grid2>
        </Grid2>
    );
};

export default ClientUserLayout;
