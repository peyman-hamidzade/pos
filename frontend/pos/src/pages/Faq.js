import Navbar from "../components/navbar/Navbar";
import FaqComponent from "../components/faq/FaqComponent";
import TopFooter from "../components/topFooter/TopFooter";
import Footer from "../components/footer/Footer";
import { Helmet } from 'react-helmet';

function Faq() {
    return (
        <>
        <Helmet>
            <title>
                سوالات متداول
            </title>
        </Helmet>
        <body className="font-YekanBakh-Regular text-sm bg-[#f5f1e4]">
        <Navbar />
        <FaqComponent />
        <TopFooter />
        <Footer />
        </body>
        </>
    )
};

export default Faq;