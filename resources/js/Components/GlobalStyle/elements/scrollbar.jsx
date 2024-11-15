import { Palette } from "@/Theme/elements/palette";
import React from "react";

const scrollbar = () => {
    return {
        width: "8px",
        height: "8px",
        "&-track": {
            borderRadius: "4px",
        },
        "&-thumb": {
            borderRadius: "4px",
            backgroundImage: `linear-gradient(to bottom, ${
                Palette().primary.main
            } , ${Palette().primary.dark})`,
            "&:hover": {
                background: Palette().primary.dark,
            },
        },
    };
};

export default scrollbar;
