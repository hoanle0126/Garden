import { Palette } from "@/Theme/elements/palette";
import { Icon } from "@iconify/react";
import { Stack, Typography } from "@mui/material";
import React from "react";

const ProductService = () => {
    return (
        <Stack direction={"row"} justifyContent={"space-around"}>
            <Stack alignItems={"center"} gap={"8px"}>
                <Icon
                    icon="solar:verified-check-bold"
                    width="32"
                    height="32"
                    color={Palette().success.dark}
                />
                <div />
                <Typography variant="subtitle1">100% original</Typography>
                <Typography
                    variant="body2"
                    color={"text.secondary"}
                    textAlign={"center"}
                >
                    Chocolate bar candy canes ice cream
                    <br />
                    toffee cookie halvah.
                </Typography>
            </Stack>
            <Stack alignItems={"center"} gap={"8px"}>
                <Icon
                    icon="solar:clock-circle-bold"
                    width="32"
                    height="32"
                    color={Palette().success.dark}
                />
                <div />
                <Typography variant="subtitle1">10 days replacement</Typography>
                <Typography
                    variant="body2"
                    color={"text.secondary"}
                    textAlign={"center"}
                >
                    Marshmallow biscuit donut dragée
                    <br />
                    fruitcake wafer.
                </Typography>
            </Stack>
            <Stack alignItems={"center"} gap={"8px"}>
                <Icon
                    icon="solar:shield-check-bold"
                    width="32"
                    height="32"
                    color={Palette().success.dark}
                />
                <div />
                <Typography variant="subtitle1">Year warranty</Typography>
                <Typography
                    variant="body2"
                    color={"text.secondary"}
                    textAlign={"center"}
                >
                    Cotton candy gingerbread cake I love
                    <br />
                    sugar sweet.
                </Typography>
            </Stack>
        </Stack>
    );
};

export default ProductService;
