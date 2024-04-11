import Navbar from "../components/navbar/Navbar";
import ServiceComponent from "../components/services/ServiceComponent";
import TopFooter from "../components/topFooter/TopFooter";
import Footer from "../components/footer/Footer";
import { Helmet } from 'react-helmet';

function Services () {
    return (
        <>
        <Helmet>
            <title>
                خدمات
            </title>
        </Helmet>
        <body className="font-YekanBakh-Regular text-sm bg-[#f5f1e4]">
        <Navbar />
        <ServiceComponent />
        <TopFooter />
        <Footer />
        </body>
        </>
    )
};


export default Services;