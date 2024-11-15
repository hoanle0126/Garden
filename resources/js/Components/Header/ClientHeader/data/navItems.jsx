import { usePage } from "@inertiajs/react";

const NavItems = () => {
    const { url } = usePage();

    return [
        {
            name: "Home",
            to: "/",
            active: "/" == url,
        },
        {
            name: "Shops",
            to: "/shops",
            active: url.startsWith("/shops"),
        },
        {
            name: "Posts",
            to: "/posts",
            active: "/posts" == url,
        },
        {
            name: "Contact",
            to: "/contact",
            active: "/contact" == url,
        },
    ];
};

export default NavItems;
