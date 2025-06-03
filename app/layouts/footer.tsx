export default function Footer() {
    return (
        <div className="container">
            <div className="footer__row">
                {/* <!-- Footer column 1 --> */}
                <div className="footer__col">
                    {/* <!-- Logo --> */}
                    <a href="./" className="logo footer__logo">
                        <img src="/icons/logo.svg" alt="grocerymart" className="logo__img" />
                        <h1 className="logo__title"> HiepGrocery</h1>
                    </a>
                    <p className="footer__desc">
                        This is my personal e-commerce project, designed with a clean and balanced layout that supports
                        both light and dark modes for a flexible and user-friendly experience. The website features a
                        variety of useful content and essential functions to enhance the online shopping journey.
                    </p>

                    <p className="footer__help-text">Receive product news and updates.</p>
                    <form action="" className="footer__form">
                        <input type="text" className="footer__input" placeholder="Email address" />
                        <button className="btn btn--primary">SEND</button>
                    </form>
                </div>

                {/* <!-- Footer column 2 --> */}
                <div className="footer__col">
                    <h3 className="footer__heading">Shop</h3>
                    <ul className="footer__list">
                        <li>
                            <a href="#!" className="footer__link">
                                All Departments
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="footer__link">
                                Fashion Deals
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="footer__link">
                                Electronics Discounts
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="footer__link">
                                Home & Living Specials
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="footer__link">
                                Beauty Bargains
                            </a>
                        </li>
                    </ul>
                </div>

                {/* <!-- Footer column 3 --> */}
                <div className="footer__col">
                    <h3 className="footer__heading">Support</h3>
                    <ul className="footer__list">
                        <li>
                            <a href="#!" className="footer__link">
                                Store locator
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="footer__link">
                                Order status
                            </a>
                        </li>
                    </ul>
                </div>

                {/* <!-- Footer column 4 --> */}
                <div className="footer__col">
                    <h3 className="footer__heading">Company</h3>
                    <ul className="footer__list">
                        <li>
                            <a href="#!" className="footer__link">
                                Customer Service
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="footer__link">
                                Terms of Use
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="footer__link">
                                Privacy
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="footer__link">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="footer__link">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="footer__link">
                                Affiliates
                            </a>
                        </li>
                    </ul>
                </div>

                {/* <!-- Footer column 5 --> */}
                <div className="footer__col">
                    <h3 className="footer__heading">Contact</h3>
                    <ul className="footer__list">
                        <li>
                            <p className="footer__label">Email</p>
                            <a href="mailto:tranmanhhiepngo@gmail.com" className="footer__link">
                                {" "}
                                tranmanhhiepngo@gmail.com{" "}
                            </a>
                        </li>
                        <li>
                            <p className="footer__label">Hotline</p>
                            <a href="tel:4379919715" className="footer__link">
                                437-991-9715
                            </a>
                        </li>
                        <li>
                            <p className="footer__label">Address</p>
                            <p className="footer__text">Easton Center Shopping Mall</p>
                        </li>
                        <li>
                            <p className="footer__label">Hours</p>
                            <p className="footer__text">Mon - Fri :08:00am - 06:00pm</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <p className="footer__copyright">© 2025 Hiep Grocery. Developed by Ngo Tran Manh Hiep.</p>

                <div className="footer__socials">
                    <a href="#!" className="footer__social-link footer__social-link--facebook">
                        <img src="/icons/facebook.svg" alt="" className="footer__social-icon" />
                    </a>
                    <a href="#!" className="footer__social-link footer__social-link--youtube">
                        <img src="/icons/youtube.svg" alt="" className="footer__social-icon" />
                    </a>
                    <a href="#!" className="footer__social-link footer__social-link--tiktok">
                        <img src="/icons/tiktok.svg" alt="" className="footer__social-icon" />
                    </a>
                    <a href="#!" className="footer__social-link footer__social-link--twitter">
                        <img src="/icons/twitter.svg" alt="" className="footer__social-icon" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hiepngo01/"
                        className="footer__social-link footer__social-link--linkedin"
                    >
                        <img src="/icons/linkedin.svg" alt="" className="footer__social-icon" />
                    </a>
                    <a href="https://github.com/JayceNgo" className="footer__social-link footer__social-link--github">
                        <img src="/icons/github.svg" alt="" className="footer__social-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}
