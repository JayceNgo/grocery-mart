import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [{ title: "Hiep Ngo Grocery" }, { name: "description", content: "Welcome to HiepNgo Grocery!" }];
}

export default function Home() {
    return (
        <div className="homepage">
            {/* Sliceshow */}
            <section className="home__container">
                <div className="slideshow">
                    <div className="slideshow__inner">
                        <div className="slideshow__item">
                            <a href="#!" className="slideshow__link">
                                <picture>
                                    <source media="(max-width : 767.98px)" srcSet="/img/slideshow/item-1-md.png" />
                                    <img src="/img/slideshow/item-1.png" alt="" className="slideshow__img" />
                                </picture>
                            </a>
                        </div>
                    </div>
                    <div className="slideshow__page">
                        <span className="slideshow__num">1</span>
                        <span className="slideshow__slider"></span>
                        <span className="slideshow__num">5</span>
                    </div>
                </div>
            </section>
            {/* Browser categories */}
            <section className="home__container">
                <h2 className="home__heading">
                    <div className="home__cate row row-cols-3 row-cols-md-1">
                        {/* category item 1 */}
                        <div className="col">
                            <article className="cate-item">
                                <img src="/img/category-item/item-1.png" alt="" className="cate-item__thumb" />
                                <section className="cate-item__info">
                                    <h3 className="cate-item__title">$24 - $150</h3>
                                    <p className="cate-item__desc">New sumatra mandeling coffe blend</p>
                                </section>
                            </article>
                        </div>

                        {/* category item 2 */}
                        <div className="col">
                            <article className="cate-item">
                                <img src="/img/category-item/item-2.png" alt="" className="cate-item__thumb" />
                                <section className="cate-item__info">
                                    <h3 className="cate-item__title">$37 - $160</h3>
                                    <p className="cate-item__desc">Espresso arabica and robusta beans</p>
                                </section>
                            </article>
                        </div>

                        {/* category item 3 */}
                        <div className="col">
                            <article className="cate-item">
                                <img src="/img/category-item/item-3.png" alt="" className="cate-item__thumb" />
                                <section className="cate-item__info">
                                    <h3 className="cate-item__title">$32 - $160</h3>
                                    <p className="cate-item__desc">Lavazza top class whole bean coffee blend</p>
                                </section>
                            </article>
                        </div>
                    </div>
                </h2>
            </section>

            {/* Browser Product */}
            <section className="home__container"></section>
        </div>
    );
}
