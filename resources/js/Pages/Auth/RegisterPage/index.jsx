import { Palette } from "@/Theme/elements/palette";
import { typography } from "@/Theme/elements/typography";
import { Icon } from "@iconify/react";
import { Link, useForm } from "@inertiajs/react";
import { CheckBox } from "@mui/icons-material";
import {
    alpha,
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    IconButton,
    Stack,
    TextField,
    Typography,
    Grid2,
} from "@mui/material";
import React from "react";
import LogoEverprimary from "resources/assets/logo";

const RegisterPage = () => {
    const { data, setData, post } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
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
                    <Typography variant="h5">
                        Get started absolutely free
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
                    >
                        Already have an account?{" "}
                        <Link href={route("login")}>Sign in</Link>
                    </Typography>
                    <Grid2
                        container
                        columnSpacing={"16px"}
                        sx={{
                            marginBottom: "-16px",
                        }}
                    >
                        <Grid2 size={6}>
                            <TextField
                                id="first-name"
                                label="First name"
                                variant="outlined"
                                color="custom"
                                value={data.first_name}
                                onChange={(e) =>
                                    setData("first_name", e.target.value)
                                }
                                sx={{
                                    marginTop: "16px",
                                }}
                            />
                        </Grid2>
                        <Grid2 size={6}>
                            <TextField
                                id="last-name"
                                label="Last name"
                                variant="outlined"
                                color="custom"
                                value={data.last_name}
                                onChange={(e) =>
                                    setData("last_name", e.target.value)
                                }
                                sx={{
                                    marginTop: "16px",
                                }}
                            />
                        </Grid2>
                    </Grid2>
                    <TextField
                        id="outlined-basic"
                        label="Email address"
                        variant="outlined"
                        type="email"
                        color="custom"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        sx={{
                            marginTop: "16px",
                        }}
                    />
                    <TextField
                        id="password-basic"
                        label="Password"
                        variant="outlined"
                        type="password"
                        color="custom"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <TextField
                        id="password-basic"
                        label="Password confirm"
                        variant="outlined"
                        type="password"
                        color="custom"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                defaultChecked
                                size="small"
                                color="custom"
                            />
                        }
                        label={
                            <Typography variant="body2">
                                I agree to Terms of service and Privacy policy.
                            </Typography>
                        }
                    />
                    <Button
                        variant="contained"
                        size="large"
                        color="inherit"
                        type="submit"
                    >
                        Created account
                    </Button>
                    <Divider
                        sx={{
                            fontStyle: typography.subtitle2,
                            color: "text.secondary",
                        }}
                    >
                        OR
                    </Divider>
                    <Stack
                        sx={{
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "16px",
                        }}
                    >
                        <IconButton>
                            <Icon icon="logos:google-icon" />
                        </IconButton>
                        <IconButton>
                            <Icon icon="logos:github-icon" />
                        </IconButton>
                        <IconButton>
                            <Icon icon="logos:facebook" />
                        </IconButton>
                    </Stack>
                </Stack>
            </form>
        </Box>
    );
};

export default RegisterPage;
