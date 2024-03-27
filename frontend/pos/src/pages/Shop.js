import Navbar from "../components/navbar/Navbar";
import ProductsComponent from "../components/products/ProductsComponent";
import TopFooter from "../components/topFooter/TopFooter";
import Footer from "../components/footer/Footer";

function Shop() {
    return (
        <>
        <body className="font-YekanBakh-Regular text-sm bg-[#f5f1e4]">
        <Navbar />
        <ProductsComponent />
        <TopFooter />
        <Footer />
        </body>
        </>
    )
};

export default Shop;