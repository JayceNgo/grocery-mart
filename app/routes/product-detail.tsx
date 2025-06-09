import Header from "~/layouts/header-logined";
import Footer from "~/layouts/footer";
export default function ProductDetail() {
    return (
        <>
            <header className="header">
                <Header></Header>
            </header>
            <main className="product-page">
                <div className="container">
                    {/* <!-- Breadcrumbs --> */}
                    <div className="product-container">
                        <ul className="breadcrumbs">
                            <li>
                                <a href="#!" className="breadcrumbs__link">
                                    Departments
                                    <img src="/icons/arrow-right.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="breadcrumbs__link">
                                    Coffee
                                    <img src="/icons/arrow-right.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="breadcrumbs__link">
                                    Coffee Beans
                                    <img src="/icons/arrow-right.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="breadcrumbs__link breadcrumbs__link--current">
                                    LavAzza
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Product info --> */}
                    <div className="product-container">
                        <div className="row">
                            <div className="col-5">
                                <div className="prod-preview">
                                    <div className="prod-preview__list">
                                        <div className="prod-preview__item">
                                            <img src="/img/product/item-1.png" alt="" className="prod-preview__img" />
                                        </div>
                                        <div className="prod-preview__item">
                                            <img src="/img/product/item-2.png" alt="" className="prod-preview__img" />
                                        </div>
                                        <div className="prod-preview__item">
                                            <img src="/img/product/item-3.png" alt="" className="prod-preview__img" />
                                        </div>
                                        <div className="prod-preview__item">
                                            <img src="/img/product/item-4.png" alt="" className="prod-preview__img" />
                                        </div>
                                    </div>
                                    <div className="prod-preview__thumbs">
                                        <img
                                            src="/img/product/item-1.png"
                                            alt=""
                                            className="prod-preview__thumb-img prod-preview__thumb-img--current"
                                        />
                                        <img src="/img/product/item-2.png" alt="" className="prod-preview__thumb-img" />
                                        <img src="/img/product/item-3.png" alt="" className="prod-preview__thumb-img" />
                                        <img src="/img/product/item-4.png" alt="" className="prod-preview__thumb-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <form action="" className="form">
                                    <section className="prod-info">
                                        <h1 className="prod-info__heading">
                                            Coffee Beans - Espresso Arabica and Robusta Beans
                                        </h1>
                                        <div className="row">
                                            <div className="col-5">
                                                <div className="prod-prop">
                                                    <img src="/icons/star.svg" alt="" className="prod-prop__icon" />
                                                    <h4 className="prod-prop__title">(3.5) 1100 reviews</h4>
                                                </div>
                                                <label htmlFor="" className="form__label prod-info__label">
                                                    Size/Weight
                                                </label>
                                                <div className="filter__form-group">
                                                    <div className="form__select-wrap">
                                                        <div
                                                            className="form__select"
                                                            style={{ "--width": "146px" } as React.CSSProperties}
                                                        >
                                                            500g
                                                            <img
                                                                src="/icons/select-arrow.svg"
                                                                alt=""
                                                                className="form__select-arrow icon"
                                                            />
                                                        </div>
                                                        <div className="form__select">
                                                            Gram
                                                            <img
                                                                src="/icons/select-arrow.svg"
                                                                alt=""
                                                                className="form__select-arrow icon"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter__form-group">
                                                    <div className="form__tags">
                                                        <button className="form__tag">Small</button>
                                                        <button className="form__tag">Medium</button>
                                                        <button className="form__tag">Large</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-7">
                                                <div className="prod-props">
                                                    <div className="prod-prop">
                                                        <img
                                                            src="/icons/document.svg"
                                                            alt=""
                                                            className="prod-prop__icon"
                                                        />
                                                        <h4 className="prod-prop__title">Compare</h4>
                                                    </div>
                                                    <div className="prod-prop">
                                                        <img src="/icons/buy.svg" alt="" className="prod-prop__icon" />
                                                        <div>
                                                            <h4 className="prod-prop__title">Delivery</h4>
                                                            <p className="prod-prop__desc">From $6 for 1-3 days</p>
                                                        </div>
                                                    </div>
                                                    <div className="prod-prop">
                                                        <img src="/icons/bag.svg" alt="" className="prod-prop__icon" />
                                                        <div>
                                                            <h4 className="prod-prop__title">Pickup</h4>
                                                            <p className="prod-prop__desc">Out of 2 store, today</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <Footer></Footer>
            </footer>
        </>
    );
}
