import ClientDefaultLayout from "@/Layouts/ClientDefaultLayout";
import ClientLayout from "@/Layouts/ClientLayout";
import ClientUserLayout from "@/Layouts/ClientUserLayout";
import { usePage } from "@inertiajs/react";
import React from "react";
import OrderTable from "@/Components/Tables/OrderTable";

const ListOrderPage = () => {
    const { props } = usePage();

    return (
        <ClientLayout title={"Orders"}>
            <ClientDefaultLayout>
                <ClientUserLayout>
                    <OrderTable rows={props.auth.user.orders} tabs={true} />
                </ClientUserLayout>
            </ClientDefaultLayout>
        </ClientLayout>
    );
};

export default ListOrderPage;
