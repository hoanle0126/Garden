import ClientDefaultLayout from "@/Layouts/ClientDefaultLayout";
import ClientLayout from "@/Layouts/ClientLayout";
import ClientUserLayout from "@/Layouts/ClientUserLayout";
import React from "react";

const ClientCoinPage = () => {
    return (
        <ClientLayout>
            <ClientDefaultLayout>
                <ClientUserLayout>ClientCoinPage</ClientUserLayout>
            </ClientDefaultLayout>
        </ClientLayout>
    );
};

export default ClientCoinPage;
