import Navbar from "../components/navbar/Navbar";
import ServiceComponent from "../components/services/ServiceComponent";
import TopFooter from "../components/topFooter/TopFooter";
import Footer from "../components/footer/Footer";

function Services () {
    return (
        <>
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