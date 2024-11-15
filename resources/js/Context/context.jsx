import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const orderItem = localStorage.getItem("order");
    const [order, setOrder] = React.useState(
        orderItem ? JSON.parse(orderItem) : { products: [] }
    );

    React.useEffect(() => {
        localStorage.setItem("order", JSON.stringify(order));
    }, [order]);

    const value = { order, setOrder };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export { ThemeContextProvider, ThemeContext };
