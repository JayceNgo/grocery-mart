import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [{ title: "Hiep Ngo Grocery" }, { name: "description", content: "Welcome to HiepNgo Grocery!" }];
}

export default function Home() {
    return (
        <div className="slideshow">
            <div className="slideshow__inner">
                <div className="slideshow__item">
                    <img src="/img/slideshow/item-1.png" alt="" className="slideshow__img" />
                </div>
                <div className="slideshow__item">
                    <img src="/img/slideshow/item-1.png" alt="" className="slideshow__img" />
                </div>
                <div className="slideshow__item">
                    <img src="/img/slideshow/item-1.png" alt="" className="slideshow__img" />
                </div>
            </div>
            <div className="slideshow__page">
                <span className="slideshow__num">1</span>
                <span className="slideshow__slider"></span>
                <span className="slideshow__num">5</span>
            </div>
        </div>
    );
}
