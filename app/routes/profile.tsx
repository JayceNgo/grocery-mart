import Footer from "~/layouts/footer";
import Header from "~/layouts/header-logined";
export default function Profile() {
    return (
        <>
            <header className="header">
                <Header />
            </header>
            {/* <!-- MAIN --> */}
            <main className="profile">
                <div className="container">
                    {/* <!-- Search bar --> */}
                    <div className="profile-container">
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

                    {/* <!-- Profile content --> */}
                    <div className="profile-container">
                        <div className="row gy-md-3">
                            <div className="col-3 col-xl-4 col-lg-5 col-md-12">
                                <aside className="profile__sidebar">
                                    {/* <!-- User --> */}
                                    <div className="profile-user">
                                        <img src="/img/avatar.jpg" alt="" className="profile-user__avatar" />
                                        <h1 className="profile-user__name">Ngo Tran Manh Hiep</h1>
                                        <p className="profile-user__desc">Registered: 10th May 2025</p>
                                    </div>

                                    {/* <!-- Menu 1 --> */}
                                    <div className="profile-menu">
                                        <h3 className="profile-menu__title">Manage Account</h3>
                                        <ul className="profile-menu__list">
                                            <li>
                                                <a href="#!" className="profile-menu__link">
                                                    <span className="profile-menu__icon">
                                                        <img src="/icons/profile.svg" alt="" className="icon" />
                                                    </span>
                                                    Personal info
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="profile-menu__link">
                                                    <span className="profile-menu__icon">
                                                        <img src="/icons/location.svg" alt="" className="icon" />
                                                    </span>
                                                    Addresses
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="profile-menu__link">
                                                    <span className="profile-menu__icon">
                                                        <img src="/icons/message-2.svg" alt="" className="icon" />
                                                    </span>
                                                    Communications & privacy
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* <!-- Menu 2 --> */}
                                    <div className="profile-menu">
                                        <h3 className="profile-menu__title">My items</h3>
                                        <ul className="profile-menu__list">
                                            <li>
                                                <a href="#!" className="profile-menu__link">
                                                    <span className="profile-menu__icon">
                                                        <img src="/icons/download.svg" alt="" className="icon" />
                                                    </span>
                                                    Reorder
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="profile-menu__link">
                                                    <span className="profile-menu__icon">
                                                        <img src="/icons/heart.svg" alt="" className="icon" />
                                                    </span>
                                                    Lists
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="profile-menu__link">
                                                    <span className="profile-menu__icon">
                                                        <img src="/icons/gift-2.svg" alt="" className="icon" />
                                                    </span>
                                                    Registries
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* <!-- Menu 3 --> */}
                                    <div className="profile-menu">
                                        <h3 className="profile-menu__title">Subscriptions & plans</h3>
                                        <ul className="profile-menu__list">
                                            <li>
                                                <a href="#!" className="profile-menu__link">
                                                    <span className="profile-menu__icon">
                                                        <img src="/icons/shield.svg" alt="" className="icon" />
                                                    </span>
                                                    Protection plans
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* <!-- Menu 4 --> */}
                                    <div className="profile-menu">
                                        <h3 className="profile-menu__title">Customer Service</h3>
                                        <ul className="profile-menu__list">
                                            <li>
                                                <a href="#!" className="profile-menu__link">
                                                    <span className="profile-menu__icon">
                                                        <img src="/icons/info.svg" alt="" className="icon" />
                                                    </span>
                                                    Help
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="profile-menu__link">
                                                    <span className="profile-menu__icon">
                                                        <img src="/icons/danger.svg" alt="" className="icon" />
                                                    </span>
                                                    Terms of Use
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-9 col-xl-8 col-lg-7 col-md-12">
                                <div className="cart-info">
                                    <div className="row gy-3">
                                        {/* <!-- My Wallet --> */}
                                        <div className="col-12">
                                            <h2 className="cart-info__heading">My Wallet</h2>
                                            <p className="cart-info__desc profile__desc">Payment methods</p>

                                            <div className="row gy-md-2 row-cols-3 row-cols-xl-2 row-cols-lg-1">
                                                {/* <!-- Payment card 1 --> */}
                                                <div className="col">
                                                    <article
                                                        className="payment-card"
                                                        style={{ "--bg-color": "#1e2e69" } as React.CSSProperties}
                                                    >
                                                        <img
                                                            src="/img/card/plane-bg.svg"
                                                            alt=""
                                                            className="payment-card__img"
                                                        />
                                                        <div className="payment-card__top">
                                                            <img src="/img/card/plane.svg" alt="" />
                                                            <span className="payment-card__type">FeatherCard</span>
                                                        </div>
                                                        <div className="payment-card__number">1234 4567 8901 2221</div>
                                                        <div className="payment-card__bottom">
                                                            <div>
                                                                <p className="payment-card__label">Card Holder</p>
                                                                <p className="payment-card__value">Imran Khan</p>
                                                            </div>
                                                            <div className="payment-card__expired">
                                                                <p className="payment-card__label">Expired</p>
                                                                <p className="payment-card__value">10/22</p>
                                                            </div>
                                                            <div className="payment-card__circle"></div>
                                                        </div>
                                                    </article>
                                                </div>

                                                {/* <!-- Payment card 2 --> */}
                                                <div className="col">
                                                    <article
                                                        className="payment-card"
                                                        style={{ "--bg-color": "#354151" } as React.CSSProperties}
                                                    >
                                                        <img
                                                            src="/img/card/leaf-bg.svg"
                                                            alt=""
                                                            className="payment-card__img"
                                                        />
                                                        <div className="payment-card__top">
                                                            <img src="/img/card/leaf.svg" alt="" />
                                                            <span className="payment-card__type">FeatherCard</span>
                                                        </div>
                                                        <div className="payment-card__number">1234 4567 2221 8901</div>
                                                        <div className="payment-card__bottom">
                                                            <div>
                                                                <p className="payment-card__label">Card Holder</p>
                                                                <p className="payment-card__value">Imran Khan</p>
                                                            </div>
                                                            <div className="payment-card__expired">
                                                                <p className="payment-card__label">Expired</p>
                                                                <p className="payment-card__value">11/22</p>
                                                            </div>
                                                            <div className="payment-card__circle"></div>
                                                        </div>
                                                    </article>
                                                </div>

                                                {/* <!-- Add new payment card --> */}
                                                <div className="col">
                                                    <a className="new-card" href="/add-new-card">
                                                        <img
                                                            src="/icons/plus.svg"
                                                            alt=""
                                                            className="new-card__icon icon"
                                                        />
                                                        <p className="new-card__text">Add New Card</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <h2 className="cart-info__heading">Account info</h2>
                                            <p className="cart-info__desc profile__desc">
                                                Addresses, contact information and password
                                            </p>
                                            <div className="row gy-md-2 row-cols-2 row-cols-lg-1">
                                                {/* <!-- Account info 1 --> */}
                                                <div className="col">
                                                    <article className="account-info">
                                                        <div className="account-info__icon">
                                                            <img src="/icons/message.svg" alt="" className="icon" />
                                                        </div>
                                                        <div>
                                                            <h3 className="account-info__title">Email Address</h3>
                                                            <p className="account-info__desc">tarek97.ta@gmail.com</p>
                                                        </div>
                                                    </article>
                                                </div>

                                                {/* <!-- Account info 2 --> */}
                                                <div className="col">
                                                    <article className="account-info">
                                                        <div className="account-info__icon">
                                                            <img src="/icons/calling.svg" alt="" className="icon" />
                                                        </div>
                                                        <div>
                                                            <h3 className="account-info__title">Phone number</h3>
                                                            <p className="account-info__desc">+000 11122 2345 657</p>
                                                        </div>
                                                    </article>
                                                </div>

                                                {/* <!-- Account info 3 --> */}
                                                <div className="col">
                                                    <article className="account-info">
                                                        <div className="account-info__icon">
                                                            <img src="/icons/location.svg" alt="" className="icon" />
                                                        </div>
                                                        <div>
                                                            <h3 className="account-info__title">Add an address</h3>
                                                            <p className="account-info__desc">
                                                                Bangladesh Embassy, Washington, DC 20008
                                                            </p>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <h2 className="cart-info__heading">Lists</h2>
                                            <p className="cart-info__desc profile__desc">2 items - Primary</p>

                                            {/* <!-- Favourite item 1 --> */}
                                            <article className="favourite-item">
                                                <img
                                                    src="/img/product/item-1.png"
                                                    alt=""
                                                    className="favourite-item__thumb"
                                                />
                                                <div>
                                                    <h3 className="favourite-item__title">
                                                        Coffee Beans - Espresso Arabica and Robusta Beans
                                                    </h3>
                                                    <div className="favourite-item__content">
                                                        <span className="favourite-item__price">$47.00</span>
                                                        <button className="btn btn--primary btn--rounded">
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </article>

                                            <div
                                                className="separate"
                                                style={{ "--margin": "20px" } as React.CSSProperties}
                                            ></div>

                                            {/* <!-- Favourite item 2 --> */}
                                            <article className="favourite-item">
                                                <img
                                                    src="/img/product/item-2.png"
                                                    alt=""
                                                    className="favourite-item__thumb"
                                                />
                                                <div>
                                                    <h3 className="favourite-item__title">
                                                        Lavazza Coffee Blends - Try the Italian Espresso
                                                    </h3>
                                                    <div className="favourite-item__content">
                                                        <span className="favourite-item__price">$53.00</span>
                                                        <button className="btn btn--primary btn--rounded">
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </article>
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
