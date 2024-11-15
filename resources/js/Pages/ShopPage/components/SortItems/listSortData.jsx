import React from "react";

const listSortData = () => {
    return [
        {
            content: "Neweast",
            value: "created_at",
            order: "desc",
        },
        {
            content: "Price: High-Low",
            value: "price_value",
            order: "desc",
        },
        {
            content: "Price: Low-High",
            value: "price_value",
            order: "asc",
        },
    ];
};

export default listSortData;
