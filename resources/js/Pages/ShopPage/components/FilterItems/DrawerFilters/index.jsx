/* eslint-disable react/prop-types */
import { Palette } from "@/Theme/elements/palette";
import { Icon } from "@iconify/react";
import { router, usePage } from "@inertiajs/react";
import {
    alpha,
    Box,
    Button,
    ButtonBase,
    Drawer,
    FormControlLabel,
    IconButton,
    OutlinedInput,
    Radio,
    RadioGroup,
    Rating,
    Slider,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import marksRating from "./marksRating";
import getParams from "@/Function/getParams";

const DrawerFilters = ({ openFilterDrawer, setOpenFilterDrawer }) => {
    const [limit, setLimit] = React.useState(true);
    const { props, url } = usePage();

    const params = getParams(url);

    const getQueryString = (url) => {
        const queryString = url.split("?")[1];
        return queryString || "";
    };

    const [filter, setFilter] = React.useState({
        category: params.get("category"),
        priceFrom: params.get("priceFrom") || 30,
        priceTo: params.get("priceTo") || 160,
        rating: params.get("rating") || 0,
        link: "?".concat(getQueryString(url)),
    });

    return (
        <Drawer
            anchor="right"
            open={openFilterDrawer}
            onClose={setOpenFilterDrawer}
        >
            <div className="w-[320px]">
                <Box
                    sx={{
                        paddingLeft: 3,
                        paddingRight: 1,
                        paddingY: 2,
                        borderBottomWidth: "1px",
                        borderStyle: "dashed",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h6">Filters</Typography>
                    <div className="flex-1" />
                    <IconButton onClick={() => router.visit("/shops")}>
                        <Icon icon="solar:restart-bold" />
                    </IconButton>
                    <IconButton onClick={() => setOpenFilterDrawer(false)}>
                        <Icon icon="eva:close-fill" />
                    </IconButton>
                </Box>
                <Stack
                    sx={{
                        padding: 3,
                        gap: "24px",
                    }}
                >
                    <Stack gap={"8px"}>
                        <Typography variant="subtitle2">Category</Typography>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            sx={{
                                "& .MuiTypography-root": {
                                    fontSize: 14,
                                },
                            }}
                            value={filter.category}
                            onChange={(e) => {
                                setFilter({
                                    ...filter,
                                    category: e.target.value,
                                    link: filter.link.concat(
                                        `&category=${e.target.value}`
                                    ),
                                });
                            }}
                        >
                            {props.categories
                                .slice(0, limit ? 3 : props.categories.length)
                                .map((category) => (
                                    <FormControlLabel
                                        key={category}
                                        value={category.name}
                                        control={
                                            <Radio
                                                icon={
                                                    <Icon
                                                        icon="material-symbols-light:circle-outline"
                                                        width="20"
                                                        height="20"
                                                    />
                                                }
                                                checkedIcon={
                                                    <Icon
                                                        icon="material-symbols-light:radio-button-checked"
                                                        width="20"
                                                        height="20"
                                                    />
                                                }
                                                size="small"
                                            />
                                        }
                                        label={category.name}
                                    />
                                ))}
                            <Box>
                                <Button
                                    color="inherit"
                                    endIcon={
                                        <Icon
                                            icon={
                                                limit
                                                    ? "eva:plus-fill"
                                                    : "eva:minus-fill"
                                            }
                                        />
                                    }
                                    onClick={() => setLimit(!limit)}
                                >
                                    {limit ? "More" : "Less"}
                                </Button>
                            </Box>
                        </RadioGroup>
                    </Stack>
                    <Stack gap={"8px"}>
                        <Typography variant="subtitle2">Price</Typography>
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                        >
                            <Typography
                                variant="captiontext"
                                fontWeight={600}
                                color={"text.disabled"}
                            >
                                Min ($)
                            </Typography>
                            <OutlinedInput
                                size="small"
                                sx={{ width: 60, borderRadius: "8px" }}
                                color="custom"
                                value={filter.priceFrom}
                                type="number"
                                onChange={(e) =>
                                    e.target.value < filter.priceTo &&
                                    setFilter({
                                        ...filter,
                                        priceFrom: e.target.value,
                                    })
                                }
                            />
                            <Typography
                                variant="captiontext"
                                fontWeight={600}
                                color={"text.disabled"}
                            >
                                Max ($)
                            </Typography>
                            <OutlinedInput
                                size="small"
                                sx={{ width: 60, borderRadius: "8px" }}
                                color="custom"
                                value={filter.priceTo}
                                onChange={(e) =>
                                    e.target.value <= 200 &&
                                    setFilter({
                                        ...filter,
                                        priceTo: e.target.value,
                                    })
                                }
                            />
                        </Stack>
                        <Slider
                            value={[filter.priceFrom, filter.priceTo]}
                            onChange={(e, newValue) => {
                                setFilter({
                                    ...filter,
                                    priceFrom: newValue[0],
                                    priceTo: newValue[1],
                                    link: filter.link.concat(
                                        `&priceFrom=${newValue[0]}&priceTo=${
                                            newValue[1] || 160
                                        }`
                                    ),
                                });
                            }}
                            shiftStep={30}
                            step={10}
                            marks={marksRating()}
                            min={0}
                            max={200}
                            sx={{
                                height: 6,
                                width: "calc(100% - 24px)",
                                alignSelf: "center",
                                "& .MuiSlider-thumb": {
                                    height: 16,
                                    width: 16,
                                    border: "1px solid",
                                    color: "grey.0",
                                    boxShadow:
                                        "rgba(145, 158, 171, 0.16) 0px 1px 2px 0px",
                                    borderColor: alpha(
                                        Palette().grey[500],
                                        0.08
                                    ),
                                    "&::before": {
                                        opacity: 0.4,
                                        boxShadow: "none",
                                        width: "calc(100% - 4px)",
                                        height: "calc(100% - 4px)",
                                        backgroundImage: `linear-gradient(180deg, ${
                                            Palette().grey[500]
                                        } 0%, transparent 100%)`,
                                        position: "absolute",
                                        content: "''",
                                    },
                                },
                                "& .MuiSlider-mark": {
                                    height: "4px",
                                    width: "1px",
                                    backgroundColor: "grey.500",
                                    "&.MuiSlider-markActive": {
                                        backgroundColor: "grey.0",
                                    },
                                    '&[data-index="0"]': {
                                        width: "0px",
                                    },
                                    '&[data-index="20"]': {
                                        width: "0px",
                                    },
                                },
                                "& .MuiSlider-rail": {
                                    color: "grey.500",
                                },
                                "& .MuiSlider-markLabel": {
                                    color: "text.disabled",
                                },
                            }}
                        />
                    </Stack>
                    <Stack gap={"12px"}>
                        <Typography variant="subtitle2">Rating</Typography>
                        <Stack gap={"16px"}>
                            {[5, 4, 3, 2, 1].map((ratingItem) => (
                                <ButtonBase
                                    onClick={() =>
                                        setFilter({
                                            ...filter,
                                            rating: ratingItem,
                                            link: filter.link.concat(
                                                `&rating=${ratingItem}`
                                            ),
                                        })
                                    }
                                    key={ratingItem}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "start",
                                        gap: "8px",
                                        padding: "4px 8px",
                                        borderRadius: "8px",
                                        "&:hover": {
                                            backgroundColor: "grey.200",
                                        },
                                        backgroundColor:
                                            ratingItem == filter.rating &&
                                            "grey.300",
                                    }}
                                >
                                    <Rating readOnly value={ratingItem} />
                                    <Typography variant="body2">
                                        & Up
                                    </Typography>
                                </ButtonBase>
                            ))}
                        </Stack>
                    </Stack>
                    <Button
                        variant="contained"
                        sx={{
                            position: "sticky",
                            bottom: "20px",
                            color: "white",
                        }}
                        onClick={() => router.visit(filter.link)}
                    >
                        Submit
                    </Button>
                </Stack>
            </div>
        </Drawer>
    );
};

export default DrawerFilters;
