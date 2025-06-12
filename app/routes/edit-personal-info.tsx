import Footer from "~/layouts/footer";
import Header from "~/layouts/header-logined";
export default function EditPersonalInfo() {
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
                            <div className="col-3 col-xl-4 d-lg-none">
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
                            <div className="col-9 col-xl-8 col-lg-12">
                                <div className="cart-info">
                                    <div className="row gy-3">
                                        <div className="col-12">
                                            <h2 className="cart-info__heading">
                                                <a href="/profile">
                                                    <img
                                                        src="./assets/icons/arrow-left.svg"
                                                        alt=""
                                                        className="icon cart-info__back-arrow"
                                                    />
                                                </a>
                                                Personal info
                                            </h2>

                                            <form action="/profile" className="form form-card">
                                                {/* <!-- Form row 1 --> */}
                                                <div className="form__row">
                                                    <div className="form__group">
                                                        <label
                                                            htmlFor="full-name"
                                                            className="form__label form-card__label"
                                                        >
                                                            Full name
                                                        </label>
                                                        <div className="form__text-input">
                                                            <input
                                                                type="text"
                                                                name=""
                                                                id="full-name"
                                                                placeholder="Full name"
                                                                className="form__input"
                                                                required
                                                                autoFocus
                                                            />
                                                            <img
                                                                src="./assets/icons/form-error.svg"
                                                                alt=""
                                                                className="form__input-icon-error"
                                                            />
                                                        </div>
                                                        <p className="form__error">Please enter your full name</p>
                                                    </div>
                                                    <div className="form__group">
                                                        <label
                                                            htmlFor="email-adress"
                                                            className="form__label form-card__label"
                                                        >
                                                            Email address
                                                        </label>
                                                        <div className="form__text-input">
                                                            <input
                                                                type="text"
                                                                name=""
                                                                id="email-adress"
                                                                placeholder="Email address"
                                                                className="form__input"
                                                                required
                                                            />
                                                            <img
                                                                src="./assets/icons/form-error.svg"
                                                                alt=""
                                                                className="form__input-icon-error"
                                                            />
                                                        </div>
                                                        <p className="form__error">
                                                            Please enter a valid email address
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* <!-- Form row 2 --> */}
                                                <div className="form__row">
                                                    <div className="form__group">
                                                        <label
                                                            htmlFor="phone-number"
                                                            className="form__label form-card__label"
                                                        >
                                                            Phone Number
                                                        </label>
                                                        <div className="form__text-input">
                                                            <input
                                                                type="text"
                                                                name=""
                                                                id="phone-number"
                                                                placeholder="Phone Number"
                                                                className="form__input"
                                                                required
                                                            />
                                                            <img
                                                                src="./assets/icons/form-error.svg"
                                                                alt=""
                                                                className="form__input-icon-error"
                                                            />
                                                        </div>
                                                        <p className="form__error">Please enter a valid phone number</p>
                                                    </div>
                                                    <div className="form__group">
                                                        <label
                                                            htmlFor="passowrd"
                                                            className="form__label form-card__label"
                                                        >
                                                            Password
                                                        </label>
                                                        <div className="form__text-input">
                                                            <input
                                                                type="password"
                                                                name=""
                                                                id="passowrd"
                                                                placeholder="Password"
                                                                className="form__input"
                                                                required
                                                            />
                                                            <img
                                                                src="./assets/icons/form-error.svg"
                                                                alt=""
                                                                className="form__input-icon-error"
                                                            />
                                                        </div>
                                                        <p className="form__error">Please enter new password</p>
                                                    </div>
                                                </div>

                                                <div className="form-card__bottom">
                                                    <a className="btn btn--text" href="/profile">
                                                        Cancel
                                                    </a>
                                                    <button className="btn btn--primary btn--rounded">Save</button>
                                                </div>
                                            </form>
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
