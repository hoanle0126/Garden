import { Palette } from "@/Theme/elements/palette";
import { typography } from "@/Theme/elements/typography";
import { Icon } from "@iconify/react";
import { Link, router, useForm } from "@inertiajs/react";
import { CheckBox } from "@mui/icons-material";
import {
    alpha,
    Box,
    Button,
    ButtonBase,
    Checkbox,
    Divider,
    FormControlLabel,
    IconButton,
    Stack,
    TextField,
    Typography,Grid2
} from "@mui/material";
import React from "react";
import Lock3dIcon from "resources/assets/icons/Lock3dIcon";
import LogoEverprimary from "resources/assets/logo";

const ForgotPage = () => {
    const { data, setData, post } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
            }}
        >
            <Stack
                sx={{
                    height: "100%",
                    width: 480,
                    backgroundColor: alpha(Palette().primary.lighter, 0.3),
                    position: "relative",
                    paddingX: "24px",
                    justifyContent: "center",
                    svg: {
                        position: "absolute",
                        top: "24px",
                        left: "24px",
                    },
                    "& .MuiStack-root": {
                        width: "100%",
                        alignItems: "center",
                        gap: "16px",
                    },
                }}
            >
                <Link href="/">
                    <LogoEverprimary
                        size={40}
                        primary={Palette().primary.main}
                    />
                </Link>
                <Stack>
                    <Typography variant="h3">Manage the job</Typography>
                    <Typography variant="body1" color="text.secondary">
                        More effectively with optimized workflows.
                    </Typography>
                    <img
                        src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/illustrations/illustration-dashboard.webp"
                        alt=""
                        className="mt-[40px]"
                    />
                </Stack>
            </Stack>
            <form
                className="h-full flex-1 items-center justify-center relative flex"
                onSubmit={submit}
            >
                <Stack
                    direction={"row"}
                    sx={{
                        width: "100%",
                        position: "absolute",
                        top: 0,
                        justifyContent: "end",
                        padding: "24px",
                        alignItems: "center",
                        gap: "4px",
                    }}
                >
                    <Typography variant="subtitle2">Need help?</Typography>
                    <IconButton>
                        <Icon icon="solar:settings-bold-duotone" />
                    </IconButton>
                </Stack>
                <Stack width={420} gap={"16px"}>
                    <center className="mb-[12px]">
                        <Icon
                            icon="solar:lock-keyhole-minimalistic-bold-duotone"
                            width="96"
                            height="96"
                            color={Palette().primary.dark}
                        />
                    </center>
                    <Typography variant="h5" textAlign={"center"}>
                        Forgot your password?
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            a: {
                                color: "primary.dark",
                                fontWeight: 600,
                            },
                        }}
                        textAlign={"center"}
                    >
                        Please enter the email address associated with your
                        account and we'll email you a link to reset your
                        password.
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Email address"
                        variant="outlined"
                        type="email"
                        color="custom"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        placeholder="example@gmail.com"
                        sx={{
                            marginTop: "16px",
                        }}
                    />
                    <Button
                        variant="contained"
                        size="large"
                        color="inherit"
                        type="submit"
                    >
                        Send request
                    </Button>
                    <Stack
                        sx={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                            marginTop: "16px",
                            cursor: "pointer",
                        }}
                        onClick={() => router.visit(route("login"))}
                    >
                        <Icon
                            icon="solar:alt-arrow-left-outline"
                            width="16"
                            height="16"
                        />
                        <Typography variant="subtitle2">
                            Return to sign in
                        </Typography>
                    </Stack>
                </Stack>
            </form>
        </Box>
    );
};

export default ForgotPage;
