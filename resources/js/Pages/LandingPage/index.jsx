import ClientLayout from "@/Layouts/ClientLayout";
import React from "react";
import WelcomeSection from "./sections/WelcomeSection";
import { usePage } from "@inertiajs/react";

const LandingPage = () => {
    const {props} = usePage()

    React.useEffect(()=>{
        console.log("Props ",props.auth.user&&"test")
    },[])

    return (
        <ClientLayout title={""}>
            <WelcomeSection />
            <WelcomeSection />
        </ClientLayout>
    );
};

export default LandingPage;
