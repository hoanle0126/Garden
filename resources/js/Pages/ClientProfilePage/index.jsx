import ClientDefaultLayout from "@/Layouts/ClientDefaultLayout";
import ClientLayout from "@/Layouts/ClientLayout";
import ClientUserLayout from "@/Layouts/ClientUserLayout";
import { Icon } from "@iconify/react";
import { usePage } from "@inertiajs/react";
import {
    Avatar,
    Box,
    Button,
    Divider,
    FormControlLabel,
    OutlinedInput,
    Radio,
    RadioGroup,
    Stack,
    Typography,Grid2
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";

const ClientProfilePage = () => {
    const { props } = usePage();
    const user = props.auth.user;

    return (
        <ClientLayout>
            <ClientDefaultLayout>
                <ClientUserLayout>
                    <Stack
                        sx={{
                            padding: "20px",
                            gap: "20px",
                            minHeight: "calc(100vh - 160px)",
                        }}
                    >
                        <Stack>
                            <Typography variant="h5">Profile</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Manage profile information to keep your account
                                secure
                            </Typography>
                        </Stack>
                        <Divider />
                        <Stack direction="row">
                            <Stack
                                sx={{
                                    flex: 1,
                                }}
                            >
                                <Grid2
                                    container
                                    columnSpacing="24px"
                                    rowSpacing="32px"
                                >
                                    <Grid2 size={3} textAlign="right">
                                        <Typography variant="subtitle1">
                                            Email
                                        </Typography>
                                    </Grid2>
                                    <Grid2 size={9} textAlign="left">
                                        <Typography variant="body1">
                                            {user.email}
                                        </Typography>
                                    </Grid2>
                                    <Grid2 size={3}>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                height: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "end",
                                            }}
                                        >
                                            First name
                                        </Typography>
                                    </Grid2>
                                    <Grid2 size={9} textAlign="left">
                                        <OutlinedInput
                                            size="small"
                                            fullWidth
                                            value={user.first_name}
                                        />
                                    </Grid2>
                                    <Grid2 size={3}>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                height: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "end",
                                            }}
                                        >
                                            Last name
                                        </Typography>
                                    </Grid2>
                                    <Grid2 size={9} textAlign="left">
                                        <OutlinedInput
                                            size="small"
                                            fullWidth
                                            value={user.last_name}
                                        />
                                    </Grid2>
                                    <Grid2 size={3}>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                height: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "end",
                                            }}
                                        >
                                            Phone
                                        </Typography>
                                    </Grid2>
                                    <Grid2 size={9} textAlign="left">
                                        <OutlinedInput
                                            size="small"
                                            fullWidth
                                            type="number"
                                            value={user.last_name}
                                        />
                                    </Grid2>
                                    <Grid2 size={3}>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                height: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "end",
                                            }}
                                        >
                                            Gender
                                        </Typography>
                                    </Grid2>
                                    <Grid2 size={9} textAlign="left">
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel
                                                value="male"
                                                control={<Radio />}
                                                label="Male"
                                            />
                                            <FormControlLabel
                                                value="female"
                                                control={<Radio />}
                                                label="Female"
                                            />
                                        </RadioGroup>
                                    </Grid2>
                                    <Grid2 size={3}>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                height: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "end",
                                            }}
                                        >
                                            Birthdate
                                        </Typography>
                                    </Grid2>
                                    <Grid2 size={9} textAlign="left">
                                        <DatePicker
                                            label="Birthdate"
                                            sx={{ width: "100%" }}
                                        />
                                    </Grid2>
                                    <Grid2 size={12} textAlign="left">
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            color="inherit"
                                        >
                                            Save
                                        </Button>
                                    </Grid2>
                                </Grid2>
                            </Stack>
                            <Stack
                                sx={{
                                    alignItems: "center",
                                    padding: "20px 60px",
                                    gap: "12px",
                                }}
                            >
                                <Avatar sx={{ width: 120, height: 120 }} />
                                <Button
                                    component="label"
                                    variant="outlined"
                                    color="inherit"
                                    startIcon={
                                        <Icon icon="solar:upload-linear" />
                                    }
                                >
                                    Upload files
                                    <input
                                        type="file"
                                        onChange={(event) =>
                                            console.log(event.target.files)
                                        }
                                        multiple
                                        className="hidden"
                                    />
                                </Button>
                                <Typography
                                    variant="body2"
                                    textAlign="center"
                                    color="text.secondary"
                                >
                                    Maximum file size 1 MB
                                    <br />
                                    Format: .JPEG, .PNG
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </ClientUserLayout>
            </ClientDefaultLayout>
        </ClientLayout>
    );
};

export default ClientProfilePage;
