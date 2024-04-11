import Navbar from "../components/navbar/Navbar";
import ContactComponent from "../components/contact/ContactComponent";
import TopFooter from "../components/topFooter/TopFooter";
import Footer from "../components/footer/Footer";
import { Helmet } from 'react-helmet';

function Contact() {
    return (
        <>
        <Helmet>
            <title>
                ارتباط با ما
            </title>
        </Helmet>
        <body className="font-YekanBakh-Regular text-sm bg-[#f5f1e4]">
        <Navbar />
        <ContactComponent />
        <TopFooter />
        <Footer />
        </body>
        </>
    )
};

export default Contact;