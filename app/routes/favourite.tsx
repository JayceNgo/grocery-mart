import Footer from "~/layouts/footer";
import Header from "~/layouts/header-logined";
export default function Favourite() {
    return (
        <>
            <header className="header">
                <Header />
            </header>
            {/* <!-- MAIN --> */}
            <main className="checkout-page">
                <div className="container">
                    {/* <!-- Search bar --> */}
                    <div className="checkout-container">
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
                    <div className="checkout-container">
                        <ul className="breadcrumbs checkout-page__breadcrumbs">
                            <li>
                                <a href="./" className="breadcrumbs__link">
                                    Home
                                    <img src="/icons/arrow-right.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="breadcrumbs__link breadcrumbs__link--current">
                                    Favorite
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Checkout content --> */}
                    <div className="checkout-container">
                        <div className="row gy-xl-3">
                            <div className="col-12">
                                <div className="cart-info">
                                    <h1 className="cart-info__heading">Favourite List</h1>
                                    <p className="cart-info__desc">3 items</p>
                                    <div className="cart-info__check-all">
                                        <label className="cart-info__checkbox">
                                            <input
                                                title="ad2"
                                                type="checkbox"
                                                name="shipping-adress"
                                                className="cart-info__checkbox-input"
                                            />
                                        </label>
                                    </div>
                                    <div className="cart-info__list">
                                        {/* <!-- Cart item 1 --> */}
                                        <article className="cart-item">
                                            <label className="cart-info__checkbox">
                                                <input
                                                    title="ad1"
                                                    type="checkbox"
                                                    name="shipping-adress"
                                                    className="cart-info__checkbox-input"
                                                />
                                            </label>
                                            <a href="./product-detail.html">
                                                <img
                                                    src="/img/product/item-1.png"
                                                    alt=""
                                                    className="cart-item__thumb"
                                                />
                                            </a>
                                            <div className="cart-item__content">
                                                <div className="cart-item__content-left">
                                                    <h3 className="cart-item__title">
                                                        <a href="./product-detail.html">
                                                            Coffee Beans - Espresso Arabica and Robusta Beans
                                                        </a>
                                                    </h3>
                                                    <p className="cart-item__price-wrap">
                                                        $47.00 | <span className="cart-item__status">In Stock</span>
                                                    </p>
                                                    <div className="cart-item__ctrl-wrap">
                                                        <div className="cart-item__ctrl cart-item__ctrl--md-block">
                                                            <div className="cart-item__input">
                                                                LavAzza
                                                                <img
                                                                    className="icon"
                                                                    src="/icons/arrow-down-2.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="cart-item__input">
                                                                <button className="cart-item__input-btn">
                                                                    <img
                                                                        className="icon"
                                                                        src="/icons/minus.svg"
                                                                        alt=""
                                                                    />
                                                                </button>
                                                                <span>1</span>
                                                                <button className="cart-item__input-btn">
                                                                    <img
                                                                        className="icon"
                                                                        src="/icons/plus.svg"
                                                                        alt=""
                                                                    />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="cart-item__ctrl">
                                                            <button className="cart-item__ctrl-btn">
                                                                <img src="/icons/heart-2.svg" alt="" />
                                                                Save
                                                            </button>
                                                            <button
                                                                className="cart-item__ctrl-btn js-toggle"
                                                                toggle-target="#delete-confirm"
                                                            >
                                                                <img src="/icons/trash.svg" alt="" />
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cart-item__content-right">
                                                    <p className="cart-item__total-price">$47.00</p>
                                                    <button className="cart-item__checkout-btn btn btn--primary btn--rounded">
                                                        Check Out
                                                    </button>
                                                </div>
                                            </div>
                                        </article>

                                        {/* <!-- Cart item 2 --> */}
                                        <article className="cart-item">
                                            <label className="cart-info__checkbox">
                                                <input
                                                    title="ad3"
                                                    type="checkbox"
                                                    name="shipping-adress"
                                                    className="cart-info__checkbox-input"
                                                />
                                            </label>
                                            <a href="./product-detail.html">
                                                <img
                                                    src="/img/product/item-2.png"
                                                    alt=""
                                                    className="cart-item__thumb"
                                                />
                                            </a>
                                            <div className="cart-item__content">
                                                <div className="cart-item__content-left">
                                                    <h3 className="cart-item__title">
                                                        <a href="./product-detail.html">
                                                            Lavazza Coffee Blends - Try the Italian Espresso
                                                        </a>
                                                    </h3>
                                                    <p className="cart-item__price-wrap">
                                                        $53.00 | <span className="cart-item__status">In Stock</span>
                                                    </p>
                                                    <div className="cart-item__ctrl-wrap">
                                                        <div className="cart-item__ctrl cart-item__ctrl--md-block">
                                                            <div className="cart-item__input">
                                                                LavAzza
                                                                <img
                                                                    className="icon"
                                                                    src="/icons/arrow-down-2.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="cart-item__input">
                                                                <button className="cart-item__input-btn">
                                                                    <img
                                                                        className="icon"
                                                                        src="/icons/minus.svg"
                                                                        alt=""
                                                                    />
                                                                </button>
                                                                <span>1</span>
                                                                <button className="cart-item__input-btn">
                                                                    <img
                                                                        className="icon"
                                                                        src="/icons/plus.svg"
                                                                        alt=""
                                                                    />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="cart-item__ctrl">
                                                            <button className="cart-item__ctrl-btn">
                                                                <img src="/icons/heart-2.svg" alt="" />
                                                                Save
                                                            </button>
                                                            <button
                                                                className="cart-item__ctrl-btn js-toggle"
                                                                toggle-target="#delete-confirm"
                                                            >
                                                                <img src="/icons/trash.svg" alt="" />
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cart-item__content-right">
                                                    <p className="cart-item__total-price">$106.00</p>
                                                    <button className="cart-item__checkout-btn btn btn--primary btn--rounded">
                                                        Check Out
                                                    </button>
                                                </div>
                                            </div>
                                        </article>

                                        {/* <!-- Cart item 3 --> */}
                                        <article className="cart-item">
                                            <label className="cart-info__checkbox">
                                                <input
                                                    title="ad4"
                                                    type="checkbox"
                                                    name="shipping-adress"
                                                    className="cart-info__checkbox-input"
                                                />
                                            </label>
                                            <a href="./product-detail.html">
                                                <img
                                                    src="/img/product/item-3.png"
                                                    alt=""
                                                    className="cart-item__thumb"
                                                />
                                            </a>
                                            <div className="cart-item__content">
                                                <div className="cart-item__content-left">
                                                    <h3 className="cart-item__title">
                                                        <a href="./product-detail.html">
                                                            Qualità Oro Mountain Grown - Espresso Coffee Beans
                                                        </a>
                                                    </h3>
                                                    <p className="cart-item__price-wrap">
                                                        $38.65 | <span className="cart-item__status">In Stock</span>
                                                    </p>
                                                    <div className="cart-item__ctrl-wrap">
                                                        <div className="cart-item__ctrl cart-item__ctrl--md-block">
                                                            <div className="cart-item__input">
                                                                LavAzza
                                                                <img
                                                                    className="icon"
                                                                    src="/icons/arrow-down-2.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="cart-item__input">
                                                                <button className="cart-item__input-btn">
                                                                    <img
                                                                        className="icon"
                                                                        src="/icons/minus.svg"
                                                                        alt=""
                                                                    />
                                                                </button>
                                                                <span>1</span>
                                                                <button className="cart-item__input-btn">
                                                                    <img
                                                                        className="icon"
                                                                        src="/icons/plus.svg"
                                                                        alt=""
                                                                    />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="cart-item__ctrl">
                                                            <button className="cart-item__ctrl-btn">
                                                                <img src="/icons/heart-2.svg" alt="" />
                                                                Save
                                                            </button>
                                                            <button
                                                                className="cart-item__ctrl-btn js-toggle"
                                                                toggle-target="#delete-confirm"
                                                            >
                                                                <img src="/icons/trash.svg" alt="" />
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cart-item__content-right">
                                                    <p className="cart-item__total-price">$38.65</p>
                                                    <button className="cart-item__checkout-btn btn btn--primary btn--rounded">
                                                        Check Out
                                                    </button>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="cart-info__bottom">
                                        <div className="cart-info__row cart-info__row-md--block">
                                            <div className="cart-info__continue">
                                                <a href="./" className="cart-info__continue-link">
                                                    <img
                                                        className="cart-info__continue-icon icon"
                                                        src="/icons/arrow-down-2.svg"
                                                        alt=""
                                                    />
                                                    Continue Shopping
                                                </a>
                                            </div>
                                            <a
                                                href="/checkout"
                                                className="cart-info__checkout-all btn btn--primary btn--rounded"
                                            >
                                                All Check Out
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <Footer />
            </footer>
            {/* <!-- Modal: confirm remove shopping cart item --> */}
            <div id="delete-confirm" className="modal modal--small hide">
                <div className="modal__content">
                    <p className="modal__text">Do you want to remove this item from shopping cart?</p>
                    <div className="modal__bottom">
                        <button
                            className="btn btn--small btn--outline modal__btn js-toggle"
                            toggle-target="#delete-confirm"
                        >
                            Cancel
                        </button>
                        <button
                            className="btn btn--small btn--danger btn--primary modal__btn btn--no-margin js-toggle"
                            toggle-target="#delete-confirm"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className="modal__overlay js-toggle" toggle-target="#delete-confirm"></div>
            </div>
        </>
    );
}
