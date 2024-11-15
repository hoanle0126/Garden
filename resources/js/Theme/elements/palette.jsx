// ----------------------------------------------------------------------

import { alpha } from "@mui/material";
import { blue_sky, green, orange, red, yellow } from "../data/colors";

// SETUP COLORS

const grey = {
    0: "#FFFFFF",
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#919EAB",
    600: "#637381",
    700: "#454F5B",
    800: "#212B36",
    900: "#161C24",
};

const custom = {
    lighter: grey[900],
    light: grey[900],
    main: grey[900],
    dark: grey[700],
    darker: grey[900],
};

const secondary = orange;

const info = blue_sky;

const success = green;

const warning = yellow;

const error = red;

const common = {
    black: "#000000",
    white: "#FFFFFF",
};

const action = {
    hover: alpha(grey[500], 0.08),
    selected: alpha(grey[500], 0.16),
    disabled: alpha(grey[500], 0.8),
    disabledBackground: alpha(grey[500], 0.24),
    focus: alpha(grey[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
};

const colorDefault = {
    light: grey[700],
    main: grey[900],
    dark: grey[700],
};

const base = {
    colorDefault,
    secondary,
    info,
    success,
    warning,
    error,
    grey,
    custom,
    common,
    divider: alpha(grey[500], 0.2),
    action,
};

// ----------------------------------------------------------------------

export function Palette() {
    return {
        primary: green,
        ...base,
        gradient: "linear-gradient(to left, #333, #333)",
        green,
        text: {
            primary: grey[800],
            secondary: grey[600],
            disabled: grey[500],
        },
        background: {
            paper: grey[0],
            onPaper: grey[900],
            default: grey[100],
            neutral: grey[200],
            title: grey[0],
        },
        action: {
            ...base.action,
            active: grey[600],
        },
    };
}
