import { DataGrid, GridRow } from "@mui/x-data-grid";
import React from "react";
import ListOrderDataGridToolbar from "./components/toolbar";
import {
    Box,
    Collapse,
    IconButton,
    List,
    ListItem,
    MenuItem,
    MenuList,
    Popover,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { formatDate } from "@/Function/formatDate";
import { formatCurrency } from "@/Function/formatCurrency";
import { Icon } from "@iconify/react";
import { typography } from "@/Theme/elements/typography";
import { router } from "@inertiajs/react";

const ListOrderDataGrid = ({ rows, status }) => {
    const [expand, setExpand] = React.useState("");
    const [selectedRowId, setSelectedRowId] = React.useState();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event, rowId) => {
        setAnchorEl(event.currentTarget);
        setSelectedRowId(rowId);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <>
            <TableContainer sx={{ height: "calc(100vh - 208px)" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead
                        sx={{
                            backgroundColor: "background.neutral",
                            "& .MuiTableCell-root": {
                                fontStyle: typography.subtitle2,
                            },
                        }}
                    >
                        <TableRow>
                            <TableCell width={60}></TableCell>
                            <TableCell>Order</TableCell>
                            <TableCell width={160}>Date</TableCell>
                            <TableCell width={100}>Items</TableCell>
                            <TableCell width={120}>Price</TableCell>
                            <TableCell width={140}>Status</TableCell>
                            <TableCell width={60}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <React.Fragment key={row}>
                                <TableRow
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                        height: 60,
                                    }}
                                >
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        align="center"
                                    >
                                        <IconButton
                                            onClick={() =>
                                                row.id === expand
                                                    ? setExpand("")
                                                    : setExpand(row.id)
                                            }
                                        >
                                            <Icon
                                                icon={`eva:arrow-ios-${
                                                    expand === row.id
                                                        ? "downward"
                                                        : "upward"
                                                }-fill`}
                                                width="24"
                                                height="24"
                                            />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        #{row.id}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {formatDate(row.created_at)}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        x{row.products.length}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {formatCurrency(row.total_price)}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Box
                                            sx={{
                                                backgroundColor:
                                                    status.backgroundColor,
                                                display: "inline-block",
                                                padding: "4px 12px",
                                                fontSize:
                                                    typography.captiontext,
                                                fontWeight: 700,
                                                color: status.color,
                                                borderRadius: "8px",
                                            }}
                                        >
                                            {row.current_status}
                                        </Box>
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        width={60}
                                        align="right"
                                    >
                                        <IconButton
                                            onClick={(event) =>
                                                handleClick(event, row.id)
                                            }
                                        >
                                            <Icon
                                                icon="eva:more-vertical-fill"
                                                width="24"
                                                height="24"
                                            />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                                {
                                    <TableRow>
                                        <TableCell
                                            colSpan={7}
                                            sx={{ padding: 0 }}
                                        >
                                            <Collapse in={expand === row.id}>
                                                <Box
                                                    sx={{
                                                        padding: "12px",
                                                        backgroundColor:
                                                            "background.neutral",
                                                    }}
                                                >
                                                    <Stack
                                                        sx={{
                                                            backgroundColor:
                                                                "background.paper",
                                                            borderRadius: "8px",
                                                            boxShadow:
                                                                "custom.card",
                                                            overflow: "hidden",
                                                        }}
                                                    >
                                                        {row.products.map(
                                                            (product) => (
                                                                <Stack
                                                                    key={
                                                                        product
                                                                    }
                                                                    direction="row"
                                                                    sx={{
                                                                        padding:
                                                                            "12px",
                                                                        borderBottom:
                                                                            "1px solid",
                                                                        borderColor:
                                                                            "divider",
                                                                        gap: "16px",
                                                                        alignItems:
                                                                            "center",
                                                                    }}
                                                                >
                                                                    <img
                                                                        src={
                                                                            product.thumbnail
                                                                        }
                                                                        className="w-[60px] h-[60px] rounded-[8px]"
                                                                    />
                                                                    <Stack
                                                                        justifyContent="center"
                                                                        flex={1}
                                                                    >
                                                                        <Typography variant="subtitle2">
                                                                            {
                                                                                product.name
                                                                            }
                                                                        </Typography>
                                                                        <Typography
                                                                            variant="captiontext"
                                                                            color="text.secondary"
                                                                        >
                                                                            {
                                                                                product.name
                                                                            }
                                                                        </Typography>
                                                                    </Stack>
                                                                    <Typography
                                                                        sx={{
                                                                            width: 80,
                                                                            textAlign:
                                                                                "right",
                                                                        }}
                                                                        variant="body2"
                                                                    >
                                                                        x
                                                                        {
                                                                            product
                                                                                .pivot
                                                                                .quantity
                                                                        }
                                                                    </Typography>
                                                                    <Typography
                                                                        sx={{
                                                                            width: 80,
                                                                            textAlign:
                                                                                "right",
                                                                        }}
                                                                        variant="body2"
                                                                    >
                                                                        {formatCurrency(
                                                                            product.price_value
                                                                        )}
                                                                    </Typography>
                                                                </Stack>
                                                            )
                                                        )}
                                                    </Stack>
                                                </Box>
                                            </Collapse>
                                        </TableCell>
                                    </TableRow>
                                }
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
                {rows.length === 0 && (
                    <Box
                        sx={{
                            width: "100%",
                            height: "calc(100% - 56px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        No rows
                    </Box>
                )}
            </TableContainer>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuList
                    sx={{
                        width: 120,
                    }}
                >
                    <MenuItem
                        onClick={() =>
                            router.get(route("orders.show", selectedRowId))
                        }
                    >
                        <Icon icon="solar:eye-outline" />
                        Detail
                    </MenuItem>
                    <MenuItem
                        onClick={() =>
                            router.delete(
                                route("orders.destroy", selectedRowId),
                                {
                                    onSuccess: handleClose,
                                }
                            )
                        }
                    >
                        <Icon icon="solar:trash-bin-trash-outline" />
                        Delete
                    </MenuItem>
                </MenuList>
            </Popover>
        </>
    );
};

export default ListOrderDataGrid;
