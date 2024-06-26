import Navbar from "../components/navbar/Navbar";
import CheckoutComponent from "../components/checkout/CheckoutComponent";
import TopFooter from "../components/topFooter/TopFooter";
import Footer from "../components/footer/Footer";
import { Helmet } from 'react-helmet';

function Checkout() {
    return (
        <>
        <Helmet>
            <title>
                صورتحساب
            </title>
        </Helmet>
        <body className="font-YekanBakh-Regular text-sm bg-[#f5f1e4]">
        <Navbar />
        <CheckoutComponent />
        <TopFooter />
        <Footer />
        </body>
        </>
    )
};

export default Checkout;