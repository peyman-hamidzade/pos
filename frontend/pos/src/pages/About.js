import Navbar from "../components/navbar/Navbar";
import AboutComponent from "../components/about/AboutComponent";
import TopFooter from "../components/topFooter/TopFooter";
import Footer from "../components/footer/Footer";

function About() {
    return (
        <>
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