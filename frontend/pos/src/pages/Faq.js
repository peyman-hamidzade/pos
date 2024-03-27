import Navbar from "../components/navbar/Navbar";
import FaqComponent from "../components/faq/FaqComponent";
import TopFooter from "../components/topFooter/TopFooter";
import Footer from "../components/footer/Footer";

function Faq() {
    return (
        <>
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