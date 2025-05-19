export default function Header() {
    return (
        <div className="top-bar">
            {/* <!-- More --> */}
            <button className="top-bar__more" title="menu-button">
                <img
                    src="/icons/more.svg"
                    alt=""
                    className="icon top-bar__more-icon"
                />
            </button>

            {/* <!-- Logo --> */}
            <a href="/" className="logo">
                <img
                    src="/icons/logo.svg"
                    alt="grocerymart"
                    className="logo__img"
                />
                <h1 className="logo__title">grocerymart</h1>
            </a>

            {/* <!-- Navbar --> */}
            <nav className="navbar">
                <ul className="navbar__list">
                    <li>
                        <a href="" className="navbar__link">
                            Departments
                            <img
                                src="/icons/arrow-down.svg"
                                alt=""
                                className="icon navbar__arrow"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="" className="navbar__link">
                            Grocery
                            <img
                                src="/icons/arrow-down.svg"
                                alt=""
                                className="icon navbar__arrow"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="" className="navbar__link">
                            Beauty
                            <img
                                src="/icons/arrow-down.svg"
                                alt=""
                                className="icon navbar__arrow"
                            />
                        </a>
                    </li>
                </ul>
            </nav>

            {/* <!-- Actions --> */}
            <div className="top-act">
                <div className="top-act__group top-act__group--single">
                    <button className="top-act__btn" title="Search">
                        <img
                            src="/icons/search.svg"
                            alt="Search"
                            className="icon top-act__icon"
                        />
                    </button>
                </div>

                <div className="top-act__group">
                    <button className="top-act__btn" title="Heart">
                        <img
                            src="/icons/heart.svg"
                            alt=""
                            className="icon top-act__icon"
                        />
                        <span className="top-act__title">03</span>
                    </button>

                    <div className="top-act__separate"></div>

                    <button className="top-act__btn" title="Buy">
                        <img
                            src="/icons/buy.svg"
                            alt=""
                            className="icon top-act__icon"
                        />
                        <span className="top-act__title">$65.42</span>
                    </button>
                </div>

                <div className="top-act__user">
                    <img
                        src="/img/avatar.jpg"
                        alt=""
                        className="top-act__avatar"
                    />
                </div>
            </div>
        </div>
    );
}
