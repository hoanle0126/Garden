import { Icon } from "@iconify/react";
import { router, usePage } from "@inertiajs/react";
import {
    Autocomplete,
    autocompleteClasses,
    Box,
    InputAdornment,
    MenuItem,
    MenuList,
    OutlinedInput,
    Popover,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";

const SearchField = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { props } = usePage();
    const products = props.productsField;
    const [searchValue, setSearchValue] = React.useState("");

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={products}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option, { selected }) => {
                const { key, ...optionProps } = props;
                return (
                    <Stack
                        direction="row"
                        key={key}
                        {...optionProps}
                        sx={{
                            [`&.${autocompleteClasses.option}`]: {
                                padding: "8px",
                                borderRadius: "12px",
                                marginX: "8px",
                                gap: "8px",
                                "&:not(:last-child)": {
                                    marginBottom: "8px",
                                },
                            },
                        }}
                        onClick={() =>
                            router.visit(route("shops.show", option.id))
                        }
                    >
                        <img
                            src={option.thumbnail}
                            alt=""
                            className="w-[44px] h-[44px] rounded-[8px]"
                        />
                        <Typography variant="subtitle2">
                            {option.name}
                        </Typography>
                    </Stack>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder="Search by name..."
                    sx={{
                        borderRadius: 2,
                        width: 280,
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "grey.300",
                        },
                    }}
                    InputProps={{
                        ...params.InputProps,
                        type: "search",
                        startAdornment: (
                            <InputAdornment
                                position="start"
                                sx={{
                                    color: "grey.500",
                                    width: 24,
                                    height: 24,
                                }}
                            >
                                <Icon
                                    icon="eva:search-fill"
                                    width={"100%"}
                                    height={"100%"}
                                />
                            </InputAdornment>
                        ),
                    }}
                    color="colorDefault"
                />
            )}
        />
    );
};

export default SearchField;
