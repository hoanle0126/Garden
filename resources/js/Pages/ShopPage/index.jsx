import { Typography, Grid2 } from "@mui/material";
import React from "react";
import ClientLayout from "@/Layouts/ClientLayout";
import SortItems from "./components/SortItems";
import PaginationShop from "./components/PaginationShop";
import SearchField from "./components/SearchField";
import FilterItems from "./components/FilterItems";
import ProductCard from "./components/ProductCard";
import { usePage } from "@inertiajs/react";

const ShopPage = () => {
    const { props } = usePage();
    const [products, setProducts] = React.useState(props.products.data);

    React.useEffect(() => {
        console.log(props.products);
    }, []);

    return (
        <ClientLayout title={"Shop"}>
            <div className="px-[180px] flex flex-col gap-[90px] pb-[120px] pt-[80px]">
                <div className="py-[32px] flex flex-col gap-[40px]">
                    <Typography variant="h4">Shop</Typography>
                    <div className="w-full flex items-center">
                        {/* Search Field */}
                        <SearchField />
                        {/* End Search Field */}
                        <div className="flex-1 flex justify-end gap-3">
                            {/* Filters Drawer */}
                            <FilterItems />
                            {/* End Filters Drawer */}
                            {/* Sort Popover */}
                            <SortItems />
                            {/* End Sort Popover */}
                        </div>
                    </div>
                    <Grid2 container spacing={3} sx={{ paddingBottom: 3 }}>
                        {products.map((product) => (
                            <Grid2 size={3} key={product.id}>
                                <ProductCard product={product} />
                            </Grid2>
                        ))}
                    </Grid2>
                    <div className="w-full flex justify-center">
                        <PaginationShop />
                    </div>
                </div>
            </div>
        </ClientLayout>
    );
};

export default ShopPage;
