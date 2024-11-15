import { Palette } from "@/Theme/elements/palette";
import { Head, Link, usePage } from "@inertiajs/react";
import {
    Button,
    IconButton,
    Stack,
    Typography,
    useScrollTrigger,
} from "@mui/material";
import React from "react";
import LogoEverprimary from "resources/assets/logo";
import NavItems from "./data/navItems";
import { Icon } from "@iconify/react";
import PrimaryHeader from "./variants/PrimaryHeader";
import SecondaryHeader from "./variants/SecondaryHeader";
import { motion } from "framer-motion";

const ClientHeader = ({ title, window }) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });
    const [shadow, setShadow] = React.useState(false);
    const [mainHeader, setMainHeader] = React.useState(false);
    const { url } = usePage();

    React.useEffect(() => {
        setShadow(trigger);
        setMainHeader(url == "/" && !trigger);
    }, [trigger]);

    React.useEffect(() => {}, [trigger]);

    return (
        <>
            <Head title={title} />
            {mainHeader ? (
                <PrimaryHeader shadow={shadow} />
            ) : (
                <SecondaryHeader shadow={shadow} />
            )}
        </>
    );
};

export default ClientHeader;
