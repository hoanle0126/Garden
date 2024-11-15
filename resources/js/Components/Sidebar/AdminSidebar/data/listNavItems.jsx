import { usePage } from "@inertiajs/react";
import React from "react";

const ListNavItems = () => {
    const { url } = usePage();

    return [
        {
            name: "Overview",
            items: [
                {
                    name: "Dashboard",
                    icon: "solar:chart-bold-duotone",
                    to: "/admin",
                    active: "/admin" == url,
                },
            ],
        },
        {
            name: "Management",
            items: [
                {
                    name: "Clients",
                    icon: "solar:users-group-rounded-bold-duotone",
                    to: "/admin/user",
                    active: "/admin/user" == url,
                },
                {
                    name: "Products",
                    icon: "solar:bag-2-bold-duotone",
                    to: "/admin/products",
                    active: url.includes("/admin/products"),
                },
                {
                    name: "Orders",
                    icon: "solar:cart-large-4-bold-duotone",
                    to: "/admin/orders",
                    active: url.includes("/admin/orders"),
                },
            ],
        },
    ];
};

export default ListNavItems;
