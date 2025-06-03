import type { Route } from "./+types/home";
import React from "react";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "HiepGrocery" },
        {
            name: "description",
            content:
                "Welcome to HiepNgo Grocery! Đây là một sản phẩm dự án cá nhân về một trang web bán hàng. Với sự phong phú về mặt thẩm mĩ. Chúng tôi cung cấp các sản phẩm chất lượng cao với giá cả hợp lý. Hãy cùng khám phá và mua sắm ngay hôm nay!",
        },
    ];
}

export default function Home() {
    return (
        <main className="container home">
            <div className="homepage">
                {/* <!-- Slideshow --> */}
                <div className="home__container">
                    <div className="slideshow">
                        <div className="slideshow__inner">
                            <div className="slideshow__item">
                                <a href="#!" className="slideshow__link">
                                    <picture>
                                        <source media="(max-width: 767.98px)" srcSet="/img/slideshow/item-1-md.png" />
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
                </div>

                {/* <!-- Browse Categories --> */}
                <section className="home__container">
                    <div className="home__row">
                        <h2 className="home__heading">Browse Categories</h2>
                    </div>
                    <div className="home__cate row row-cols-3 row-cols-md-1">
                        {/* <!-- Category item 1 --> */}
                        <div className="col">
                            <a href="#!">
                                <article className="cate-item">
                                    <img src="/img/category-item/item-1.png" alt="" className="cate-item__thumb" />
                                    <div className="cate-item__info">
                                        <h3 className="cate-item__title">$24 - $150</h3>
                                        <p className="cate-item__desc">New sumatra mandeling coffe blend</p>
                                    </div>
                                </article>
                            </a>
                        </div>

                        {/* <!-- Category item 2 --> */}
                        <div className="col">
                            <a href="#!">
                                <article className="cate-item">
                                    <img src="/img/category-item/item-2.png" alt="" className="cate-item__thumb" />
                                    <div className="cate-item__info">
                                        <h3 className="cate-item__title">$37 - $160</h3>
                                        <p className="cate-item__desc">Espresso arabica and robusta beans</p>
                                    </div>
                                </article>
                            </a>
                        </div>

                        {/* <!-- Category item 3 --> */}
                        <div className="col">
                            <a href="#!">
                                <article className="cate-item">
                                    <img src="/img/category-item/item-3.png" alt="" className="cate-item__thumb" />
                                    <div className="cate-item__info">
                                        <h3 className="cate-item__title">$32 - $160</h3>
                                        <p className="cate-item__desc">Lavazza top className whole bean coffee blend</p>
                                    </div>
                                </article>
                            </a>
                        </div>
                    </div>
                </section>

                {/* <!-- Browse Products --> */}
                <section className="home__container">
                    <div className="home__row">
                        <h2 className="home__heading">Total LavAzza 1320</h2>
                        <div className="filter-wrap">
                            <button className="filter-btn js-toggle" toggle-target="#home-filter">
                                Filter
                                <img src="/icons/filter.svg" alt="" className="filter-btn__icon icon" />
                            </button>

                            <div id="home-filter" className="filter hide">
                                <img src="/icons/arrow-up.png" alt="" className="filter__arrow" />
                                <h3 className="filter__heading">Filter</h3>
                                <form action="" className="filter__form">
                                    <div className="filter__row filter__content">
                                        {/* <!-- Filter column 1 --> */}
                                        <div className="filter__col">
                                            <label htmlFor="" className="filter__form-label">
                                                Price
                                            </label>
                                            <div className="filter__form-group">
                                                <div
                                                    className="filter__form-slider"
                                                    style={
                                                        {
                                                            "--min-value": "10%",
                                                            "--max-value": "60%",
                                                        } as React.CSSProperties
                                                    }
                                                ></div>
                                            </div>
                                            <div className="filter__form-group filter__form-group--inline">
                                                <div>
                                                    <label
                                                        htmlFor=""
                                                        className="filter__form-label filter__form-label--small"
                                                    >
                                                        Minimum
                                                    </label>
                                                    <div className="filter__form-text-input filter__form-text-input--small">
                                                        <input
                                                            type="text"
                                                            name=""
                                                            id=""
                                                            className="filter__form-input"
                                                            value="$30.00"
                                                            placeholder="Minimum price"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor=""
                                                        className="filter__form-label filter__form-label--small"
                                                    >
                                                        Maximum
                                                    </label>
                                                    <div className="filter__form-text-input filter__form-text-input--small">
                                                        <input
                                                            type="text"
                                                            name=""
                                                            id=""
                                                            className="filter__form-input"
                                                            value="$100.00"
                                                            placeholder="Maximum price"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="filter__separate"></div>

                                        {/* <!-- Filter column 2 --> */}
                                        <div className="filter__col">
                                            <label htmlFor="" className="filter__form-label">
                                                Size/Weight
                                            </label>
                                            <div className="filter__form-group">
                                                <div className="filter__form-select-wrap">
                                                    <div
                                                        className="filter__form-select"
                                                        style={{ "--width": "158px" } as React.CSSProperties}
                                                    >
                                                        500g
                                                        <img
                                                            src="/icons/select-arrow.svg"
                                                            alt=""
                                                            className="filter__form-select-arrow icon"
                                                        />
                                                    </div>
                                                    <div className="filter__form-select">
                                                        Gram
                                                        <img
                                                            src="/icons/select-arrow.svg"
                                                            alt=""
                                                            className="filter__form-select-arrow icon"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="filter__form-group">
                                                <div className="filter__form-tags">
                                                    <button className="filter__form-tag">Small</button>
                                                    <button className="filter__form-tag">Medium</button>
                                                    <button className="filter__form-tag">Large</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="filter__separate"></div>

                                        {/* <!-- Filter column 3 --> */}
                                        <div className="filter__col">
                                            <label htmlFor="" className="filter__form-label">
                                                Brand
                                            </label>
                                            <div className="filter__form-group">
                                                <div className="filter__form-text-input">
                                                    <input
                                                        type="text"
                                                        name=""
                                                        id=""
                                                        placeholder="Search brand name"
                                                        className="filter__form-input"
                                                    />
                                                    <img
                                                        src="/icons/search.svg"
                                                        alt=""
                                                        className="filter__form-input-icon icon"
                                                    />
                                                </div>
                                            </div>
                                            <div className="filter__form-group">
                                                <div className="filter__form-tags">
                                                    <button className="filter__form-tag">Lavazza</button>
                                                    <button className="filter__form-tag">Nescafe</button>
                                                    <button className="filter__form-tag">Starbucks</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="filter__row filter__footer">
                                        <button
                                            className="btn btn--text filter__cancel js-toggle"
                                            toggle-target="#home-filter"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="btn btn--primary filter__submit js-toggle"
                                            toggle-target="#home-filter"
                                        >
                                            Show Result
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 g-3">
                        {/* <!-- Product card 1 --> */}
                        <div className="col">
                            <article className="product-card">
                                <div className="product-card__img-wrap">
                                    <a href="#!">
                                        <img src="/img/product/item-1.png" alt="" className="product-card__thumb" />
                                    </a>
                                    <button className="like-btn product-card__like-btn">
                                        <img src="/icons/heart.svg" alt="" className="like-btn__icon icon" />
                                        <img src="/icons/heart-red.svg" alt="" className="like-btn__icon--liked" />
                                    </button>
                                </div>
                                <h3 className="product-card__title">
                                    <a href="#!">Coffee Beans - Espresso Arabica and Robusta Beans</a>
                                </h3>
                                <p className="product-card__brand">Lavazza</p>
                                <div className="product-card__row">
                                    <span className="product-card__price">$47.00</span>
                                    <img src="/icons/star.svg" alt="" className="product-card__star" />
                                    <span className="product-card__score">4.3</span>
                                </div>
                            </article>
                        </div>

                        {/* <!-- Product card 2 --> */}
                        <div className="col">
                            <article className="product-card">
                                <div className="product-card__img-wrap">
                                    <a href="#!">
                                        <img src="/img/product/item-2.png" alt="" className="product-card__thumb" />
                                    </a>
                                    <button className="like-btn product-card__like-btn">
                                        <img src="/icons/heart.svg" alt="" className="like-btn__icon icon" />
                                        <img src="/icons/heart-red.svg" alt="" className="like-btn__icon--liked" />
                                    </button>
                                </div>
                                <h3 className="product-card__title">
                                    <a href="#!">Lavazza Coffee Blends - Try the Italian Espresso</a>
                                </h3>
                                <p className="product-card__brand">Lavazza</p>
                                <div className="product-card__row">
                                    <span className="product-card__price">$53.00</span>
                                    <img src="/icons/star.svg" alt="" className="product-card__star" />
                                    <span className="product-card__score">3.4</span>
                                </div>
                            </article>
                        </div>

                        {/* <!-- Product card 3 --> */}
                        <div className="col">
                            <article className="product-card">
                                <div className="product-card__img-wrap">
                                    <a href="#!">
                                        <img src="/img/product/item-3.png" alt="" className="product-card__thumb" />
                                    </a>
                                    <button className="like-btn like-btn--liked product-card__like-btn">
                                        <img src="/icons/heart.svg" alt="" className="like-btn__icon icon" />
                                        <img src="/icons/heart-red.svg" alt="" className="like-btn__icon--liked" />
                                    </button>
                                </div>
                                <h3 className="product-card__title">
                                    <a href="#!">Lavazza - Caffè Espresso Black Tin - Ground coffee</a>
                                </h3>
                                <p className="product-card__brand">Welikecoffee</p>
                                <div className="product-card__row">
                                    <span className="product-card__price">$99.99</span>
                                    <img src="/icons/star.svg" alt="" className="product-card__star" />
                                    <span className="product-card__score">5.0</span>
                                </div>
                            </article>
                        </div>

                        {/* <!-- Product card 4 --> */}
                        <div className="col">
                            <article className="product-card">
                                <div className="product-card__img-wrap">
                                    <a href="#!">
                                        <img src="/img/product/item-4.png" alt="" className="product-card__thumb" />
                                    </a>
                                    <button className="like-btn product-card__like-btn">
                                        <img src="/icons/heart.svg" alt="" className="like-btn__icon icon" />
                                        <img src="/icons/heart-red.svg" alt="" className="like-btn__icon--liked" />
                                    </button>
                                </div>
                                <h3 className="product-card__title">
                                    <a href="#!">Qualità Oro Mountain Grown - Espresso Coffee Beans</a>
                                </h3>
                                <p className="product-card__brand">Lavazza</p>
                                <div className="product-card__row">
                                    <span className="product-card__price">$38.65</span>
                                    <img src="/icons/star.svg" alt="" className="product-card__star" />
                                    <span className="product-card__score">4.4</span>
                                </div>
                            </article>
                        </div>

                        {/* <!-- Product card 5 --> */}
                        <div className="col">
                            <article className="product-card">
                                <div className="product-card__img-wrap">
                                    <a href="#!">
                                        <img src="/img/product/item-5.png" alt="" className="product-card__thumb" />
                                    </a>
                                    <button className="like-btn product-card__like-btn">
                                        <img src="/icons/heart.svg" alt="" className="like-btn__icon icon" />
                                        <img src="/icons/heart-red.svg" alt="" className="like-btn__icon--liked" />
                                    </button>
                                </div>
                                <h3 className="product-card__title">
                                    <a href="#!">EarlyBird Want to Sleep - Espresso Coffee Beans</a>
                                </h3>
                                <p className="product-card__brand">FilterKaffee</p>
                                <div className="product-card__row">
                                    <span className="product-card__price">$48.65</span>
                                    <img src="/icons/star.svg" alt="" className="product-card__star" />
                                    <span className="product-card__score">3.2</span>
                                </div>
                            </article>
                        </div>

                        {/* <!-- Product card 6 --> */}
                        <div className="col">
                            <article className="product-card">
                                <div className="product-card__img-wrap">
                                    <a href="#!">
                                        <img src="/img/product/item-6.png" alt="" className="product-card__thumb" />
                                    </a>
                                    <button className="like-btn product-card__like-btn">
                                        <img src="/icons/heart.svg" alt="" className="like-btn__icon icon" />
                                        <img src="/icons/heart-red.svg" alt="" className="like-btn__icon--liked" />
                                    </button>
                                </div>
                                <h3 className="product-card__title">
                                    <a href="#!">Partners coffee - Roasters Coffee New York</a>
                                </h3>
                                <p className="product-card__brand">Brooklyn</p>
                                <div className="product-card__row">
                                    <span className="product-card__price">$21.55</span>
                                    <img src="/icons/star.svg" alt="" className="product-card__star" />
                                    <span className="product-card__score">4.8</span>
                                </div>
                            </article>
                        </div>

                        {/* <!-- Product card 7 --> */}
                        <div className="col">
                            <article className="product-card">
                                <div className="product-card__img-wrap">
                                    <a href="#!">
                                        <img src="/img/product/item-7.png" alt="" className="product-card__thumb" />
                                    </a>
                                    <button className="like-btn product-card__like-btn">
                                        <img src="/icons/heart.svg" alt="" className="like-btn__icon icon" />
                                        <img src="/icons/heart-red.svg" alt="" className="like-btn__icon--liked" />
                                    </button>
                                </div>
                                <h3 className="product-card__title">
                                    <a href="#!">BattleCreek Coffe - Decaf coffee beans</a>
                                </h3>
                                <p className="product-card__brand">Columbia</p>
                                <div className="product-card__row">
                                    <span className="product-card__price">$19.25</span>
                                    <img src="/icons/star.svg" alt="" className="product-card__star" />
                                    <span className="product-card__score">2.7</span>
                                </div>
                            </article>
                        </div>

                        {/* <!-- Product card 8 --> */}
                        <div className="col">
                            <article className="product-card">
                                <div className="product-card__img-wrap">
                                    <a href="#!">
                                        <img src="/img/product/item-8.png" alt="" className="product-card__thumb" />
                                    </a>
                                    <button className="like-btn product-card__like-btn">
                                        <img src="/icons/heart.svg" alt="" className="like-btn__icon icon" />
                                        <img src="/icons/heart-red.svg" alt="" className="like-btn__icon--liked" />
                                    </button>
                                </div>
                                <h3 className="product-card__title">
                                    <a href="#!">Buna Café rico - Los Pajaritos coffee</a>
                                </h3>
                                <p className="product-card__brand">Los Pajaritos</p>
                                <div className="product-card__row">
                                    <span className="product-card__price">$38.65</span>
                                    <img src="/icons/star.svg" alt="" className="product-card__star" />
                                    <span className="product-card__score">4.4</span>
                                </div>
                            </article>
                        </div>

                        {/* <!-- Product card 9 --> */}
                        <div className="col">
                            <article className="product-card">
                                <div className="product-card__img-wrap">
                                    <a href="#!">
                                        <img src="/img/product/item-9.png" alt="" className="product-card__thumb" />
                                    </a>
                                    <button className="like-btn product-card__like-btn">
                                        <img src="/icons/heart.svg" alt="" className="like-btn__icon icon" />
                                        <img src="/icons/heart-red.svg" alt="" className="like-btn__icon--liked" />
                                    </button>
                                </div>
                                <h3 className="product-card__title">
                                    <a href="#!">Fiddle Heads - Costa rica Coffee Beans</a>
                                </h3>
                                <p className="product-card__brand">Costa Rica</p>
                                <div className="product-card__row">
                                    <span className="product-card__price">$68.65</span>
                                    <img src="/icons/star.svg" alt="" className="product-card__star" />
                                    <span className="product-card__score">3.9</span>
                                </div>
                            </article>
                        </div>

                        {/* <!-- Product card 10 --> */}
                        <div className="col">
                            <article className="product-card">
                                <div className="product-card__img-wrap">
                                    <a href="#!">
                                        <img src="/img/product/item-10.png" alt="" className="product-card__thumb" />
                                    </a>
                                    <button className="like-btn product-card__like-btn">
                                        <img src="/icons/heart.svg" alt="" className="like-btn__icon icon" />
                                        <img src="/icons/heart-red.svg" alt="" className="like-btn__icon--liked" />
                                    </button>
                                </div>
                                <h3 className="product-card__title">
                                    <a href="#!">Never settle for good enough - Roasted Coffee Beans</a>
                                </h3>
                                <p className="product-card__brand">Small-Batch</p>
                                <div className="product-card__row">
                                    <span className="product-card__price">$36.25</span>
                                    <img src="/icons/star.svg" alt="" className="product-card__star" />
                                    <span className="product-card__score">4.2</span>
                                </div>
                            </article>
                        </div>

                        {/* <!-- Product card 11 --> */}
                        <div className="col">
                            <article className="product-card">
                                <div className="product-card__img-wrap">
                                    <a href="#!">
                                        <img src="/img/product/item-11.png" alt="" className="product-card__thumb" />
                                    </a>
                                    <button className="like-btn product-card__like-btn">
                                        <img src="/icons/heart.svg" alt="" className="like-btn__icon icon" />
                                        <img src="/icons/heart-red.svg" alt="" className="like-btn__icon--liked" />
                                    </button>
                                </div>
                                <h3 className="product-card__title">
                                    <a href="#!">211 Bird Free - Medium Roast Coffee Beans</a>
                                </h3>
                                <p className="product-card__brand">Guatemala</p>
                                <div className="product-card__row">
                                    <span className="product-card__price">$18.65</span>
                                    <img src="/icons/star.svg" alt="" className="product-card__star" />
                                    <span className="product-card__score">4.0</span>
                                </div>
                            </article>
                        </div>

                        {/* <!-- Product card 12 --> */}
                        <div className="col">
                            <article className="product-card">
                                <div className="product-card__img-wrap">
                                    <a href="#!">
                                        <img src="/img/product/item-12.png" alt="" className="product-card__thumb" />
                                    </a>
                                    <button className="like-btn product-card__like-btn">
                                        <img src="/icons/heart.svg" alt="" className="like-btn__icon icon" />
                                        <img src="/icons/heart-red.svg" alt="" className="like-btn__icon--liked" />
                                    </button>
                                </div>
                                <h3 className="product-card__title">
                                    <a href="#!">Olympic Coffee - Espresso Coffee Beans</a>
                                </h3>
                                <p className="product-card__brand">San Sebastian</p>
                                <div className="product-card__row">
                                    <span className="product-card__price">$28.5</span>
                                    <img src="/icons/star.svg" alt="" className="product-card__star" />
                                    <span className="product-card__score">4.9</span>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
