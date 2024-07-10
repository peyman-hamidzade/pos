import Navbar from "../components/navbar/Navbar";
import TopFooter from "../components/topFooter/TopFooter";
import Footer from "../components/footer/Footer";
import { Helmet } from 'react-helmet';
import OrderStatusList from "../components/order/OrderStatusComponent";

function Shop() {
    return (
        <>
        <Helmet>
            <title>
                پیگیری خرید
            </title>
        </Helmet>
        <body className="font-YekanBakh-Regular text-sm bg-[#f5f1e4]">
        <Navbar />
        <OrderStatusList />
        <TopFooter />
        <Footer />
        </body>
        </>
    )
};

export default Shop;