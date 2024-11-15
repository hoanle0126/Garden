import AdminHeader from "@/Components/Header/AdminHeader";
import AdminSidebar from "@/Components/Sidebar/AdminSidebar";
import { Avatar, Box } from "@mui/material";
import React from "react";

const AdminLayout = ({ children, title }) => {
    return (
        <div className="flex">
            <AdminSidebar />
            <div className="flex-1 w-[0vw]">
                <AdminHeader title={title} />
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;
