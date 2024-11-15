import AdminLayout from "@/Layouts/AdminLayout";
import { Icon } from "@iconify/react";
import { Link, router, usePage } from "@inertiajs/react";
import { Box, Breadcrumbs, Button, Stack, Typography } from "@mui/material";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import React, { useEffect, useRef } from "react";
import DataGridHeader from "./components/DataGridHeader";
import DataGridToolbar from "./components/DataGridToolbar";
import AdminDefaultLayout from "@/Layouts/AdminDefaultLayout";

const hiddenFields = ["id", "__check__", "name", "action"];

const getTogglableColumns = (columns) => {
    return columns
        .filter((column) => !hiddenFields.includes(column.field))
        .map((column) => column.field);
};

const ProductManagePage = () => {
    const { props } = usePage();
    const [filterButtonEl, setFilterButtonEl] = React.useState(null);
    const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
    const [paginationModel, setPaginationModel] = React.useState({
        pageSize: 5,
        page: 0,
    });

    useEffect(() => {
        console.log("Products: ", props.products);
        console.log("Row ", rowSelectionModel.length);
    }, [rowSelectionModel]);

    return (
        <AdminLayout title={"Products"}>
            <AdminDefaultLayout
                title={"Products"}
                action={
                    <Button
                        variant="contained"
                        color="inherit"
                        onClick={() => router.visit(route("products.create"))}
                        startIcon={<Icon icon="eva:plus-fill" />}
                    >
                        Create product
                    </Button>
                }
            >
                <DataGrid
                    checkboxSelection
                    disableRowSelectionOnClick
                    onRowSelectionModelChange={(it) => {
                        setRowSelectionModel(it);
                    }}
                    rowSelectionModel={rowSelectionModel}
                    rows={props.products}
                    initialState={{
                        sorting: {
                            sortModel: [{ field: "created_at", sort: "desc" }],
                        },
                    }}
                    rowHeight={100}
                    columns={DataGridHeader()}
                    sx={{
                        borderRadius: "12px",
                        boxShadow: "custom.card",
                        border: "none",
                        "& .MuiDataGrid-columnHeader": {
                            "& .MuiDataGrid-columnHeaderTitle": {
                                fontWeight: 600,
                                color: "text.secondary",
                            },
                        },
                    }}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    pageSizeOptions={[5, 10, 15]}
                    slots={{
                        toolbar: DataGridToolbar,
                        columnSortedAscendingIcon: () => (
                            <Icon icon="solar:alt-arrow-up-bold-duotone" />
                        ),
                        columnSortedDescendingIcon: () => (
                            <Icon icon="solar:alt-arrow-down-bold-duotone" />
                        ),
                    }}
                    slotProps={{
                        panel: {
                            anchorEl: filterButtonEl,
                            placement: "bottom-end",
                        },
                        toolbar: {
                            setFilterButtonEl,
                            rowSelectionModel,
                        },
                        basePopper: {
                            sx: {
                                "& .MuiDataGrid-paper": {
                                    divShadow: "custom.z1",
                                    paddingY: "8px",
                                    borderRadius: "8px",
                                    border: "1px solid",
                                    borderColor: "divider",
                                    "& .MuiDataGrid-filterForm": {
                                        gap: "8px",
                                        alignItems: "center",
                                    },
                                    "& .MuiDataGrid-columnsManagementHeader": {
                                        padding: "12px 16px",
                                        "& .MuiInputBase-root": {
                                            borderRadius: "8px",
                                            paddingY: "4px",
                                            borderColor: "error.main",
                                            "&:focus": {},
                                        },
                                    },
                                    "& .MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall":
                                        {
                                            "&:focus": {
                                                boxShadow: "none",
                                            },
                                        },
                                },
                            },
                        },
                        columnsManagement: {
                            getTogglableColumns,
                            autoFocusSearchField: true,
                        },
                        filterPanel: {
                            filterFormProps: {
                                columnInputProps: {
                                    variant: "outlined",
                                    size: "small",
                                    color: "custom",
                                },
                                operatorInputProps: {
                                    variant: "outlined",
                                    size: "small",
                                    color: "custom",
                                },
                                valueInputProps: {
                                    InputComponentProps: {
                                        variant: "outlined",
                                        size: "small",
                                        color: "custom",
                                    },
                                },
                            },
                        },
                    }}
                />
            </AdminDefaultLayout>
        </AdminLayout>
    );
};

export default ProductManagePage;
