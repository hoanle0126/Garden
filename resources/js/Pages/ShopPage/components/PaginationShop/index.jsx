import getParams from "@/Function/getParams";
import { router, usePage } from "@inertiajs/react";
import { Pagination } from "@mui/material";
import React from "react";

const PaginationShop = () => {
    const { props, url } = usePage();
    const [page, setPage] = React.useState(props.products.meta);

    const handlePaginate = (event, value) => {
        router.visit(`/shops?page=${value}`);
    };

    return (
        <Pagination
            count={page.last_page}
            page={page.current_page}
            onChange={handlePaginate}
        />
    );
};

export default PaginationShop;
