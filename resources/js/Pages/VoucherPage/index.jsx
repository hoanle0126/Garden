import ClientDefaultLayout from "@/Layouts/ClientDefaultLayout";
import ClientLayout from "@/Layouts/ClientLayout";
import ClientUserLayout from "@/Layouts/ClientUserLayout";
import React from "react";

const VoucherPage = () => {
    return (
        <ClientLayout>
            <ClientDefaultLayout>
                <ClientUserLayout>VoucherPage</ClientUserLayout>
            </ClientDefaultLayout>
        </ClientLayout>
    );
};

export default VoucherPage;
