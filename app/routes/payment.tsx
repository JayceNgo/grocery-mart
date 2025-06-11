import Footer from "~/layouts/footer";
import Header from "~/layouts/header-logined";
export default function Payment() {
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
                                <a href="/checkout" className="breadcrumbs__link">
                                    Checkout
                                    <img src="/icons/arrow-right.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/shipping" className="breadcrumbs__link">
                                    Shipping
                                    <img src="/icons/arrow-right.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="breadcrumbs__link breadcrumbs__link--current">
                                    Payment method
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Checkout content --> */}
                    <div className="checkout-container">
                        <div className="row gy-xl-3">
                            <div className="col-8 col-xl-12">
                                <div className="cart-info">
                                    <div className="cart-info__top">
                                        <h2 className="cart-info__heading cart-info__heading--lv2">
                                            1. Shipping, arrives between Mon, May 16—Tue, May 24
                                        </h2>
                                        <a className="cart-info__edit-btn" href="/shipping">
                                            <img className="icon" src="/icons/edit.svg" alt="" />
                                            Edit
                                        </a>
                                    </div>

                                    {/* <!-- Payment item 1 --> */}
                                    <article className="payment-item">
                                        <div className="payment-item__content">
                                            <h3 className="payment-item__title">Imran Khan</h3>
                                            <p className="payment-item__desc">
                                                Museum of Rajas, Sylhet Sadar, Sylhet 3100.
                                            </p>
                                        </div>
                                    </article>

                                    {/* <!-- Payment item 2 --> */}
                                    <article className="payment-item">
                                        <div className="payment-item__content">
                                            <h3 className="payment-item__title">Items details</h3>
                                            <p className="payment-item__desc">2 items</p>
                                        </div>
                                        <a href="/shipping" className="payment-item__detail">
                                            View details
                                        </a>
                                    </article>
                                </div>

                                <div className="cart-info">
                                    <h2 className="cart-info__heading cart-info__heading--lv2">2. Shipping method</h2>
                                    <div className="cart-info__separate"></div>
                                    <h3 className="cart-info__sub-heading">Available Shipping method</h3>

                                    {/* <!-- Payment item 3 --> */}
                                    <label>
                                        <article className="payment-item payment-item--pointer">
                                            <img
                                                src="/img/payment/delivery-1.png"
                                                alt=""
                                                className="payment-item__thumb"
                                            />
                                            <div className="payment-item__content">
                                                <h3 className="payment-item__title">Fedex Delivery</h3>
                                                <p className="payment-item__desc payment-item__desc--low">
                                                    Delivery: 2-3 days work
                                                </p>
                                            </div>
                                            <span className="cart-info__checkbox payment-item__checkbox">
                                                <input
                                                    type="radio"
                                                    name="delivery-method"
                                                    checked
                                                    className="cart-info__checkbox-input payment-item__checkbox-input"
                                                    id="fedex-delivery"
                                                    title="Select Fedex Delivery"
                                                />
                                                <span className="payment-item__cost">Free</span>
                                            </span>
                                        </article>
                                    </label>

                                    {/* <!-- Payment item 4 --> */}
                                    <label>
                                        <article className="payment-item payment-item--pointer">
                                            <img
                                                src="/img/payment/delivery-2.png"
                                                alt=""
                                                className="payment-item__thumb"
                                            />
                                            <div className="payment-item__content">
                                                <h3 className="payment-item__title">DHL Delivery</h3>
                                                <p className="payment-item__desc payment-item__desc--low">
                                                    Delivery: 2-3 days work
                                                </p>
                                            </div>
                                            <span className="cart-info__checkbox payment-item__checkbox">
                                                <input
                                                    type="radio"
                                                    name="delivery-method"
                                                    className="cart-info__checkbox-input payment-item__checkbox-input"
                                                    title="Select DHL Delivery"
                                                />
                                                <span className="payment-item__cost">$12.00</span>
                                            </span>
                                        </article>
                                    </label>
                                </div>
                            </div>
                            <div className="col-4 col-xl-12">
                                <div className="cart-info">
                                    <h2 className="cart-info__heading cart-info__heading--lv2">Payment Details</h2>
                                    <p className="cart-info__desc">
                                        Complete your purchase item by providing your payment details order.
                                    </p>
                                    <form action="" className="form cart-info__form">
                                        <div className="form__group">
                                            <label htmlFor="email" className="form__label form__label--medium">
                                                Email Address
                                            </label>
                                            <div className="form__text-input">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Email"
                                                    className="form__input"
                                                    required
                                                />
                                                <img
                                                    src="./assets/icons/form-error.svg"
                                                    alt=""
                                                    className="form__input-icon-error"
                                                />
                                            </div>
                                            <p className="form__error">Password must be at least 6 characters</p>
                                        </div>
                                        <div className="form__group">
                                            <label htmlFor="card-holder" className="form__label form__label--medium">
                                                Card Holder
                                            </label>
                                            <div className="form__text-input">
                                                <input
                                                    type="text"
                                                    name="card-holder"
                                                    id="card-holder"
                                                    placeholder="Card Holder"
                                                    className="form__input"
                                                    required
                                                />
                                                <img
                                                    src="./assets/icons/form-error.svg"
                                                    alt=""
                                                    className="form__input-icon-error"
                                                />
                                            </div>
                                            <p className="form__error">Password must be at least 6 characters</p>
                                        </div>
                                        <div className="form__group">
                                            <label htmlFor="card-details" className="form__label form__label--medium">
                                                Card Details
                                            </label>
                                            <div className="form__text-input">
                                                <input
                                                    type="text"
                                                    name="card-details"
                                                    id="card-details"
                                                    placeholder="Card Details"
                                                    className="form__input"
                                                    required
                                                />
                                                <img
                                                    src="./assets/icons/form-error.svg"
                                                    alt=""
                                                    className="form__input-icon-error"
                                                />
                                            </div>
                                            <p className="form__error">Password must be at least 6 characters</p>
                                        </div>
                                        <div className="form__row">
                                            <div className="form__group">
                                                <div className="form__text-input">
                                                    <input
                                                        type="text"
                                                        name="card-expire"
                                                        id="card-expire"
                                                        placeholder="MM/YY"
                                                        className="form__input"
                                                        required
                                                    />
                                                    <img
                                                        src="./assets/icons/form-error.svg"
                                                        alt=""
                                                        className="form__input-icon-error"
                                                    />
                                                </div>
                                                <p className="form__error">Password must be at least 6 characters</p>
                                            </div>
                                            <div className="form__group">
                                                <div className="form__text-input">
                                                    <input
                                                        type="text"
                                                        name="card-cvc"
                                                        id="card-cvc"
                                                        placeholder="CVC"
                                                        className="form__input"
                                                        required
                                                    />
                                                    <img
                                                        src="./assets/icons/form-error.svg"
                                                        alt=""
                                                        className="form__input-icon-error"
                                                    />
                                                </div>
                                                <p className="form__error">Password must be at least 6 characters</p>
                                            </div>
                                        </div>
                                    </form>
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
                    <div className="modal__text">Do you want to remove this item from shopping cart?</div>
                    <div className="modal__bottom">
                        <button
                            className="btn btn--small btn--text modal__btn js-toggle"
                            toggle-target="#delete-confirm"
                        >
                            Cancel
                        </button>
                        <button
                            className="btn btn--small btn--primary modal__btn btn--no-margin js-toggle"
                            toggle-target="#delete-confirm"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
                <div className="modal__overlay js-toggle" toggle-target="#delete-confirm"></div>
            </div>
            {/* <!-- Modal: address new shipping address --> */}
            <div
                id="add-new-address"
                className="modal show"
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
                                        className="form__input js-toggle"
                                        toggle-target="#city-dialog"
                                    />
                                    <img src="/icons/form-error.svg" alt="" className="form__input-icon-error" />
                                    <div id="city-dialog" className="form__select-dialog hide">
                                        <button
                                            className="form__close-dialog d-none d-sm-block js-toggle"
                                            toggle-target="#city-dialog"
                                        >
                                            &times;
                                        </button>
                                        <div className="form__search">
                                            <input type="text" placeholder="Search" className="form__search-input" />
                                            <img src="/icons/search.svg" alt="" className="form__search-icon icon" />
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
                            <button className="btn btn--small btn--primary modal__btn btn--no-margin">Create</button>
                        </div>
                    </form>
                </div>
                <div className="modal__overlay"></div>
            </div>
        </>
    );
}
