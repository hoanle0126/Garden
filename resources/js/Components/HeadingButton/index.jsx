import { typography } from "@/Theme/elements/typography";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const HeadingButton = (props) => {
    const { children } = props;
    const MotionButton = motion(Button);

    return (
        <MotionButton
            {...props}
            initial={{
                scale: 1,
            }}
            whileHover={{
                scale: 1.1,
            }}
            whileTap={{
                scale: 1.05,
            }}
            sx={{
                borderRadius: "90px",
                padding: "16px 32px",
                fontStyle: typography.h5,
                textTransform: "none",
                color: "grey.0",
            }}
        >
            {children}
        </MotionButton>
    );
};

export default HeadingButton;
