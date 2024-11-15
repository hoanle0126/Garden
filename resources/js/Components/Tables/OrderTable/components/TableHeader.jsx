import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import { typography } from "resources/js/Theme/elements/typography";

const TableHeader = ({ admin }) => {
    return (
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
                {admin ? (
                    <>
                        <TableCell width={160}>Order</TableCell>
                        <TableCell>Customer</TableCell>
                    </>
                ) : (
                    <TableCell>Order</TableCell>
                )}
                <TableCell width={160}>Date</TableCell>
                <TableCell width={100}>Items</TableCell>
                <TableCell width={120}>Price</TableCell>
                <TableCell width={140}>Status</TableCell>
                <TableCell width={60}></TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;
