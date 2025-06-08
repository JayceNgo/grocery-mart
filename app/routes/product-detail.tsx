import Header from "~/layouts/header-logined";
import Footer from "~/layouts/footer";
export default function ProductDetail() {
    return (
        <>
            <header>
                <Header></Header>
            </header>
            <main className="product-page">
                <div className="container">
                    <div className="product-container">
                        {/* <!-- Breadcrumbs --> */}
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
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
}
