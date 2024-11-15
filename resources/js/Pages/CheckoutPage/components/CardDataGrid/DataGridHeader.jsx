import { formatCurrency } from "@/Function/formatCurrency";
import { Icon } from "@iconify/react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

function RenderProduct(props) {
    const { row, value, rows } = props;

    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                gap: "12px",
            }}
        >
            <img
                src={row.thumbnail}
                className="w-[70px] h-[70px] rounded-[12px]"
            />
            <Stack>
                <Typography variant="subtitle2">{row.name}</Typography>
            </Stack>
        </Box>
    );
}

function RenderQuantity(props) {
    const { row, rows, setRows } = props;
    const [carts, setCarts] = React.useState([
        {
            id: 8,
            name: "Cây Sen Đá Kim Cương",
            price: {
                id: 5,
                base_price: "5",
                sales: "0",
                product_id: 8,
            },
            thumbnail:
                "http://res.cloudinary.com/dbszvxbvv/image/upload/v1701593030/b0vpdpm6l59g2ivxs7xd.jpg",
            price_value: 5,
            category: {
                id: 3,
                name: "Stone Lotus",
                thumbnail:
                    "http://res.cloudinary.com/dbszvxbvv/image/upload/v1701427415/br1epujg1jpwabg9nu5a.png",
            },
            stock: {
                id: 1,
                product_id: 8,
                quantity: 12,
            },
            quantity: 1,
        },
        {
            id: 14,
            name: "Cây Chuối Thiên Điểu Trắng Cao",
            price: {
                id: 7,
                base_price: "12",
                sales: "0",
                product_id: 14,
            },
            thumbnail:
                "http://res.cloudinary.com/dbszvxbvv/image/upload/v1701575422/l9z5vnd3pngwurfmzpc9.jpg",
            price_value: 12,
            category: {
                id: 6,
                name: "Balcony Plant",
                thumbnail:
                    "http://res.cloudinary.com/dbszvxbvv/image/upload/v1701427904/ryfkhmf5pymc5ll8kcd5.png",
            },
            stock: {
                id: 3,
                product_id: 14,
                quantity: 98,
            },
            quantity: 1,
        },
        {
            id: 23,
            name: "Cây Cúc Mốc",
            price: {
                id: 11,
                base_price: "10",
                sales: "0",
                product_id: 23,
            },
            thumbnail:
                "http://res.cloudinary.com/dbszvxbvv/image/upload/v1701705569/sbi6hmsfxdagxcvc6izh.jpg",
            price_value: 10,
            category: {
                id: 1,
                name: "Feng Shui Bonsai",
                thumbnail:
                    "http://res.cloudinary.com/dbszvxbvv/image/upload/v1701427226/lrbfhairfg9acwqldarl.png",
            },
            stock: {
                id: 7,
                product_id: 23,
                quantity: 80,
            },
            quantity: 1,
        },
    ]);

    function addQuantity() {
        setRows((preCarts) => {
            const updateCarts = preCarts.map((cart) => {
                if (cart.id == row.id) {
                    return { ...cart, quantity: cart.quantity + 1 };
                }
                return cart;
            });

            return updateCarts;
        });
    }

    function decQuantity() {
        setRows((preCarts) => {
            const updateCarts = preCarts.map((cart) => {
                if (cart.id == row.id) {
                    return { ...cart, quantity: cart.quantity - 1 };
                }
                return cart;
            });

            return updateCarts;
        });
    }

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
                gap: "4px",
            }}
        >
            <Stack
                sx={{
                    border: "1px solid black",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                    padding: "4px",
                    borderColor: "divider",
                    borderRadius: "8px",
                }}
            >
                <IconButton
                    size="small"
                    sx={{ borderRadius: "8px" }}
                    onClick={() => decQuantity()}
                    disabled={row.quantity == 1}
                >
                    <Icon icon="eva:minus-fill" width={16} height={16} />
                </IconButton>
                <Typography>{row.quantity}</Typography>
                <IconButton
                    size="small"
                    sx={{ borderRadius: "8px" }}
                    onClick={() => addQuantity()}
                    disabled={row.quantity == row.stock.quantity}
                >
                    <Icon icon="eva:plus-fill" width={16} height={16} />
                </IconButton>
            </Stack>
            <Typography variant="captiontext" color={"text.secondary"}>
                available: {row.stock.quantity}
            </Typography>
        </Box>
    );
}

function RenderAction(props) {
    const { row } = props;

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                height: "100%",
            }}
        >
            <IconButton onClick={() => test()}>
                <Icon icon="solar:trash-bin-trash-bold" />
            </IconButton>
        </Box>
    );
}

const DataGridHeader = (rows, setRows) => {

    return [
        {
            field: "name",
            headerName: "Product",
            flex: 1,
            renderCell: (value, row) => <RenderProduct {...value} />,
        },
        {
            field: "price_value",
            headerName: "Price",
            width: 90,
            valueGetter: (value, row) => {
                return formatCurrency(value);
            },
        },
        {
            field: "quantity",
            headerName: "Quantity",
            width: 150,
            renderCell: (params) => (
                <RenderQuantity {...params} rows={rows} setRows={setRows} />
            ),
        },
        {
            field: "total",
            headerName: "Total Price",
            width: 130,
            headerAlign: "right",
            align: "right",
            valueGetter: (value, row) => {
                return formatCurrency(row.price_value * row.quantity);
            },
        },
        {
            field: "action",
            headerName: "",
            sortable: false, // Disable sorting
            width: 100,
            disableColumnMenu: true,
            renderCell: RenderAction,
        },
    ];
};

export default DataGridHeader;
