import { ButtonBase, Typography } from "@mui/material";
import React from "react";
import SortItemPopover from "./SortItemPopover";
import listSortData from "./listSortData";
import getParams from "@/Function/getParams";
import { usePage } from "@inertiajs/react";
import { Icon } from "@iconify/react";

const SortItems = () => {
    const [anchorElSort, setAnchorElSort] = React.useState(null);
    const { url } = usePage();
    const params = getParams(url);
    const [filter, setFilter] = React.useState({
        sort:
            (listSortData().filter(
                (it) =>
                    it.value == params.get("sort") &&
                    it.order == params.get("order")
            ).length > 0 &&
                listSortData().filter(
                    (it) =>
                        it.value == params.get("sort") &&
                        it.order == params.get("order")
                )[0].content) ||
            "Newest",
    });

    const handleClick = (event) => {
        setAnchorElSort(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElSort(null);
    };

    return (
        <>
            <ButtonBase
                className="flex items-center gap-2"
                sx={{ padding: 1, borderRadius: 1 }}
                onClick={handleClick}
            >
                <Typography
                    variant="body2"
                    sx={{ strong: { fontWeight: 600 } }}
                >
                    Sort by: <strong>{filter.sort}</strong>
                </Typography>
                <Icon icon="eva:chevron-down-outline" width="24" height="24" />
            </ButtonBase>
            <SortItemPopover
                anchorElSort={anchorElSort}
                handleClose={handleClose}
            />
        </>
    );
};

export default SortItems;
