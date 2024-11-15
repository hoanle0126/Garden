import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ButtonBase } from "@mui/material";

export const Thumb = (props) => {
    const { selected, slide, index, onClick } = props;

    return (
        <img
            src={slide}
            alt=""
            className={`embla-thumbs__slide ${selected && "selected"}`}
            onClick={onClick}
        />
    );
};
