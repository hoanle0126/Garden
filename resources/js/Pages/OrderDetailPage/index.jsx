import ClientDefaultLayout from "@/Layouts/ClientDefaultLayout";
import ClientLayout from "@/Layouts/ClientLayout";
import ClientUserLayout from "@/Layouts/ClientUserLayout";
import { Palette } from "@/Theme/elements/palette";
import { Icon } from "@iconify/react";
import {
    Box,
    Button,
    ButtonBase,
    Divider,
    Stack,
    Step,
    StepConnector,
    stepConnectorClasses,
    StepLabel,
    Stepper,
    styled,
    Typography,
} from "@mui/material";
import React from "react";
import StatusStep from "./components/StatusStep";
import ListProducts from "./components/ListProducts";
import { router, usePage } from "@inertiajs/react";
import StatusStepAction from "./components/StatusStepAction";
import { steps } from "./elements/steps";
import OrderDetailPageDetail from "./components/OrderDetailPageTitle";

const OrderDetailPage = () => {
    const { props } = usePage();
    const activeStep = steps.findIndex(
        (it) => it.value === props.order.current_status
    );

    React.useEffect(() => {
        console.log("role");
    }, []);

    return (
        <ClientLayout>
            <ClientDefaultLayout>
                <ClientUserLayout>
                    <Stack
                        sx={{
                            gap: "12px",
                            boxShadow: "custom.card",
                            borderRadius: "16px",
                            overflow: "hidden",
                        }}
                    >
                        <OrderDetailPageDetail props={props} />
                        <Divider />
                        <StatusStep activeStep={activeStep} />
                        <StatusStepAction activeStep={activeStep} />
                        <Stack
                            sx={{
                                marginY: "12px",
                                padding: "32px 20px",
                                gap: "12px",
                                backgroundColor: "secondary.lighter",
                            }}
                        >
                            <Typography variant="h5">
                                Delivery address
                            </Typography>
                            <Stack direction="row" gap="20px">
                                <Stack gap="4px">
                                    <Typography variant="body1">
                                        {props.auth.user.first_name}{" "}
                                        {props.auth.user.last_name}
                                    </Typography>
                                    <br />
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        (+84) {props.auth.user.phone}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {props.order.address.address},{" "}
                                        {props.order.address.ward},{" "}
                                        {props.order.address.district},{" "}
                                        {props.order.address.city}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        <ListProducts activeStep={activeStep} />
                    </Stack>
                </ClientUserLayout>
            </ClientDefaultLayout>
        </ClientLayout>
    );
};

export default OrderDetailPage;
