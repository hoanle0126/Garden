import OrderTable from "@/Components/Tables/OrderTable";
import AdminDefaultLayout from "@/Layouts/AdminDefaultLayout";
import AdminLayout from "@/Layouts/AdminLayout";
import { usePage } from "@inertiajs/react";
import React from "react";

const listStatus = [
    {
        title: "Order Placed",
        color: "warning.darker",
        backgroundColor: "warning.lighter",
        backgroundColorActive: "warning.main",
    },
    {
        title: "Shipping",
        color: "error.darker",
        backgroundColor: "error.lighter",
        backgroundColorActive: "error.main",
    },
    {
        title: "To Received",
        color: "text.secondary",
        backgroundColor: "background.neutral",
        backgroundColorActive: "black",
    },
    {
        title: "Completed",
        color: "text.secondary",
        backgroundColor: "background.neutral",
        backgroundColorActive: "black",
    },
    {
        title: "Cancelled",
        color: "text.secondary",
        backgroundColor: "background.neutral",
        backgroundColorActive: "black",
    },
    {
        title: "Return Refund",
        color: "text.secondary",
        backgroundColor: "background.neutral",
        backgroundColorActive: "black",
    },
];

const OrderManagerPage = () => {
    const { props } = usePage();

    console.log(props.orders);

    return (
        <AdminLayout title="Orders">
            <AdminDefaultLayout title="Orders">
                <OrderTable
                    rows={props.orders}
                    status={listStatus[0]}
                    admin={true}
                    tabs={true}
                />
            </AdminDefaultLayout>
        </AdminLayout>
    );
};

export default OrderManagerPage;
