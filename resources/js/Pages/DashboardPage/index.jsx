import RadialChart from "@/Components/Charts/RadialChart";
import RadialChartLegend from "@/Components/Charts/RadialChart/components/legend";
import RadialChartState from "@/Components/Charts/RadialChart/elements/state";
import AdminLayout from "@/Layouts/AdminLayout";
import { Palette } from "@/Theme/elements/palette";
import { Icon } from "@iconify/react";
import { Box, Card, Paper, Stack, Typography, Grid2 } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import SaleByGenderCard from "./SaleByGenderCard";
import ProductSoldCard from "./ProductSoldCard";
import YearlySalesCard from "./YearlySalesCard";
import AdminDefaultLayout from "@/Layouts/AdminDefaultLayout";
import TotalBalanceCard from "./TotalBalanceCard";
import SalesProfitCard from "./SalesProfitCard";
import { usePage } from "@inertiajs/react";

const DashboardPage = () => {
    const { props } = usePage();

    React.useEffect(() => {
        console.log("Props ", props.role);
    }, []);

    return (
        <AdminLayout title={"Dashboard"}>
            <AdminDefaultLayout title={"Dashboard"}>
                <Grid2 container spacing={3}>
                    {[
                        <ProductSoldCard />,
                        <TotalBalanceCard />,
                        <SalesProfitCard />,
                    ].map((it) => (
                        <Grid2 size={4} key={it}>
                            {it}
                        </Grid2>
                    ))}
                    <Grid2 size={4}>
                        <SaleByGenderCard />
                    </Grid2>
                    <Grid2 size={8}>
                        <YearlySalesCard />
                    </Grid2>
                </Grid2>
            </AdminDefaultLayout>
        </AdminLayout>
    );
};

export default DashboardPage;
