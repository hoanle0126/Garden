import { Icon } from "@iconify/react";
import { ButtonBase, Typography } from "@mui/material";
import React from "react";
import DrawerFilters from "./DrawerFilters";

const FilterItems = () => {
    const [openFilterDrawer, setOpenFilterDrawer] = React.useState(false);

    return (
        <>
            <ButtonBase
                className="flex items-center gap-2"
                sx={{ padding: 1, borderRadius: 1 }}
                onClick={() => setOpenFilterDrawer(true)}
            >
                <Typography variant="body2">Filters</Typography>
                <Icon icon="mingcute:filter-2-fill" />
            </ButtonBase>
            <DrawerFilters
                openFilterDrawer={openFilterDrawer}
                setOpenFilterDrawer={() => setOpenFilterDrawer(false)}
            />
        </>
    );
};

export default FilterItems;
