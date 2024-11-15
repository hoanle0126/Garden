import ClientDefaultLayout from "@/Layouts/ClientDefaultLayout";
import ClientLayout from "@/Layouts/ClientLayout";
import ClientUserLayout from "@/Layouts/ClientUserLayout";
import React from "react";

const ClientNotificationsPage = () => {
    return (
        <ClientLayout>
            <ClientDefaultLayout>
                <ClientUserLayout>ClientNotificationsPage</ClientUserLayout>
            </ClientDefaultLayout>
        </ClientLayout>
    );
};

export default ClientNotificationsPage;
