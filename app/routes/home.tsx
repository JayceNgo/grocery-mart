import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Hiep Ngo Grocery" },
        { name: "description", content: "Welcome to HiepNgo Grocery!" },
    ];
}

export default function Home() {
    return <div>Home</div>;
}
