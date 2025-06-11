import Footer from "~/layouts/footer";
import Header from "~/layouts/header-logined";
export default function Checkout() {
    return (
        <>
            <header className="header">
                <Header />
            </header>
            <main className="checkout-page">
                <div className="container">
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
                                    Checkout
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Checkout content --> */}
                    <div className="checkout-container">
                        <div className="row gy-xl-3">
                            <div className="col-8 col-xl-12">
                                <div className="cart-info">
                                    <div className="cart-info__list">
                                        {/* <!-- Cart item 1 --> */}
                                        <article className="cart-item">
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
                                                    <div className="cart-item__ctrl cart-item__ctrl--md-block">
                                                        <div className="cart-item__input">
                                                            LavAzza
                                                            <img src="/icons/arrow-down-2.svg" alt="" />
                                                        </div>
                                                        <div className="cart-item__input">
                                                            <button className="cart-item__input-btn">
                                                                <img src="/icons/minus.svg" alt="" />
                                                            </button>
                                                            <span>1</span>
                                                            <button className="cart-item__input-btn">
                                                                <img src="/icons/plus.svg" alt="" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cart-item__content-right">
                                                    <p className="cart-item__total-price">$47.00</p>
                                                    <div className="cart-item__ctrl">
                                                        <button className="cart-item__ctrl-btn">
                                                            <img src="/icons/heart-2.svg" alt="" />
                                                            Save
                                                        </button>
                                                        <button className="cart-item__ctrl-btn">
                                                            <img src="/icons/trash.svg" alt="" />
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>

                                        {/* <!-- Cart item 2 --> */}
                                        <article className="cart-item">
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
                                                    <div className="cart-item__ctrl cart-item__ctrl--md-block">
                                                        <div className="cart-item__input">
                                                            LavAzza
                                                            <img src="/icons/arrow-down-2.svg" alt="" />
                                                        </div>
                                                        <div className="cart-item__input">
                                                            <button className="cart-item__input-btn">
                                                                <img src="/icons/minus.svg" alt="" />
                                                            </button>
                                                            <span>1</span>
                                                            <button className="cart-item__input-btn">
                                                                <img src="/icons/plus.svg" alt="" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cart-item__content-right">
                                                    <p className="cart-item__total-price">$106.00</p>
                                                    <div className="cart-item__ctrl">
                                                        <button className="cart-item__ctrl-btn">
                                                            <img src="/icons/heart-2.svg" alt="" />
                                                            Save
                                                        </button>
                                                        <button className="cart-item__ctrl-btn">
                                                            <img src="/icons/trash.svg" alt="" />
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>

                                        {/* <!-- Cart item 3 --> */}
                                        <article className="cart-item">
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
                                                    <div className="cart-item__ctrl cart-item__ctrl--md-block">
                                                        <div className="cart-item__input">
                                                            LavAzza
                                                            <img src="/icons/arrow-down-2.svg" alt="" />
                                                        </div>
                                                        <div className="cart-item__input">
                                                            <button className="cart-item__input-btn">
                                                                <img src="/icons/minus.svg" alt="" />
                                                            </button>
                                                            <span>1</span>
                                                            <button className="cart-item__input-btn">
                                                                <img src="/icons/plus.svg" alt="" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cart-item__content-right">
                                                    <p className="cart-item__total-price">$38.65</p>
                                                    <div className="cart-item__ctrl">
                                                        <button className="cart-item__ctrl-btn">
                                                            <img src="/icons/heart-2.svg" alt="" />
                                                            Save
                                                        </button>
                                                        <button className="cart-item__ctrl-btn">
                                                            <img src="/icons/trash.svg" alt="" />
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="cart-info__bottom d-md-none">
                                        <div className="row">
                                            <div className="col-8 col-xxl-7">
                                                <div className="cart-info__continue">
                                                    <a href="./" className="cart-info__continue-link">
                                                        <img
                                                            className="cart-info__continue-icon"
                                                            src="/icons/arrow-down-2.svg"
                                                            alt=""
                                                        />
                                                        Continue Shopping
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-4 col-xxl-5">
                                                <div className="cart-info__row">
                                                    <span>Subtotal:</span>
                                                    <span>$191.65</span>
                                                </div>
                                                <div className="cart-info__row">
                                                    <span>Shipping:</span>
                                                    <span>$10.00</span>
                                                </div>
                                                <div className="cart-info__separate"></div>
                                                <div className="cart-info__row cart-info__row--bold">
                                                    <span>Total:</span>
                                                    <span>$201.65</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-xl-12">
                                <div className="cart-info">
                                    <div className="cart-info__row">
                                        <span>
                                            Subtotal <span className="cart-info__sub-label">(items)</span>
                                        </span>
                                        <span>3</span>
                                    </div>
                                    <div className="cart-info__row">
                                        <span>
                                            Price <span className="cart-info__sub-label">(Total)</span>
                                        </span>
                                        <span>$191.65</span>
                                    </div>
                                    <div className="cart-info__row">
                                        <span>Shipping</span>
                                        <span>$10.00</span>
                                    </div>
                                    <div className="cart-info__separate"></div>
                                    <div className="cart-info__row">
                                        <span>Estimated Total</span>
                                        <span>$201.65</span>
                                    </div>
                                    <a href="#!" className="cart-info__next-btn btn btn--primary btn--rounded">
                                        Continue to checkout
                                    </a>
                                </div>
                                <div className="cart-info">
                                    <a href="#!">
                                        <article className="gift-item">
                                            <div className="gift-item__icon-wrap">
                                                <img src="/icons/gift.svg" alt="" className="gift-item__icon" />
                                            </div>
                                            <div className="gift-item__content">
                                                <h3 className="gift-item__title">Send this order as a gift.</h3>
                                                <p className="gift-item__desc">
                                                    Available items will be shipped to your gift recipient.
                                                </p>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                            </div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </>
    );
}
