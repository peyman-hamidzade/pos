import Navbar from "../components/navbar/Navbar";
import CartComponent from "../components/cart/CartComponent";
import TopFooter from "../components/topFooter/TopFooter";
import Footer from "../components/footer/Footer";
import { Helmet } from 'react-helmet';

function Cart() {
    return (
        <>
        <Helmet>
            <title>
                سبد خرید
            </title>
        </Helmet>
        <body className="font-YekanBakh-Regular text-sm bg-[#f5f1e4]">
        <Navbar />
        <CartComponent />
        <TopFooter />
        <Footer />
        </body>
        </>
    )
};

export default Cart;