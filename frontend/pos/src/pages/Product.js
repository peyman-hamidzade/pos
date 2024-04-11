import Navbar from "../components/navbar/Navbar";
import ProductDetail from "../components/products/ProductDetail";
import TopFooter from "../components/topFooter/TopFooter";
import Footer from "../components/footer/Footer";
import { Helmet } from 'react-helmet';

function Product() {
    return (
        <>
        <Helmet>
            <title>
                محصولات
            </title>
        </Helmet>
        <body className="font-YekanBakh-Regular text-sm bg-[#f5f1e4]">
        <Navbar />
        <ProductDetail />
        <TopFooter />
        <Footer />
        </body>
        </>
    )
};

export default Product;