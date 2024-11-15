import { router } from "@inertiajs/react";
import React from "react";

const PaymentPage = () => {
    const handlePayment = () => {
        router.post("/zalopay/payment", { amount: 50000 });
    };

    return <button onClick={handlePayment}>Thanh Toán ZaloPay</button>;
};

export default PaymentPage;
