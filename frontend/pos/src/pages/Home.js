import Navbar from "../components/navbar/Navbar";
import HomeSlide from "../components/slide/HomeSlide";
import LastProducts from "../components/products/LastProducts";
import HomeServices from "../components/services/HomeServices";
import HomeContact from "../components/contact/HomeContact";
import TopFooter from "../components/topFooter/TopFooter";

function Home () {
    return (
        <>
            <body className="font-YekanBakh-Regular text-sm bg-[#f5f1e4]">
                <Navbar />
                <HomeSlide />
                <LastProducts />
                <HomeServices />
                <HomeContact />
                <TopFooter />
            </body>
        </>
    );
}

export default Home;