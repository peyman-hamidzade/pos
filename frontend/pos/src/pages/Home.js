import Navbar from "../components/navbar/Navbar";
import HomeSlide from "../components/slide/HomeSlide";
import LastProducts from "../components/products/LastProducts";

function Home () {
    return (
        <>
            <body className="font-YekanBakh-Regular text-sm bg-[#f5f1e4]">
                <Navbar />
                <HomeSlide />
                <LastProducts />
            </body>
        </>
    );
}

export default Home;