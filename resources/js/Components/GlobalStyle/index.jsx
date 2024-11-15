import { typography } from "@/Theme/elements/typography";
import { GlobalStyles } from "@mui/material";
import React from "react";
import embla from "./elements/embla";
import { Palette } from "@/Theme/elements/palette";
import scrollbar from "./elements/scrollbar";

const GlobalStyle = () => {
    return (
        <GlobalStyles
            styles={{
                h1: typography.h1,
                h2: typography.h2,
                h3: typography.h3,
                h4: typography.h4,
                h5: typography.h5,
                h6: typography.h6,
                p: typography.body2,
                br: {
                    content: "''",
                    display: "block",
                    height: "4px",
                },
                "ul,ol": {
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: "400",
                    letterSpacing: 0,
                },
                li: {
                    "&:not(:last-child)": {
                        marginBottom: "4px",
                    },
                },
                ul: {
                    listStyleType: "disc",
                },
                ol: {
                    listStyleType: "decimal",
                },
                ".embla": embla(),
                "::-webkit-scrollbar": scrollbar(),
            }}
        ></GlobalStyles>
    );
};

export default GlobalStyle;
