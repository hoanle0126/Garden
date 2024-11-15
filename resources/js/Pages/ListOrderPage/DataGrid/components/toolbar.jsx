import { Icon } from "@iconify/react";
import { InputAdornment, TextField } from "@mui/material";
import { GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";

const ListOrderDataGridToolbar = () => {
    const [selectedDate, setSelectedDate] = React.useState(null);

    return (
        <GridToolbarContainer
            sx={{
                padding: "12px 20px",
                "& .MuiDataGrid-toolbarQuickFilter": {
                    flex: 1,
                },
                "& .date__picker": {
                    width: 200,
                },
            }}
        >
            <DatePicker
                label="Start date"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        color="custom"
                        sx={{ width: "100%" }}
                    />
                )}
                className="date__picker"
            />
            <DatePicker
                label="End date"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        color="custom"
                        sx={{ width: "100%" }}
                    />
                )}
                className="date__picker"
            />
            <GridToolbarQuickFilter
                quickFilterParser={(searchInput) =>
                    searchInput
                        .split(",")
                        .map((value) => value.trim())
                        .filter((value) => value !== "")
                }
                variant="outlined"
                color="custom"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Icon
                                icon="eva:search-fill"
                                width={24}
                                height={24}
                            />
                        </InputAdornment>
                    ),
                }}
            />
        </GridToolbarContainer>
    );
};

export default ListOrderDataGridToolbar;
