import ClientDefaultLayout from "@/Layouts/ClientDefaultLayout";
import ClientLayout from "@/Layouts/ClientLayout";
import ClientUserLayout from "@/Layouts/ClientUserLayout";
import React from "react";

const ClientBankPage = () => {
    return (
        <ClientLayout>
            <ClientDefaultLayout>
                <ClientUserLayout>ClientBankPage</ClientUserLayout>
            </ClientDefaultLayout>
        </ClientLayout>
    );
};

export default ClientBankPage;
