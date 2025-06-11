import Footer from "~/layouts/footer";
import Header from "~/layouts/header-logined";
export default function Shipping() {
    return (
        <>
            <header className="header">
                <Header />
            </header>
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
                                <a href="/checkout" className="breadcrumbs__link">
                                    Checkout
                                    <img src="/icons/arrow-right.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="breadcrumbs__link breadcrumbs__link--current">
                                    Shipping
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Checkout content --> */}
                    <div className="checkout-container">
                        <div className="row gy-xl-3">
                            <div className="col-8 col-xl-12">
                                <div className="cart-info">
                                    <h1 className="cart-info__heading">
                                        1. Shipping, arrives between Mon, May 16—Tue, May 24
                                    </h1>
                                    <div className="cart-info__separate"></div>

                                    {/* <!-- Checkout address --> */}
                                    <div className="user-address">
                                        <div className="user-address__top">
                                            <div>
                                                <h2 className="user-address__title">Shipping address</h2>
                                                <p className="user-address__desc">
                                                    Where should we deliver your order?
                                                </p>
                                            </div>
                                            <button
                                                className="user-address__btn btn btn--primary btn--rounded btn--small js-toggle"
                                                toggle-target="#add-new-address"
                                            >
                                                <img src="/icons/plus.svg" alt="" />
                                                Add a new address
                                            </button>
                                        </div>
                                        <div className="user-address__list">
                                            {/* <!-- Address card 1 --> */}
                                            <article className="address-card">
                                                <div className="address-card__left">
                                                    <div className="address-card__choose">
                                                        <label className="address-card__checkbox">
                                                            <input
                                                                type="checkbox"
                                                                name=""
                                                                className="address-card__checkbox-input"
                                                                title="Select this address"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="address-card__info">
                                                        <h3 className="address-card__title">Imran Khan</h3>
                                                        <p className="address-card__desc">
                                                            Museum of Rajas, Sylhet Sadar, Sylhet 3100.
                                                        </p>
                                                        <ul className="address-card__list">
                                                            <li className="address-card__list-item">Shipping</li>
                                                            <li className="address-card__list-item">
                                                                Delivery from store
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="address-card__right">
                                                    <div className="address-card__ctrl">
                                                        <button
                                                            className="address-card__ctrl-btn js-toggle"
                                                            toggle-target="#add-new-address"
                                                        >
                                                            <img className="icon" src="/icons/edit.svg" alt="" />
                                                            Edit
                                                        </button>
                                                    </div>
                                                </div>
                                            </article>

                                            {/* <!-- Address card 2 --> */}
                                            <article className="address-card">
                                                <div className="address-card__left">
                                                    <div className="address-card__choose">
                                                        <label className="address-card__checkbox">
                                                            <input
                                                                type="checkbox"
                                                                name=""
                                                                className="address-card__checkbox-input"
                                                                title="Select this address"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="address-card__info">
                                                        <h3 className="address-card__title">Imran Khan</h3>
                                                        <p className="address-card__desc">
                                                            Al Hamra City (10th Floor), Hazrat Shahjalal Road, Sylhet,
                                                            Sylhet, Bangladesh
                                                        </p>
                                                        <ul className="address-card__list">
                                                            <li className="address-card__list-item">Shipping</li>
                                                            <li className="address-card__list-item">
                                                                Delivery from store
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="address-card__right">
                                                    <div className="address-card__ctrl">
                                                        <button
                                                            className="address-card__ctrl-btn js-toggle"
                                                            toggle-target="#add-new-address"
                                                        >
                                                            <img className="icon" src="/icons/edit.svg" alt="" />
                                                            Edit
                                                        </button>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="cart-info__separate"></div>
                                    <h2 className="cart-info__sub-heading">Items details</h2>
                                    <div className="cart-info__list">
                                        {/* <!-- Cart item 1 --> */}
                                        <article className="cart-item">
                                            <a href="/product-detail">
                                                <img
                                                    src="/img/product/item-1.png"
                                                    alt=""
                                                    className="cart-item__thumb"
                                                />
                                            </a>
                                            <div className="cart-item__content">
                                                <div className="cart-item__content-left">
                                                    <h3 className="cart-item__title">
                                                        <a href="/product-detail">
                                                            Coffee Beans - Espresso Arabica and Robusta Beans
                                                        </a>
                                                    </h3>
                                                    <p className="cart-item__price-wrap">
                                                        $47.00 | <span className="cart-item__status">In Stock</span>
                                                    </p>
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
                                                                <img className="icon" src="/icons/minus.svg" alt="" />
                                                            </button>
                                                            <span>1</span>
                                                            <button className="cart-item__input-btn">
                                                                <img className="icon" src="/icons/plus.svg" alt="" />
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
                                        </article>

                                        {/* <!-- Cart item 2 --> */}
                                        <article className="cart-item">
                                            <a href="/product-detail">
                                                <img
                                                    src="/img/product/item-2.png"
                                                    alt=""
                                                    className="cart-item__thumb"
                                                />
                                            </a>
                                            <div className="cart-item__content">
                                                <div className="cart-item__content-left">
                                                    <h3 className="cart-item__title">
                                                        <a href="/product-detail">
                                                            Lavazza Coffee Blends - Try the Italian Espresso
                                                        </a>
                                                    </h3>
                                                    <p className="cart-item__price-wrap">
                                                        $53.00 | <span className="cart-item__status">In Stock</span>
                                                    </p>
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
                                                                <img className="icon" src="/icons/minus.svg" alt="" />
                                                            </button>
                                                            <span>1</span>
                                                            <button className="cart-item__input-btn">
                                                                <img className="icon" src="/icons/plus.svg" alt="" />
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
                                        </article>

                                        {/* <!-- Cart item 3 --> */}
                                        <article className="cart-item">
                                            <a href="/product-detail">
                                                <img
                                                    src="/img/product/item-3.png"
                                                    alt=""
                                                    className="cart-item__thumb"
                                                />
                                            </a>
                                            <div className="cart-item__content">
                                                <div className="cart-item__content-left">
                                                    <h3 className="cart-item__title">
                                                        <a href="/product-detail">
                                                            Qualità Oro Mountain Grown - Espresso Coffee Beans
                                                        </a>
                                                    </h3>
                                                    <p className="cart-item__price-wrap">
                                                        $38.65 | <span className="cart-item__status">In Stock</span>
                                                    </p>
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
                                                                <img className="icon" src="/icons/minus.svg" alt="" />
                                                            </button>
                                                            <span>1</span>
                                                            <button className="cart-item__input-btn">
                                                                <img className="icon" src="/icons/plus.svg" alt="" />
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
                                        </article>
                                    </div>
                                    <div className="cart-info__bottom d-md-none">
                                        <div className="row">
                                            <div className="col-8 col-xxl-7">
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
                                    <a href="/payment" className="cart-info__next-btn btn btn--primary btn--rounded">
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
            {/* <!-- Modal: address new shipping address --> */}
            <div
                id="add-new-address"
                className="modal hide"
                style={{ "--content-width": "650px" } as React.CSSProperties}
            >
                <div className="modal__content">
                    <form action="" className="form">
                        <h2 className="modal__heading">Add new shopping address</h2>
                        <div className="modal__body">
                            <div className="form__row">
                                <div className="form__group">
                                    <label htmlFor="name" className="form__label form__label--small">
                                        Name
                                    </label>
                                    <div className="form__text-input form__text-input--small">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Name"
                                            className="form__input"
                                            required
                                            minLength={2}
                                        />
                                        <img src="/icons/form-error.svg" alt="" className="form__input-icon-error" />
                                    </div>
                                    <p className="form__error">Name must be at least 2 characters</p>
                                </div>
                                <div className="form__group">
                                    <label htmlFor="phone" className="form__label form__label--small">
                                        Phone
                                    </label>
                                    <div className="form__text-input form__text-input--small">
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            placeholder="Phone"
                                            className="form__input"
                                            required
                                            minLength={10}
                                        />
                                        <img src="/icons/form-error.svg" alt="" className="form__input-icon-error" />
                                    </div>
                                    <p className="form__error">Phone must be at least 10 characters</p>
                                </div>
                            </div>
                            <div className="form__group">
                                <label htmlFor="address" className="form__label form__label--small">
                                    Address
                                </label>
                                <div className="form__text-area">
                                    <textarea
                                        name="address"
                                        id="address"
                                        placeholder="Address (Area and street)"
                                        className="form__text-area-input"
                                        required
                                    ></textarea>
                                    <img src="/icons/form-error.svg" alt="" className="form__input-icon-error" />
                                </div>
                                <p className="form__error">Address not empty</p>
                            </div>
                            <div className="form__group">
                                <label htmlFor="city" className="form__label form__label--small">
                                    City/District/Town
                                </label>
                                <div className="form__text-input form__text-input--small">
                                    <input
                                        type="text"
                                        name=""
                                        placeholder="City/District/Town"
                                        id="city"
                                        readOnly
                                        className="form__input js-toggle"
                                        toggle-target="#city-dialog"
                                    />
                                    <img src="/icons/form-error.svg" alt="" className="form__input-icon-error" />

                                    {/* <!-- Select dialog --> */}
                                    <div id="city-dialog" className="form__select-dialog hide">
                                        <h2 className="form__dialog-heading d-none d-sm-block">City/District/Town</h2>
                                        <button
                                            className="form__close-dialog d-none d-sm-block js-toggle"
                                            toggle-target="#city-dialog"
                                        >
                                            &times;
                                        </button>
                                        <div className="form__search">
                                            <input type="text" placeholder="Search" className="form__search-input" />
                                            <img src="/icons/search.svg" alt="" className="form__search-icon " />
                                        </div>
                                        <ul className="form__options-list">
                                            <li className="form__option">Toronto</li>
                                            <li className="form__option form__option--current">Vancover</li>
                                            <li className="form__option">Ottawa</li>
                                            <li className="form__option">Toronto</li>
                                            <li className="form__option">Vancover</li>
                                            <li className="form__option">Ottawa</li>
                                            <li className="form__option">Toronto</li>
                                            <li className="form__option">Vancover</li>
                                            <li className="form__option">Ottawa</li>
                                            <li className="form__option">Toronto</li>
                                            <li className="form__option">Vancover</li>
                                            <li className="form__option">Ottawa</li>
                                            <li className="form__option">Toronto</li>
                                            <li className="form__option">Vancover</li>
                                            <li className="form__option">Ottawa</li>
                                            <li className="form__option">Toronto</li>
                                            <li className="form__option">Vancover</li>
                                            <li className="form__option">Ottawa</li>
                                            <li className="form__option">Toronto</li>
                                            <li className="form__option">Vancover</li>
                                            <li className="form__option">Ottawa</li>
                                            <li className="form__option">Toronto</li>
                                            <li className="form__option">Vancover</li>
                                            <li className="form__option">Ottawa</li>
                                            <li className="form__option">Toronto</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="form__error">Phone must be at least 11 characters</p>
                            </div>
                            <div className="form__group form__group--inline">
                                <label className="form__checkbox">
                                    <input type="checkbox" name="" id="" className="form__checkbox-input d-none" />
                                    <span className="form__checkbox-label">Set as default address</span>
                                </label>
                            </div>
                        </div>

                        <div className="modal__bottom">
                            <button
                                className="btn btn--small btn--text modal__btn js-toggle"
                                toggle-target="#add-new-address"
                            >
                                Cancel
                            </button>
                            <button
                                className="btn btn--small btn--primary modal__btn btn--no-margin js-toggle"
                                toggle-target="#add-new-address"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
                <div className="modal__overlay"></div>
            </div>
        </>
    );
}
