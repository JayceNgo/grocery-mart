// Component Header được định nghĩa
export default function Header() {
    return (
        <div className="container">
            <div className="top-bar">
                {/* <!-- More --> */}
                <button className="top-bar__more d-none d-lg-block js-toggle" toggle-target="#navbar">
                    <img src="/icons/more.svg" alt="" className="icon top-bar__more-icon" />
                </button>

                {/* <!-- Logo --> */}
                <a href="./" className="logo top-bar__logo">
                    <img src="/icons/logo.svg" alt="hiepgrocery" className="logo__img top-bar__logo-img" />
                    <h1 className="logo__title top-bar__logo-title">HiepGrocery</h1>
                </a>

                {/* <!-- Navbar --> */}
                <nav id="navbar" className="navbar hide">
                    <button className="navbar__close-btn js-toggle icon" toggle-target="#navbar">
                        <img className="icon" src="/icons/arrow-left.svg" alt="" />
                    </button>

                    <a href="" className="nav-btn d-none d-md-flex">
                        <img src="/icons/buy.svg" alt="" className="nav-btn__icon icon" />
                        <span className="nav-btn__title">Card</span>
                        <span className="nav-btn__qnt">3</span>
                    </a>

                    <a href="" className="nav-btn d-none d-md-flex">
                        <img src="/icons/heart.svg" alt="" className="nav-btn__icon icon" />
                        <span className="nav-btn__title">Favourite</span>
                        <span className="nav-btn__qnt">3</span>
                    </a>

                    <ul className="navbar__list js-dropdown-list">
                        {/* Departments Menu */}
                        <li className="navbar__item">
                            <a href="#!" className="navbar__link">
                                Departments
                                <img src="/icons/arrow-down.svg" alt="" className="icon navbar__arrow" />
                            </a>
                            <div className="dropdown js-dropdown">
                                <div className="dropdown__inner">
                                    <div className="top-menu">
                                        <div className="top-menu__main">
                                            {/* <!-- Menu column --> */}
                                            <div className="menu-column">
                                                <div className="menu-column__icon d-lg-none">
                                                    <img
                                                        src="/img/category/cate-1.1.svg"
                                                        alt=""
                                                        className="menu-column__icon-1"
                                                    />
                                                    <img
                                                        src="/img/category/cate-1.2.svg"
                                                        alt=""
                                                        className="menu-column__icon-2"
                                                    />
                                                </div>
                                                <div className="menu-column__content">
                                                    <h2 className="menu-column__heading d-lg-none">All Departments</h2>
                                                    <ul className="menu-column__list js-menu-list">
                                                        <li className="menu-column__item">
                                                            <a href="#!" className="menu-column__link">
                                                                Savings & Featured Shops
                                                            </a>
                                                            {/* <!-- Sub menu for "Savings & Featured Shops" --> */}
                                                            <div className="sub-menu">
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-4.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-4.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Fashion Deals</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Clothing
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Shoes
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Accessories
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bags
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Jewelry
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-2.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-2.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Electronics Discounts</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Smartphones
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Laptops
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Headphones
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Cameras
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Tablets
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Speakers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wearable Tech
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-1.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-1.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Home & Living Specials</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Furniture
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Kitchenware
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Decor
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bedding
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Appliances
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Lighting
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Outdoor Furniture
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Home Office
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bathroom
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Storage
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Cleaning Supplies
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-6.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-6.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Beauty Bargains</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Skincare
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Makeup
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Haircare
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Fragrances
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Nail Care
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Beauty Tools
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Men's Grooming
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-5.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-5.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Sports & Outdoors Deals</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Fitness Equipment
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Outdoor Gear
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Sportswear
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Camping
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Biking
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a href="#!" className="menu-column__link">
                                                                Electronics
                                                            </a>
                                                            {/* <!-- Sub menu for "Electronics" --> */}
                                                            <div className="sub-menu">
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-2.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-2.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">TV & Video</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Shop all TVs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        TVs by Size
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Smart TVs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Roku TVs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Streaming
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        TV Mounts & Accessories
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        DVD & Blu-Ray Players
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-3.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-3.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Wearable Technology</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Galaxy Watch
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Apple Watch
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Fitness Trackers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Virtual Reality
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Headphones
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-4.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-4.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Computers</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Shop All Computers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Laptops
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        PC Gaming
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Monitors
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Chromebook
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Printers & Ink
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Shop all TVs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Computer Accessories
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Desktops
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Tax Software
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Computer Software
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        PC Finder
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-5.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-5.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Savings</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Tech Savings
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Overstock Savings
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Tech Rollbacks
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-6.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-6.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Cell Phones</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wireless Deals
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        5G Phones
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Prepaid Phones & Plans
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Refurbished Phones
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        iPhone Accessories
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Cases & Screen Protectors
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Walmart Protection Plan
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Unlocked Phones
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a href="#!" className="menu-column__link">
                                                                Clothing, Shoes & Accessories
                                                            </a>
                                                            {/* <!-- Sub menu for "Clothing, Shoes & Accessories" --> */}
                                                            <div className="sub-menu">
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-5.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-5.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Men's Clothing</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Casual Shirts
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Formal Suits
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Jeans & Pants
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Outerwear
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        T-Shirts
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-4.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-4.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Women's Clothing</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Dresses
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Skirts
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Blouses & Tops
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Handbags
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Coats & Jackets
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-3.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-3.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Footwear</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Men's Shoes
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Women's Shoes
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Kids' Shoes
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Sneakers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Boots
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Sandals
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-2.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-2.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Fashion Accessories</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Belts
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Hats & Caps
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Scarves
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Gloves
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Sunglasses
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Watches
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-6.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-6.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Seasonal Specials</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Winter Wear
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Summer Outfits
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Rain Gear
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Holiday Collection
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Gift Sets
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a href="#!" className="menu-column__link">
                                                                Home, Furniture & Appliances
                                                            </a>
                                                            {/* <!-- Sub menu for "Home, Furniture & Appliancess" --> */}
                                                            <div className="sub-menu">
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-6.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-6.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Living Room</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Sofa Sets
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Coffee Tables
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        TV Units
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Book Shelves
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wall Decor
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-5.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-5.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Kitchen Appliances</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Microwave Ovens
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Dishwashers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Gas Stoves
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Refrigerators
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Blenders
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* <!-- Sub-Menu Column 3: Bedroom --> */}
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-4.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-4.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Bedroom</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Beds
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wardrobes
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Dressing Tables
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Nightstands
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Mattresses
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* <!-- Sub-Menu Column 4: Home Decor --> */}
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-3.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-3.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Home Decor</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wall Art
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Vases
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Light Fixtures
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Curtains
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Carpets
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-2.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-2.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Office Furniture</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Office Chairs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Desks
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Cabinets
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Meeting Tables
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bookcases
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a href="#!" className="menu-column__link">
                                                                Toys & Video Games
                                                            </a>
                                                            {/* <!-- Sub menu for "Toys & Video Games" --> */}
                                                            <div className="sub-menu">
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-2.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-2.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Action Figures</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Superheroes
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Anime Figures
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Movie Characters
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Collectibles
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Robots
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-4.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-4.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Video Games</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Console Games
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        PC Games
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Mobile Games
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Virtual Reality
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Game Accessories
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* <!-- Sub-Menu Column 3: Educational Toys --> */}
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-3.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-3.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Educational Toys</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        STEM Kits
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Puzzles
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Books
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Art Supplies
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Learning Tablets
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-5.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-5.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Outdoor Toys</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Ride-Ons
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Scooters
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bicycles
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Sports Gear
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Swimming Pools
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* <!-- Sub-Menu Column 5: Dolls & Plush --> */}
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-6.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-6.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Dolls & Plush</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Fashion Dolls
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Animal Plush
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Character Dolls
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Interactive Dolls
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Collectibles
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a href="#!" className="menu-column__link">
                                                                Home Improvement
                                                            </a>
                                                            {/* <!-- Sub menu for "Home Improvement" --> */}
                                                            <div className="sub-menu">
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-4.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-4.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Bathroom Upgrades</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Shower Heads
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Vanity Units
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bath Tubs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Tile Options
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bathroom Lighting
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Cabinet Designs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Countertops
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Kitchen Islands
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Backsplash Options
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Appliance Upgrades
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-1.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-1.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Flooring Solutions</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Hardwood Flooring
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Tile Flooring
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Laminate Options
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Carpet Choices
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Vinyl Flooring
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-2.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-2.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Outdoor Improvements</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Deck Designs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Patio Ideas
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Landscaping
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Garden Decor
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Outdoor Lighting
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-6.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-6.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Paint & Wallpaper</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wall Paints
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Primers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wallpapers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Stencils
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Paint Brushes
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-5.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-5.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Lighting & Fixtures</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Ceiling Lights
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wall Lamps
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Outdoor Lights
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Chandeliers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Table Lamps
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a href="#!" className="menu-column__link">
                                                                Baby
                                                            </a>
                                                            {/* <!-- Sub menu for "Baby" --> */}
                                                            <div className="sub-menu">
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-6.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-6.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Baby Clothing</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Newborn Sets
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Baby Dresses
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Rompers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Shoes
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Accessories
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-5.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-5.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Feeding Essentials</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bottles
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        High Chairs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Sterilizers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bibs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Sippy Cups
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-4.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-4.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Diapering</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Diapers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wipes
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Changing Tables
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Pails & Refills
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Creams & Ointments
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-3.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-3.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Nursery</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Cribs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bedding Sets
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Decor
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Monitors
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Storage
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-2.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-2.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Toys & Books</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Educational Toys
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Soft Toys
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Activity Toys
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Books
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Puzzles
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Thermometers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Baby Gates
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Humidifiers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        First Aid
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Vitamins & Supplements
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a href="#!" className="menu-column__link">
                                                                Household Essentials
                                                            </a>
                                                            {/* <!-- Sub menu for "Household Essentials" --> */}
                                                            <div className="sub-menu">
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-4.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-4.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Fashion Deals</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Clothing
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Shoes
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Accessories
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bags
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Jewelry
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-2.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-2.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Electronics Discounts</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Smartphones
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Laptops
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Headphones
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Cameras
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Tablets
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Speakers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wearable Tech
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-1.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-1.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Home & Living Specials</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Furniture
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Kitchenware
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Decor
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bedding
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Appliances
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Lighting
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Outdoor Furniture
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Home Office
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bathroom
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Storage
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Cleaning Supplies
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-6.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-6.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Beauty Bargains</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Skincare
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Makeup
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Haircare
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Fragrances
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Nail Care
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Beauty Tools
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Men's Grooming
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-5.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-5.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Sports & Outdoors Deals</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Fitness Equipment
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Outdoor Gear
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Sportswear
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Camping
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Biking
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a href="#!" className="menu-column__link">
                                                                Personal Care
                                                            </a>
                                                            {/* <!-- Sub menu for "Personal Care" --> */}
                                                            <div className="sub-menu">
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-2.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-2.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">TV & Video</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Shop all TVs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        TVs by Size
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Smart TVs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Roku TVs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Streaming
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        TV Mounts & Accessories
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        DVD & Blu-Ray Players
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-3.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-3.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Wearable Technology</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Galaxy Watch
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Apple Watch
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Fitness Trackers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Virtual Reality
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Headphones
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-4.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-4.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Computers</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Shop All Computers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Laptops
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        PC Gaming
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Monitors
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Chromebook
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Printers & Ink
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Shop all TVs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Computer Accessories
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Desktops
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Tax Software
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Computer Software
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        PC Finder
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-5.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-5.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Savings</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Tech Savings
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Overstock Savings
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Tech Rollbacks
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-6.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-6.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Cell Phones</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wireless Deals
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        5G Phones
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Prepaid Phones & Plans
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Refurbished Phones
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        iPhone Accessories
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Cases & Screen Protectors
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Walmart Protection Plan
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Unlocked Phones
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a href="#!" className="menu-column__link">
                                                                Patio & Garden
                                                            </a>
                                                            {/* <!-- Sub menu for "Patio & Garden" --> */}
                                                            <div className="sub-menu">
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-5.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-5.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Men's Clothing</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Casual Shirts
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Formal Suits
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Jeans & Pants
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Outerwear
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        T-Shirts
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-4.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-4.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Women's Clothing</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Dresses
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Skirts
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Blouses & Tops
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Handbags
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Coats & Jackets
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-3.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-3.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Footwear</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Men's Shoes
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Women's Shoes
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Kids' Shoes
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Sneakers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Boots
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Sandals
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-2.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-2.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Fashion Accessories</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Belts
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Hats & Caps
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Scarves
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Gloves
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Sunglasses
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Watches
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-6.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-6.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Seasonal Specials</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Winter Wear
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Summer Outfits
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Rain Gear
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Holiday Collection
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Gift Sets
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a href="#!" className="menu-column__link">
                                                                Sports & Outdoors
                                                            </a>
                                                            {/* <!-- Sub menu for "Sports & Outdoors" --> */}
                                                            <div className="sub-menu">
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-6.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-6.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Living Room</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Sofa Sets
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Coffee Tables
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        TV Units
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Book Shelves
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wall Decor
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-5.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-5.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Kitchen Appliances</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Microwave Ovens
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Dishwashers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Gas Stoves
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Refrigerators
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Blenders
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-4.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-4.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Bedroom</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Beds
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wardrobes
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Dressing Tables
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Nightstands
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Mattresses
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-3.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-3.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Home Decor</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wall Art
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Vases
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Light Fixtures
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Curtains
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Carpets
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-2.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-2.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Office Furniture</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Office Chairs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Desks
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Cabinets
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Meeting Tables
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bookcases
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a href="#!" className="menu-column__link">
                                                                Gift Cards
                                                            </a>
                                                            {/* <!-- Sub menu for "Gift Cards" --> */}
                                                            <div className="sub-menu">
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-2.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-2.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Action Figures</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Superheroes
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Anime Figures
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Movie Characters
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Collectibles
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Robots
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-4.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-4.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Video Games</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Console Games
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        PC Games
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Mobile Games
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Virtual Reality
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Game Accessories
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-3.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-3.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Educational Toys</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        STEM Kits
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Puzzles
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Books
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Art Supplies
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Learning Tablets
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-5.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-5.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Outdoor Toys</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Ride-Ons
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Scooters
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bicycles
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Sports Gear
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Swimming Pools
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-6.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-6.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Dolls & Plush</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Fashion Dolls
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Animal Plush
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Character Dolls
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Interactive Dolls
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Collectibles
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a href="#!" className="menu-column__link">
                                                                Auto, Tires and Industrial
                                                            </a>
                                                            {/* <!-- Sub menu for "Auto, Tires and Industrial" --> */}
                                                            <div className="sub-menu">
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-4.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-4.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Bathroom Upgrades</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Shower Heads
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Vanity Units
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bath Tubs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Tile Options
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bathroom Lighting
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Cabinet Designs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Countertops
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Kitchen Islands
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Backsplash Options
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Appliance Upgrades
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-1.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-1.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Flooring Solutions</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Hardwood Flooring
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Tile Flooring
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Laminate Options
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Carpet Choices
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Vinyl Flooring
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-2.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-2.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Outdoor Improvements</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Deck Designs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Patio Ideas
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Landscaping
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Garden Decor
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Outdoor Lighting
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-6.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-6.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Paint & Wallpaper</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wall Paints
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Primers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wallpapers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Stencils
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Paint Brushes
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-5.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-5.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Lighting & Fixtures</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Ceiling Lights
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wall Lamps
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Outdoor Lights
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Chandeliers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Table Lamps
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="menu-column__item">
                                                            <a href="#!" className="menu-column__link">
                                                                Movies, Music & Books
                                                            </a>
                                                            {/* <!-- Sub menu for "Movies, Music & Books" --> */}
                                                            <div className="sub-menu">
                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-6.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-6.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Baby Clothing</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Newborn Sets
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Baby Dresses
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Rompers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Shoes
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Accessories
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-5.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-5.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Feeding Essentials</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bottles
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        High Chairs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Sterilizers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bibs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Sippy Cups
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-4.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-4.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Diapering</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Diapers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Wipes
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Changing Tables
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Pails & Refills
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Creams & Ointments
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    {/* <!-- Menu column 2 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-3.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-3.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Nursery</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Cribs
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Bedding Sets
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Decor
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Monitors
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Storage
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sub-menu__column">
                                                                    {/* <!-- Menu column 1 --> */}
                                                                    <div className="menu-column">
                                                                        <div className="menu-column__icon">
                                                                            <img
                                                                                src="/img/category/cate-2.1.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-1"
                                                                            />
                                                                            <img
                                                                                src="/img/category/cate-2.2.svg"
                                                                                alt=""
                                                                                className="menu-column__icon-2"
                                                                            />
                                                                        </div>
                                                                        <div className="menu-column__content">
                                                                            <h2 className="menu-column__heading">
                                                                                <a href="#!">Toys & Books</a>
                                                                            </h2>
                                                                            <ul className="menu-column__list">
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Educational Toys
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Soft Toys
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Activity Toys
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Books
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Puzzles
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Thermometers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Baby Gates
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Humidifiers
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        First Aid
                                                                                    </a>
                                                                                </li>
                                                                                <li className="menu-column__item">
                                                                                    <a
                                                                                        href="#!"
                                                                                        className="menu-column__link"
                                                                                    >
                                                                                        Vitamins & Supplements
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* Grocery Menu */}
                        <li className="navbar__item">
                            <a href="#!" className="navbar__link">
                                Grocery
                                <img src="/icons/arrow-down.svg" alt="" className="icon navbar__arrow" />
                            </a>
                            <div className="dropdown js-dropdown">
                                <div className="dropdown__inner">
                                    <div className="top-menu">
                                        <div className="sub-menu sub-menu--not-main">
                                            <div className="sub-menu__column">
                                                {/* <!-- Menu column 1 --> */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src="/img/category/cate-4.1.svg"
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src="/img/category/cate-4.2.svg"
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">Fashion Deals</a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Bags
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Jewelry
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* <!-- Menu column 2 --> */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src="/img/category/cate-2.1.svg"
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src="/img/category/cate-2.2.svg"
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">Electronics Discounts</a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Smartphones
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Laptops
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Headphones
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Cameras
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Tablets
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Speakers
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Wearable Tech
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sub-menu__column">
                                                {/* <!-- Menu column 3 --> */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src="/img/category/cate-1.1.svg"
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src="/img/category/cate-1.2.svg"
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">Home & Living Specials</a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Furniture
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Kitchenware
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Decor
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Bedding
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Appliances
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Lighting
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Outdoor Furniture
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Home Office
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Bathroom
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Storage
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Cleaning Supplies
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sub-menu__column">
                                                {/* <!-- Menu column 1 --> */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src="/img/category/cate-6.1.svg"
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src="/img/category/cate-6.2.svg"
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">Beauty Bargains</a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Skincare
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Makeup
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Haircare
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Fragrances
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Nail Care
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Beauty Tools
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Men's Grooming
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* <!-- Menu column 2 --> */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src="/img/category/cate-5.1.svg"
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src="/img/category/cate-5.2.svg"
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">Sports & Outdoors Deals</a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Fitness Equipment
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Outdoor Gear
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Sportswear
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Camping
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Biking
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sub-menu__column">
                                                {/* <!-- Menu column 1 --> */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src="/img/category/cate-4.1.svg"
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src="/img/category/cate-4.2.svg"
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">Fashion Deals</a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Bags
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Jewelry
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* <!-- Menu column 2 --> */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src="/img/category/cate-2.1.svg"
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src="/img/category/cate-2.2.svg"
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">Electronics Discounts</a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Smartphones
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Laptops
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Headphones
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Cameras
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Tablets
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Speakers
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Wearable Tech
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* Beauty Menu */}
                        <li className="navbar__item">
                            <a href="#!" className="navbar__link">
                                Beauty
                                <img src="/icons/arrow-down.svg" alt="" className="icon navbar__arrow" />
                            </a>
                            <div className="dropdown js-dropdown">
                                <div className="dropdown__inner">
                                    <div className="top-menu">
                                        <div className="sub-menu sub-menu--not-main">
                                            <div className="sub-menu__column">
                                                {/* <!-- Menu column 1 --> */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src="/img/category/cate-4.1.svg"
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src="/img/category/cate-4.2.svg"
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">Bathroom Upgrades</a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Shower Heads
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Vanity Units
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Bath Tubs
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Tile Options
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Bathroom Lighting
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Cabinet Designs
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Countertops
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Kitchen Islands
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Backsplash Options
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Appliance Upgrades
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sub-menu__column">
                                                {/* <!-- Menu column 1 --> */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src="/img/category/cate-1.1.svg"
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src="/img/category/cate-1.2.svg"
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">Flooring Solutions</a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Hardwood Flooring
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Tile Flooring
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Laminate Options
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Carpet Choices
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Vinyl Flooring
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* <!-- Menu column 2 --> */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src="/img/category/cate-2.1.svg"
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src="/img/category/cate-2.2.svg"
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">Outdoor Improvements</a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Deck Designs
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Patio Ideas
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Landscaping
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Garden Decor
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Outdoor Lighting
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sub-menu__column">
                                                {/* <!-- Menu column 1 --> */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src="/img/category/cate-6.1.svg"
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src="/img/category/cate-6.2.svg"
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">Paint & Wallpaper</a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Wall Paints
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Primers
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Wallpapers
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Stencils
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Paint Brushes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* <!-- Menu column 2 --> */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src="/img/category/cate-5.1.svg"
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src="/img/category/cate-5.2.svg"
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">Lighting & Fixtures</a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Ceiling Lights
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Wall Lamps
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Outdoor Lights
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Chandeliers
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Table Lamps
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sub-menu__column">
                                                {/* <!-- Menu column 1 --> */}
                                                <div className="menu-column">
                                                    <div className="menu-column__icon">
                                                        <img
                                                            src="/img/category/cate-4.1.svg"
                                                            alt=""
                                                            className="menu-column__icon-1"
                                                        />
                                                        <img
                                                            src="/img/category/cate-4.2.svg"
                                                            alt=""
                                                            className="menu-column__icon-2"
                                                        />
                                                    </div>
                                                    <div className="menu-column__content">
                                                        <h2 className="menu-column__heading">
                                                            <a href="#!">Bathroom Upgrades</a>
                                                        </h2>
                                                        <ul className="menu-column__list">
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Shower Heads
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Vanity Units
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Bath Tubs
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Tile Options
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Bathroom Lighting
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Cabinet Designs
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Countertops
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Kitchen Islands
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Backsplash Options
                                                                </a>
                                                            </li>
                                                            <li className="menu-column__item">
                                                                <a href="#!" className="menu-column__link">
                                                                    Appliance Upgrades
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>

                <div className="navbar__overlay js-toggle" toggle-target="#navbar"></div>

                {/* <!-- Actions --> */}
                <div className="top-act">
                    <div className="top-act__group top-act__group--single">
                        <button className="top-act__btn">
                            <img src="/icons/search.svg" alt="" className="icon top-act__icon" />
                        </button>
                    </div>

                    <div className="top-act__group d-md-none">
                        <button className="top-act__btn">
                            <img src="/icons/heart.svg" alt="" className="icon top-act__icon" />
                            <span className="top-act__title">03</span>
                        </button>

                        <div className="top-act__separate"></div>

                        <button className="top-act__btn">
                            <img src="/icons/buy.svg" alt="" className="icon top-act__icon" />
                            <span className="top-act__title">$65.42</span>

                            {/* <!-- Dropdown --> */}
                            <div className="act-dropdown">
                                <div className="act-dropdown__inner">
                                    <div className="act-dropdown__top">
                                        <h2 className="act-dropdown__title">You have 3 item</h2>
                                        <a href="#!" className="act-dropdown__view-all">
                                            See All
                                        </a>
                                    </div>
                                    <div className="row row-cols-3 gx-2 act-dropdown__list">
                                        {/* <!-- Cart preview item 1 --> */}
                                        <div className="col">
                                            <article className="cart-preview-item">
                                                <div className="cart-preview-item__img-wrap">
                                                    <img
                                                        src="/img/product/item-1.png"
                                                        alt=""
                                                        className="cart-preview-item__thumb"
                                                    />
                                                </div>
                                                <h3 className="cart-preview-item__title">Lavazza Coffee Blends</h3>
                                                <p className="cart-preview-item__price">$329.00</p>
                                            </article>
                                        </div>

                                        {/* <!-- Cart preview item 2 --> */}
                                        <div className="col">
                                            <article className="cart-preview-item">
                                                <div className="cart-preview-item__img-wrap">
                                                    <img
                                                        src="/img/product/item-2.png"
                                                        alt=""
                                                        className="cart-preview-item__thumb"
                                                    />
                                                </div>
                                                <h3 className="cart-preview-item__title">Coffee Beans Espresso</h3>
                                                <p className="cart-preview-item__price">$39.99</p>
                                            </article>
                                        </div>

                                        {/* <!-- Cart preview item 3 --> */}
                                        <div className="col">
                                            <article className="cart-preview-item">
                                                <div className="cart-preview-item__img-wrap">
                                                    <img
                                                        src="/img/product/item-3.png"
                                                        alt=""
                                                        className="cart-preview-item__thumb"
                                                    />
                                                </div>
                                                <h3 className="cart-preview-item__title">Qualità Oro Mountain</h3>
                                                <p className="cart-preview-item__price">$47.00</p>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="act-dropdown__bottom">
                                        <div className="act-dropdown__row">
                                            <span className="act-dropdown__label">Subtotal:</span>
                                            <span className="act-dropdown__value">$415.99</span>
                                        </div>
                                        <div className="act-dropdown__row">
                                            <span className="act-dropdown__label">Texes:</span>
                                            <span className="act-dropdown__value">Free</span>
                                        </div>
                                        <div className="act-dropdown__row">
                                            <span className="act-dropdown__label">Shipping:</span>
                                            <span className="act-dropdown__value">$10.00</span>
                                        </div>
                                        <div className="act-dropdown__row act-dropdown__row--bold">
                                            <span className="act-dropdown__label">Total Price</span>
                                            <span className="act-dropdown__value">$425.99</span>
                                        </div>
                                    </div>
                                    <div className="act-dropdown__checkout">
                                        <a
                                            href="#!"
                                            className="btn btn--primary btn--rounded act-dropdown__checkout-btn"
                                        >
                                            Check Out All
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    <div className="top-act__user">
                        <img src="/img/avatar.jpg" alt="" className="top-act__avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
}
