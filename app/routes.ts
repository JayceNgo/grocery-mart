import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("sign-in", "routes/sign-in.tsx"),
    route("sign-up", "routes/sign-up.tsx"),
    route("home-logined", "routes/home-logined.tsx"),
    route("reset-password", "routes/reset-password.tsx"),
    route("reset-password-emailed", "routes/reset-password-emailed.tsx"),
    route("new-password", "routes/new-password.tsx"),
] satisfies RouteConfig;
