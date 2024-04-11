import Navbar from "../components/navbar/Navbar";
import AboutComponent from "../components/about/AboutComponent";
import TopFooter from "../components/topFooter/TopFooter";
import Footer from "../components/footer/Footer";
import { Helmet } from 'react-helmet';


function About() {
    return (
        <>
        <Helmet>
            <title>
                درباره ما
            </title>
        </Helmet>
        <body className="font-YekanBakh-Regular text-sm bg-[#f5f1e4]">
        <Navbar />
        <AboutComponent />
        <TopFooter />
        <Footer />
        </body>
        </>
    )
};

export default About;