import Navbar from "../components/navbar/Navbar";
import HomeSlide from "../components/slide/HomeSlide";
import LastProducts from "../components/products/LastProducts";
import Services from "../components/services/Services";

function Home () {
    return (
        <>
            <body className="font-YekanBakh-Regular text-sm bg-[#f5f1e4]">
                <Navbar />
                <HomeSlide />
                <LastProducts />
                <Services />
            </body>
        </>
    );
}

export default Home;