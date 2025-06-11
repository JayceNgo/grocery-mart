import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("sign-in", "routes/sign-in.tsx"),
    route("sign-up", "routes/sign-up.tsx"),
    route("home-logined", "routes/home-logined.tsx"),
    route("reset-password", "routes/reset-password.tsx"),
    route("reset-password-emailed", "routes/reset-password-emailed.tsx"),
    route("new-password", "routes/new-password.tsx"),
    route("product-detail", "routes/product-detail.tsx"),
    route("checkout", "routes/checkout.tsx"),
    route("shipping", "routes/shipping.tsx"),
    route("payment", "routes/payment.tsx"),
    route("favourite", "routes/favourite.tsx"),
] satisfies RouteConfig;
