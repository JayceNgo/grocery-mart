import { useEffect } from "react";
export default function Header() {
    useEffect(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        function isHidden(element: Element | null): boolean {
            if (!element) return true;
            if (window.getComputedStyle(element).display === "none")
                return true;
            let parent = element.parentElement;
            while (parent) {
                if (window.getComputedStyle(parent).display === "none")
                    return true;
                parent = parent.parentElement;
            }
            return false;
        }

        function debounce<T extends (...args: any[]) => void>(
            func: T,
            timeout = 0
        ) {
            let timer: ReturnType<typeof setTimeout>;
            return (...args: Parameters<T>) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func.apply(null, args);
                }, timeout);
            };
        }

        const calArrowPos = debounce(() => {
            const dropdownList = $(".js-dropdown-list");
            if (isHidden(dropdownList)) return;

            const items = $$(".js-dropdown-list > li");
            items.forEach((item) => {
                const arrowPos =
                    (item as HTMLElement).offsetLeft +
                    (item as HTMLElement).offsetWidth / 2;
                (item as HTMLElement).style.setProperty(
                    "--arrow-left-pos",
                    `${arrowPos}px`
                );
            });
        });

        window.addEventListener("resize", calArrowPos);
        window.addEventListener("template-loaded", calArrowPos);

        // Gọi ngay lập tức nếu không dùng template
        calArrowPos();

        return () => {
            window.removeEventListener("resize", calArrowPos);
            window.removeEventListener("template-loaded", calArrowPos);
        };
    }, []);

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
                <ul className="navbar__list js-dropdown-list">
                    <li className="navbar__item">
                        <a href="" className="navbar__link">
                            Departments
                            <img
                                src="/icons/arrow-down.svg"
                                alt=""
                                className="icon navbar__arrow"
                            />
                        </a>
                        <div className="dropdown">
                            <div className="dropdown__inner">
                                <div className="top-menu">
                                    <div className="top-menu__main">
                                        {/* Menu column */}
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
                                                    All Departments
                                                </h2>
                                                <ul className="menu-column__list">
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            Savings & Featured
                                                            Shops
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            Electronics
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            Clothing, Shoes &
                                                            Accessories
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            Home, Furniture &
                                                            Appliances
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            Toys & Video Games
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            Home Improvement
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            Baby
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            Household Essentials
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            Personal Care
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            Patio & Garden
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            Sports & Outdoors
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            Gift Cards
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            Auto, Tires and
                                                            Industrial
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            className="menu-column__link"
                                                        >
                                                            Movies, Music &
                                                            Books
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="navbar__item">
                        <a href="" className="navbar__link">
                            Grocery
                            <img
                                src="/icons/arrow-down.svg"
                                alt=""
                                className="icon navbar__arrow"
                            />
                        </a>
                        {/* <div className="dropdown">
                            <div className="dropdown__inner">
                                Lorem 2 ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsam maiores amet hic! Velit
                                obcaecati quidem, necessitatibus hic inventore
                                cumque quae impedit aspernatur accusantium,
                                pariatur eaque nostrum omnis, perspiciatis
                                suscipit culpa?
                            </div>
                        </div> */}
                    </li>
                    <li className="navbar__item">
                        <a href="" className="navbar__link">
                            Beauty
                            <img
                                src="/icons/arrow-down.svg"
                                alt=""
                                className="icon navbar__arrow"
                            />
                        </a>
                        {/* <div className="dropdown">
                            <div className="dropdown__inner">
                                Lorem 3 ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsam maiores amet hic! Velit
                                obcaecati quidem, necessitatibus hic inventore
                                cumque quae impedit aspernatur accusantium,
                                pariatur eaque nostrum omnis, perspiciatis
                                suscipit culpa?
                            </div>
                        </div> */}
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
