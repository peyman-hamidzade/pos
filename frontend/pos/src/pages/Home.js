import Navbar from "../components/navbar/Navbar";
import HomeSlide from "../components/slide/HomeSlide";
import LastProducts from "../components/products/LastProducts";
import HomeServices from "../components/services/HomeServices";
import HomeReviews from "../components/reviews/HomeReviews";
import HomeContact from "../components/contact/HomeContact";
import TopFooter from "../components/topFooter/TopFooter";
import Footer from "../components/footer/Footer";

function Home () {
    return (
        <>
            <body className="font-YekanBakh-Regular text-sm bg-[#f5f1e4]">
                <Navbar />
                <HomeSlide />
                <LastProducts />
                <HomeServices />
                <HomeReviews />
                <HomeContact />
                <TopFooter />
                <Footer />
            </body>
        </>
    );
}

export default Home;