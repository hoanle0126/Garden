import { router, usePage } from "@inertiajs/react";
import { MenuItem, MenuList, Popover } from "@mui/material";
import React from "react";
import listSortData from "./listSortData";
import getParams from "@/Function/getParams";

const SortItemPopover = ({ anchorElSort, handleClose }) => {
    const { url } = usePage();
    const params = getParams(url);
    const openSortPopover = Boolean(anchorElSort);
    const idSortPopover = openSortPopover ? "simple-popover" : undefined;

    return (
        <Popover
            id={idSortPopover}
            open={openSortPopover}
            anchorEl={anchorElSort}
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
            <MenuList>
                {listSortData().map((menuItem) => (
                    <MenuItem
                        key={menuItem}
                        onClick={() => {
                            router.visit(
                                url.concat(
                                    `?&sort=${menuItem.value}&order=${menuItem.order}`
                                )
                            );
                            setAnchorElSort(null);
                        }}
                        sx={{
                            backgroundColor:
                                params.get("sort") === menuItem.value &&
                                params.get("order") === menuItem.order &&
                                "grey.200",
                        }}
                    >
                        {menuItem.content}
                    </MenuItem>
                ))}
            </MenuList>
        </Popover>
    );
};

export default SortItemPopover;
