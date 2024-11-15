import EmblaCarousel from "@/Components/EmblaCarousel";
import { Box } from "@mui/material";
import React from "react";

const ProductThumbnail = ({ slides, options }) => {
    return (
        <Box
            sx={{
                margin: "32px 32px 32px 0px",
                borderRadius: "16px",
                position: "relative",
                width: "100%",
                aspectRatio: "1/1",
            }}
        >
            <EmblaCarousel slides={slides} options={options} />
        </Box>
    );
};

export default ProductThumbnail;
