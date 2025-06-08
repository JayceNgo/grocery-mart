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
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dicta placeat officiis
                                ea, accusamus nisi ab similique quisquam alias, repellendus consectetur asperiores
                                excepturi quas sed repellat perferendis sint modi distinctio.
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
