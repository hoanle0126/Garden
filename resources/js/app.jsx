import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ThemeProvider } from "@mui/material";
import { MuiTheme } from "./Theme";
import { Palette } from "./Theme/elements/palette";
import GlobalStyle from "./Components/GlobalStyle";
import { ThemeContextProvider } from "./Context/context";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ThemeContextProvider>
                    <ThemeProvider theme={MuiTheme()}>
                        <GlobalStyle />
                        <App {...props} />
                    </ThemeProvider>
                </ThemeContextProvider>
            </LocalizationProvider>
        );
    },
    progress: {
        color: Palette().primary.main,
    },
});
