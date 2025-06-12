import Header from "~/layouts/header-logined";
import Footer from "~/layouts/footer";
export default function ProductDetail() {
    return (
        <>
            <header className="header">
                <Header></Header>
            </header>
            <main className="product-page">
                <div className="container">
                    {/* <!-- Search bar --> */}
                    <div className="product-container">
                        <div className="search-bar d-none d-md-flex">
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Search for item"
                                className="search-bar__input"
                            />
                            <button className="search-bar__submit">
                                <img src="/icons/search.svg" alt="" className="search-bar__icon icon" />
                            </button>
                        </div>
                    </div>
                    {/* <!-- Breadcrumbs --> */}
                    <div className="product-container">
                        <ul className="breadcrumbs">
                            <li>
                                <a href="#!" className="breadcrumbs__link">
                                    Departments
                                    <img src="/icons/arrow-right.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="breadcrumbs__link">
                                    Coffee
                                    <img src="/icons/arrow-right.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="breadcrumbs__link">
                                    Coffee Beans
                                    <img src="/icons/arrow-right.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="breadcrumbs__link breadcrumbs__link--current">
                                    LavAzza
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Product info --> */}
                    <div className="product-container prod-info-content">
                        <div className="row">
                            <div className="col-5 col-xl-6 col-lg-12">
                                <div className="prod-preview">
                                    <div className="prod-preview__list">
                                        <div className="prod-preview__item">
                                            <img src="/img/product/item-1.png" alt="" className="prod-preview__img" />
                                        </div>
                                        <div className="prod-preview__item">
                                            <img src="/img/product/item-2.png" alt="" className="prod-preview__img" />
                                        </div>
                                        <div className="prod-preview__item">
                                            <img src="/img/product/item-3.png" alt="" className="prod-preview__img" />
                                        </div>
                                        <div className="prod-preview__item">
                                            <img src="/img/product/item-4.png" alt="" className="prod-preview__img" />
                                        </div>
                                    </div>
                                    <div className="prod-preview__thumbs">
                                        <img
                                            src="/img/product/item-1.png"
                                            alt=""
                                            className="prod-preview__thumb-img prod-preview__thumb-img--current"
                                        />
                                        <img src="/img/product/item-2.png" alt="" className="prod-preview__thumb-img" />
                                        <img src="/img/product/item-3.png" alt="" className="prod-preview__thumb-img" />
                                        <img src="/img/product/item-4.png" alt="" className="prod-preview__thumb-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-7 col-xl-6 col-lg-12">
                                <form action="" className="form">
                                    <section className="prod-info">
                                        <h1 className="prod-info__heading">
                                            Coffee Beans - Espresso Arabica and Robusta Beans
                                        </h1>
                                        <div className="row">
                                            <div className="col-5 col-xxl-6 col-xl-12">
                                                <div className="prod-prop">
                                                    <img src="/icons/star.svg" alt="" className="prod-prop__icon" />
                                                    <h4 className="prod-prop__title">(3.5) 1100 reviews</h4>
                                                </div>
                                                <label htmlFor="" className="form__label prod-info__label">
                                                    Size/Weight
                                                </label>
                                                <div className="filter__form-group">
                                                    <div className="form__select-wrap">
                                                        <div
                                                            className="form__select"
                                                            style={{ "--width": "146px" } as React.CSSProperties}
                                                        >
                                                            500g
                                                            <img
                                                                src="/icons/select-arrow.svg"
                                                                alt=""
                                                                className="form__select-arrow icon"
                                                            />
                                                        </div>
                                                        <div className="form__select">
                                                            Gram
                                                            <img
                                                                src="/icons/select-arrow.svg"
                                                                alt=""
                                                                className="form__select-arrow icon"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter__form-group">
                                                    <div className="form__tags">
                                                        <button className="form__tag prod-info__tag">Small</button>
                                                        <button className="form__tag prod-info__tag">Medium</button>
                                                        <button className="form__tag prod-info__tag">Large</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-7 col-xxl-6 col-xl-12">
                                                <div className="prod-props">
                                                    <div className="prod-prop">
                                                        <img
                                                            src="/icons/document.svg"
                                                            alt=""
                                                            className="prod-prop__icon icon"
                                                        />
                                                        <h4 className="prod-prop__title">Compare</h4>
                                                    </div>
                                                    <div className="prod-prop">
                                                        <img
                                                            src="/icons/buy.svg"
                                                            alt=""
                                                            className="prod-prop__icon icon"
                                                        />
                                                        <div>
                                                            <h4 className="prod-prop__title">Delivery</h4>
                                                            <p className="prod-prop__desc">From $6 for 1-3 days</p>
                                                        </div>
                                                    </div>
                                                    <div className="prod-prop">
                                                        <img
                                                            src="/icons/bag.svg"
                                                            alt=""
                                                            className="prod-prop__icon icon"
                                                        />
                                                        <div>
                                                            <h4 className="prod-prop__title">Pickup</h4>
                                                            <p className="prod-prop__desc">Out of 2 store, today</p>
                                                        </div>
                                                    </div>
                                                    <div className="prod-info__card">
                                                        <div className="prod-info__row">
                                                            <span className="prod-info__price">$500.00</span>
                                                            <span className="prod-info__tax">10%</span>
                                                        </div>
                                                        <p className="prod-info__total-price">$540.00</p>
                                                        <div className="prod-info__row">
                                                            <button className="btn btn--primary prod-info__add-to-cart">
                                                                Add to cart
                                                            </button>
                                                            <button className="like-btn prod-info__like-btn">
                                                                <img
                                                                    src="/icons/heart.svg"
                                                                    alt=""
                                                                    className="like-btn__icon icon"
                                                                />
                                                                <img
                                                                    src="/icons/heart-red.svg"
                                                                    alt=""
                                                                    className="like-btn__icon--liked"
                                                                />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Product content --> */}
                    <div className="product-container">
                        <div className="prod-tab js-tabs">
                            <ul className="prod-tab__list">
                                {/* We can add prod-tab__item--current to prod-tab__item to make it focus  */}
                                <li className="prod-tab__item prod-tab__item--current">Description</li>
                                <li className="prod-tab__item">Review (1100)</li>
                                <li className="prod-tab__item ">Similar</li>
                            </ul>
                            <div className="prod-tab__contents">
                                <div className="prod-tab__content prod-tab__content--current">
                                    <div className="row">
                                        <div className="col-8 col-xl-10 col-lg-12">
                                            <div className="text-content prod-tab__text-content">
                                                <h2>Coffee Beans - Espresso Arabica and Robusta Blend</h2>
                                                <p>
                                                    Discover the rich aroma of our <a href="#!">premium coffee beans</a>
                                                    , expertly crafted from a balanced blend of Arabica and Robusta.
                                                    Perfect for espresso lovers seeking a bold and smooth taste in every
                                                    cup.
                                                </p>
                                                <h3>Exceptional Flavor and Quality</h3>
                                                <p>
                                                    Our beans are sourced from the finest coffee-growing regions,
                                                    ensuring every batch meets the highest standards. The blend delivers
                                                    a full-bodied flavor with hints of chocolate and caramel, ideal for
                                                    both hot and iced espresso drinks.
                                                </p>
                                                <p>
                                                    <img src="/img/product/item-1.png" alt="Espresso Coffee Beans" />
                                                    <em>
                                                        Carefully roasted to bring out the natural oils and flavor notes
                                                        of each bean variety.
                                                    </em>
                                                </p>
                                                <blockquote>
                                                    <p>
                                                        Taste the perfect harmony of <em>Arabica's</em> smoothness and{" "}
                                                        <u>Robusta's</u> strength in our signature espresso blend. Ideal
                                                        for those who appreciate depth and complexity in every sip.
                                                    </p>
                                                </blockquote>
                                                <h3>Freshly Roasted for Maximum Enjoyment</h3>
                                                <p>
                                                    Each pack is freshly roasted and sealed to preserve its flavor and
                                                    aroma. Whether you're using a manual brewer or an espresso machine,
                                                    our beans adapt to your preferred brewing method.
                                                </p>
                                                <p>
                                                    Start your morning right or enjoy a mid-day boost with our expertly
                                                    blended espresso beans. Satisfaction guaranteed with every brew.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="prod-tab__content">
                                    <div className="prod-content">
                                        <h2 className="prod-content__heading">What our customers are saying</h2>
                                        <div className="row row-cols-3 gx-lg-2 row-cols-md-1 gy-md-3">
                                            {/* <!-- Review card 1 --> */}
                                            <div className="col">
                                                <div className="review-card">
                                                    <div className="review-card__content">
                                                        <img
                                                            src="/img/avatar/avatar-1.png"
                                                            alt=""
                                                            className="review-card__avatar"
                                                        />
                                                        <div className="review-card__info">
                                                            <h4 className="review-card__title">Jakir Hussen</h4>
                                                            <p className="review-card__desc">
                                                                Great product, I love this Coffee Beans
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="review-card__rating">
                                                        <div className="review-card__star-list">
                                                            <img
                                                                src="/icons/star.svg"
                                                                alt=""
                                                                className="review-card__star"
                                                            />
                                                            <img
                                                                src="/icons/star.svg"
                                                                alt=""
                                                                className="review-card__star"
                                                            />
                                                            <img
                                                                src="/icons/star.svg"
                                                                alt=""
                                                                className="review-card__star"
                                                            />
                                                            <img
                                                                src="/icons/star-half.svg"
                                                                alt=""
                                                                className="review-card__star"
                                                            />
                                                            <img
                                                                src="/icons/star-blank.svg"
                                                                alt=""
                                                                className="review-card__star"
                                                            />
                                                        </div>

                                                        <span className="review-card__rating-title">(3.5) Review</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- Review card 2 --> */}
                                            <div className="col">
                                                <div className="review-card">
                                                    <div className="review-card__content">
                                                        <img
                                                            src="/img/avatar/avatar-2.png"
                                                            alt=""
                                                            className="review-card__avatar"
                                                        />
                                                        <div className="review-card__info">
                                                            <h4 className="review-card__title">Jubed Ahmed</h4>
                                                            <p className="review-card__desc">
                                                                Awesome Coffee, I love this Coffee Beans
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="review-card__rating">
                                                        <div className="review-card__star-list">
                                                            <img
                                                                src="/icons/star.svg"
                                                                alt=""
                                                                className="review-card__star"
                                                            />
                                                            <img
                                                                src="/icons/star.svg"
                                                                alt=""
                                                                className="review-card__star"
                                                            />
                                                            <img
                                                                src="/icons/star.svg"
                                                                alt=""
                                                                className="review-card__star"
                                                            />
                                                            <img
                                                                src="/icons/star-half.svg"
                                                                alt=""
                                                                className="review-card__star"
                                                            />
                                                            <img
                                                                src="/icons/star-blank.svg"
                                                                alt=""
                                                                className="review-card__star"
                                                            />
                                                        </div>

                                                        <span className="review-card__rating-title">(3.5) Review</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- Review card 3 --> */}
                                            <div className="col">
                                                <div className="review-card">
                                                    <div className="review-card__content">
                                                        <img
                                                            src="/img/avatar/avatar-3.png"
                                                            alt=""
                                                            className="review-card__avatar"
                                                        />
                                                        <div className="review-card__info">
                                                            <h4 className="review-card__title">Delwar Hussain</h4>
                                                            <p className="review-card__desc">
                                                                Great product, I like this Coffee Beans
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="review-card__rating">
                                                        <div className="review-card__star-list">
                                                            <img
                                                                src="/icons/star.svg"
                                                                alt=""
                                                                className="review-card__star"
                                                            />
                                                            <img
                                                                src="/icons/star.svg"
                                                                alt=""
                                                                className="review-card__star"
                                                            />
                                                            <img
                                                                src="/icons/star.svg"
                                                                alt=""
                                                                className="review-card__star"
                                                            />
                                                            <img
                                                                src="/icons/star-half.svg"
                                                                alt=""
                                                                className="review-card__star"
                                                            />
                                                            <img
                                                                src="/icons/star-blank.svg"
                                                                alt=""
                                                                className="review-card__star"
                                                            />
                                                        </div>

                                                        <span className="review-card__rating-title">(3.5) Review</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="prod-tab__content">
                                    <div className="prod-content">
                                        <h2 className="prod-content__heading">Similar items you might like</h2>
                                        <div className="row row-cols-6 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-2">
                                            {/* <!-- Product card 1 --> */}
                                            <div className="col">
                                                <article className="product-card">
                                                    <div className="product-card__img-wrap">
                                                        <a href="./product-detail.html">
                                                            <img
                                                                src="/img/product/item-1.png"
                                                                alt=""
                                                                className="product-card__thumb"
                                                            />
                                                        </a>
                                                        <button className="like-btn product-card__like-btn">
                                                            <img
                                                                src="/icons/heart.svg"
                                                                alt=""
                                                                className="like-btn__icon icon"
                                                            />
                                                            <img
                                                                src="/icons/heart-red.svg"
                                                                alt=""
                                                                className="like-btn__icon--liked"
                                                            />
                                                        </button>
                                                    </div>
                                                    <h3 className="product-card__title">
                                                        <a href="./product-detail.html">
                                                            Coffee Beans - Espresso Arabica and Robusta Beans
                                                        </a>
                                                    </h3>
                                                    <p className="product-card__brand">Lavazza</p>
                                                    <div className="product-card__row">
                                                        <span className="product-card__price">$47.00</span>
                                                        <img
                                                            src="/icons/star.svg"
                                                            alt=""
                                                            className="product-card__star"
                                                        />
                                                        <span className="product-card__score">4.3</span>
                                                    </div>
                                                </article>
                                            </div>

                                            {/* <!-- Product card 2 --> */}
                                            <div className="col">
                                                <article className="product-card">
                                                    <div className="product-card__img-wrap">
                                                        <a href="./product-detail.html">
                                                            <img
                                                                src="/img/product/item-2.png"
                                                                alt=""
                                                                className="product-card__thumb"
                                                            />
                                                        </a>
                                                        <button className="like-btn product-card__like-btn">
                                                            <img
                                                                src="/icons/heart.svg"
                                                                alt=""
                                                                className="like-btn__icon icon"
                                                            />
                                                            <img
                                                                src="/icons/heart-red.svg"
                                                                alt=""
                                                                className="like-btn__icon--liked"
                                                            />
                                                        </button>
                                                    </div>
                                                    <h3 className="product-card__title">
                                                        <a href="./product-detail.html">
                                                            Lavazza Coffee Blends - Try the Italian Espresso
                                                        </a>
                                                    </h3>
                                                    <p className="product-card__brand">Lavazza</p>
                                                    <div className="product-card__row">
                                                        <span className="product-card__price">$53.00</span>
                                                        <img
                                                            src="/icons/star.svg"
                                                            alt=""
                                                            className="product-card__star"
                                                        />
                                                        <span className="product-card__score">3.4</span>
                                                    </div>
                                                </article>
                                            </div>

                                            {/* <!-- Product card 3 --> */}
                                            <div className="col">
                                                <article className="product-card">
                                                    <div className="product-card__img-wrap">
                                                        <a href="./product-detail.html">
                                                            <img
                                                                src="/img/product/item-3.png"
                                                                alt=""
                                                                className="product-card__thumb"
                                                            />
                                                        </a>
                                                        <button className="like-btn like-btn--liked product-card__like-btn">
                                                            <img
                                                                src="/icons/heart.svg"
                                                                alt=""
                                                                className="like-btn__icon icon"
                                                            />
                                                            <img
                                                                src="/icons/heart-red.svg"
                                                                alt=""
                                                                className="like-btn__icon--liked"
                                                            />
                                                        </button>
                                                    </div>
                                                    <h3 className="product-card__title">
                                                        <a href="./product-detail.html">
                                                            Lavazza - Caffè Espresso Black Tin - Ground coffee
                                                        </a>
                                                    </h3>
                                                    <p className="product-card__brand">Welikecoffee</p>
                                                    <div className="product-card__row">
                                                        <span className="product-card__price">$99.99</span>
                                                        <img
                                                            src="/icons/star.svg"
                                                            alt=""
                                                            className="product-card__star"
                                                        />
                                                        <span className="product-card__score">5.0</span>
                                                    </div>
                                                </article>
                                            </div>

                                            {/* <!-- Product card 4 --> */}
                                            <div className="col">
                                                <article className="product-card">
                                                    <div className="product-card__img-wrap">
                                                        <a href="./product-detail.html">
                                                            <img
                                                                src="/img/product/item-4.png"
                                                                alt=""
                                                                className="product-card__thumb"
                                                            />
                                                        </a>
                                                        <button className="like-btn product-card__like-btn">
                                                            <img
                                                                src="/icons/heart.svg"
                                                                alt=""
                                                                className="like-btn__icon icon"
                                                            />
                                                            <img
                                                                src="/icons/heart-red.svg"
                                                                alt=""
                                                                className="like-btn__icon--liked"
                                                            />
                                                        </button>
                                                    </div>
                                                    <h3 className="product-card__title">
                                                        <a href="./product-detail.html">
                                                            Qualità Oro Mountain Grown - Espresso Coffee Beans
                                                        </a>
                                                    </h3>
                                                    <p className="product-card__brand">Lavazza</p>
                                                    <div className="product-card__row">
                                                        <span className="product-card__price">$38.65</span>
                                                        <img
                                                            src="/icons/star.svg"
                                                            alt=""
                                                            className="product-card__star"
                                                        />
                                                        <span className="product-card__score">4.4</span>
                                                    </div>
                                                </article>
                                            </div>

                                            {/* <!-- Product card 5 --> */}
                                            <div className="col">
                                                <article className="product-card">
                                                    <div className="product-card__img-wrap">
                                                        <a href="/product-detail">
                                                            <img
                                                                src="/img/product/item-5.png"
                                                                alt=""
                                                                className="product-card__thumb"
                                                            />
                                                        </a>
                                                        <button className="like-btn product-card__like-btn">
                                                            <img
                                                                src="/icons/heart.svg"
                                                                alt=""
                                                                className="like-btn__icon icon"
                                                            />
                                                            <img
                                                                src="/icons/heart-red.svg"
                                                                alt=""
                                                                className="like-btn__icon--liked"
                                                            />
                                                        </button>
                                                    </div>
                                                    <h3 className="product-card__title">
                                                        <a href="/product-detail">
                                                            EarlyBird Want to Sleep - Espresso Coffee Beans
                                                        </a>
                                                    </h3>
                                                    <p className="product-card__brand">FilterKaffee</p>
                                                    <div className="product-card__row">
                                                        <span className="product-card__price">$48.65</span>
                                                        <img
                                                            src="/icons/star.svg"
                                                            alt=""
                                                            className="product-card__star"
                                                        />
                                                        <span className="product-card__score">3.2</span>
                                                    </div>
                                                </article>
                                            </div>

                                            {/* <!-- Product card 6 --> */}
                                            <div className="col">
                                                <article className="product-card">
                                                    <div className="product-card__img-wrap">
                                                        <a href="/product-detail">
                                                            <img
                                                                src="/img/product/item-6.png"
                                                                alt=""
                                                                className="product-card__thumb"
                                                            />
                                                        </a>
                                                        <button className="like-btn product-card__like-btn">
                                                            <img
                                                                src="/icons/heart.svg"
                                                                alt=""
                                                                className="like-btn__icon icon"
                                                            />
                                                            <img
                                                                src="/icons/heart-red.svg"
                                                                alt=""
                                                                className="like-btn__icon--liked"
                                                            />
                                                        </button>
                                                    </div>
                                                    <h3 className="product-card__title">
                                                        <a href="/product-detail">
                                                            Partners coffee - Roasters Coffee New York
                                                        </a>
                                                    </h3>
                                                    <p className="product-card__brand">Brooklyn</p>
                                                    <div className="product-card__row">
                                                        <span className="product-card__price">$21.55</span>
                                                        <img
                                                            src="/icons/star.svg"
                                                            alt=""
                                                            className="product-card__star"
                                                        />
                                                        <span className="product-card__score">4.8</span>
                                                    </div>
                                                </article>
                                            </div>

                                            {/* <!-- Product card 7 --> */}
                                            <div className="col">
                                                <article className="product-card">
                                                    <div className="product-card__img-wrap">
                                                        <a href="/product-detail">
                                                            <img
                                                                src="/img/product/item-7.png"
                                                                alt=""
                                                                className="product-card__thumb"
                                                            />
                                                        </a>
                                                        <button className="like-btn product-card__like-btn">
                                                            <img
                                                                src="/icons/heart.svg"
                                                                alt=""
                                                                className="like-btn__icon icon"
                                                            />
                                                            <img
                                                                src="/icons/heart-red.svg"
                                                                alt=""
                                                                className="like-btn__icon--liked"
                                                            />
                                                        </button>
                                                    </div>
                                                    <h3 className="product-card__title">
                                                        <a href="/product-detail">
                                                            BattleCreek Coffe - Decaf coffee beans
                                                        </a>
                                                    </h3>
                                                    <p className="product-card__brand">Columbia</p>
                                                    <div className="product-card__row">
                                                        <span className="product-card__price">$19.25</span>
                                                        <img
                                                            src="/icons/star.svg"
                                                            alt=""
                                                            className="product-card__star"
                                                        />
                                                        <span className="product-card__score">2.7</span>
                                                    </div>
                                                </article>
                                            </div>

                                            {/* <!-- Product card 8 --> */}
                                            <div className="col">
                                                <article className="product-card">
                                                    <div className="product-card__img-wrap">
                                                        <a href="/product-detail">
                                                            <img
                                                                src="/img/product/item-8.png"
                                                                alt=""
                                                                className="product-card__thumb"
                                                            />
                                                        </a>
                                                        <button className="like-btn product-card__like-btn">
                                                            <img
                                                                src="/icons/heart.svg"
                                                                alt=""
                                                                className="like-btn__icon icon"
                                                            />
                                                            <img
                                                                src="/icons/heart-red.svg"
                                                                alt=""
                                                                className="like-btn__icon--liked"
                                                            />
                                                        </button>
                                                    </div>
                                                    <h3 className="product-card__title">
                                                        <a href="/product-detail">
                                                            Buna Café rico - Los Pajaritos coffee
                                                        </a>
                                                    </h3>
                                                    <p className="product-card__brand">Los Pajaritos</p>
                                                    <div className="product-card__row">
                                                        <span className="product-card__price">$38.65</span>
                                                        <img
                                                            src="/icons/star.svg"
                                                            alt=""
                                                            className="product-card__star"
                                                        />
                                                        <span className="product-card__score">4.4</span>
                                                    </div>
                                                </article>
                                            </div>

                                            {/* <!-- Product card 9 --> */}
                                            <div className="col">
                                                <article className="product-card">
                                                    <div className="product-card__img-wrap">
                                                        <a href="/product-detail">
                                                            <img
                                                                src="/img/product/item-9.png"
                                                                alt=""
                                                                className="product-card__thumb"
                                                            />
                                                        </a>
                                                        <button className="like-btn product-card__like-btn">
                                                            <img
                                                                src="/icons/heart.svg"
                                                                alt=""
                                                                className="like-btn__icon icon"
                                                            />
                                                            <img
                                                                src="/icons/heart-red.svg"
                                                                alt=""
                                                                className="like-btn__icon--liked"
                                                            />
                                                        </button>
                                                    </div>
                                                    <h3 className="product-card__title">
                                                        <a href="/product-detail">
                                                            Fiddle Heads - Costa rica Coffee Beans
                                                        </a>
                                                    </h3>
                                                    <p className="product-card__brand">Costa Rica</p>
                                                    <div className="product-card__row">
                                                        <span className="product-card__price">$68.65</span>
                                                        <img
                                                            src="/icons/star.svg"
                                                            alt=""
                                                            className="product-card__star"
                                                        />
                                                        <span className="product-card__score">3.9</span>
                                                    </div>
                                                </article>
                                            </div>

                                            {/* <!-- Product card 10 --> */}
                                            <div className="col">
                                                <article className="product-card">
                                                    <div className="product-card__img-wrap">
                                                        <a href="/product-detail">
                                                            <img
                                                                src="/img/product/item-10.png"
                                                                alt=""
                                                                className="product-card__thumb"
                                                            />
                                                        </a>
                                                        <button className="like-btn product-card__like-btn">
                                                            <img
                                                                src="/icons/heart.svg"
                                                                alt=""
                                                                className="like-btn__icon icon"
                                                            />
                                                            <img
                                                                src="/icons/heart-red.svg"
                                                                alt=""
                                                                className="like-btn__icon--liked"
                                                            />
                                                        </button>
                                                    </div>
                                                    <h3 className="product-card__title">
                                                        <a href="/product-detail">
                                                            Never settle for good enough - Roasted Coffee Beans
                                                        </a>
                                                    </h3>
                                                    <p className="product-card__brand">Small-Batch</p>
                                                    <div className="product-card__row">
                                                        <span className="product-card__price">$36.25</span>
                                                        <img
                                                            src="/icons/star.svg"
                                                            alt=""
                                                            className="product-card__star"
                                                        />
                                                        <span className="product-card__score">4.2</span>
                                                    </div>
                                                </article>
                                            </div>

                                            {/* <!-- Product card 11 --> */}
                                            <div className="col">
                                                <article className="product-card">
                                                    <div className="product-card__img-wrap">
                                                        <a href="/product-detail">
                                                            <img
                                                                src="/img/product/item-11.png"
                                                                alt=""
                                                                className="product-card__thumb"
                                                            />
                                                        </a>
                                                        <button className="like-btn product-card__like-btn">
                                                            <img
                                                                src="/icons/heart.svg"
                                                                alt=""
                                                                className="like-btn__icon icon"
                                                            />
                                                            <img
                                                                src="/icons/heart-red.svg"
                                                                alt=""
                                                                className="like-btn__icon--liked"
                                                            />
                                                        </button>
                                                    </div>
                                                    <h3 className="product-card__title">
                                                        <a href="/product-detail">
                                                            211 Bird Free - Medium Roast Coffee Beans
                                                        </a>
                                                    </h3>
                                                    <p className="product-card__brand">Guatemala</p>
                                                    <div className="product-card__row">
                                                        <span className="product-card__price">$18.65</span>
                                                        <img
                                                            src="/icons/star.svg"
                                                            alt=""
                                                            className="product-card__star"
                                                        />
                                                        <span className="product-card__score">4.0</span>
                                                    </div>
                                                </article>
                                            </div>

                                            {/* <!-- Product card 12 --> */}
                                            <div className="col">
                                                <article className="product-card">
                                                    <div className="product-card__img-wrap">
                                                        <a href="/product-detail">
                                                            <img
                                                                src="/img/product/item-12.png"
                                                                alt=""
                                                                className="product-card__thumb"
                                                            />
                                                        </a>
                                                        <button className="like-btn product-card__like-btn">
                                                            <img
                                                                src="/icons/heart.svg"
                                                                alt=""
                                                                className="like-btn__icon icon"
                                                            />
                                                            <img
                                                                src="/icons/heart-red.svg"
                                                                alt=""
                                                                className="like-btn__icon--liked"
                                                            />
                                                        </button>
                                                    </div>
                                                    <h3 className="product-card__title">
                                                        <a href="/product-detail">
                                                            Olympic Coffee - Espresso Coffee Beans
                                                        </a>
                                                    </h3>
                                                    <p className="product-card__brand">San Sebastian</p>
                                                    <div className="product-card__row">
                                                        <span className="product-card__price">$28.5</span>
                                                        <img
                                                            src="/icons/star.svg"
                                                            alt=""
                                                            className="product-card__star"
                                                        />
                                                        <span className="product-card__score">4.9</span>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <Footer></Footer>
            </footer>
        </>
    );
}
