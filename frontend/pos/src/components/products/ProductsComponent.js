import { useState, useEffect } from "react";
import axiosInstance from '../axiosInstance/axiosInstance'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';


function ProductsComponent() {

    const [products, setProducts] = useState([]);
    const [q, setQ] = useState('');
    const [searchParam] = useState(["name"]);
    const [filterParam , setFilterParam] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const data = Object.values(products);

    const [colorFilter, setColorFilter] = useState("all");

    const colorOptions = [
        { color: "همه رنگ‌ها", index: "all" },
        { color: "قرمز", index: "red" },
        { color: "آبی", index: "blue" },
    ];

    const priceRanges = [
        { range: "همه قیمت ها", index: "all" },
        { range: "0 - 3", index: "0-3" },
        { range: "2000000 - 2500000", index: "2000000-2500000" },
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosInstance.get('products/');
                if (response.status === 200) { 
                    setProducts(response.data);
                } else {
                    console.error('Failed to fetch products. Status code:', response.status);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
    
        fetchProducts();
    
    }, []);


    function Search(products) {
        return products.filter((product) => {
            if (filterParam === "all") {
                return true; 
            } else if (filterParam !== "all" && filterParam.includes("-")) {
                const [minPrice, maxPrice] = filterParam.split('-');
                const productPrice = parseInt(product.price);
                return productPrice >= parseInt(minPrice) && productPrice <= parseInt(maxPrice);
            }
            return false; 
        }).filter((product) => {
            return searchParam.some((newProduct) => {
                return (
                    product[newProduct]
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
                );
            });
        }).filter((product) => {
            if (colorFilter === "all") {
                return true;
            } else {
                return product.color === colorFilter;
            }
        });
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Search(data).slice(
    indexOfFirstItem,
    indexOfLastItem
      );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <section className="px-4 mb-24">
            <div className="container mx-auto max-w-screen-xl">
                <nav className="flex mb-5 border-y border-orange-200 py-3" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2">
                        <li className="inline-flex items-center">
                            <Link to={'/'} className="inline-flex items-center">
                            خانه
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                                
                                <Link to={''} className="mr-1 text-sm font-medium">فروشگاه</Link>
                            </div>
                        </li>
                    </ol>
                </nav>  
                <div className="flex justify-center relative my-16">
                    <h2 className="font-YekanBakh-ExtraBlack text-3xl">فـــروشــــگـــاه</h2>
                    <div className="absolute -top-6">
                        <span className="font-YekanBakh-ExtraBlack text-6xl text-opacity-10 text-stone-900">shop</span>

                    </div>
                    <div className="bg-orange-200 w-20 h-1.5 rounded-full absolute top-10"></div>

                </div> 

                <div className="shop-div">

                    <div className="filter-products-div">

                        <div className="filter-items">
                            <div className="">
                                <h5>فیلتر براساس قیمت</h5>
                                <form>
                                {priceRanges.map((priceRangeObj, index) => (
                                <div className="filter-item" key={index}>
                                    <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        checked={filterParam === priceRangeObj.index}
                                        onChange={() => setFilterParam(priceRangeObj.index)}
                                        id={`price-${priceRangeObj.index}`}
                                    />
                                    <label className="control-label" htmlFor={`price-${priceRangeObj.index}`}>
                                        {priceRangeObj.range}
                                    </label>
                                </div>
                                ))}
                                </form>
                            </div>
                        </div>

                        <div className="filter-items">
                            <div className="">
                                <h5>فیلتر براساس رنگ</h5>
                                <form>
                                    {colorOptions.map((option) => (
                                        <div className="filter-item" key={option.index}>
                                            <input
                                                type="checkbox"
                                                className="custom-checkbox"
                                                id={`color-${option.index}`}
                                                value={option.index}
                                                name="color"
                                                checked={colorFilter === option.index}
                                                onChange={(e) => setColorFilter(e.target.value)}
                                            />
                                            <label htmlFor={`color-${option.index}`} className="control-label">
                                                {option.color}
                                            </label>
                                        </div>
                                    ))}
                                </form>
                            </div>
                        </div>

                    </div>

                    <div className="list-products-div">

                        <div className="products-search">
                            <form action="">
                                <div className="input-group">
                                    <input 
                                    type="text" 
                                    className="serach-input" 
                                    placeholder="جستجوی نام محصول ..."
                                    value={q}
                                    onChange={(e) => setQ(e.target.value)}
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-transparent text-primary">
                                            <FontAwesomeIcon icon={faSearch} style={{ color: '#D19C97' }} />
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="list-products">
                            <div className='product-container'>

                            {currentItems.map( product => (

                                <div className='product-div' key={product.id}>
                                {console.log(product)}

                                    <Link to={`/product/${product.slug}`}>
                                        <div className='product-image-div'>
                                            <img src={product.image.url} alt={product.name} />
                                        </div>
                                        <div className='product-title-div'>
                                            <h6>{product.name}</h6>
                                            <h6>{product.price} ریال</h6>
                                        </div>
                                    </Link>

                                        <div className='product-cart-div'>
                                            <FontAwesomeIcon icon={faShoppingCart} className='add-tocart-icon' style={{ color: '#D19C97' }} />
                                            <Link to={'/shop'}>افزودن به سبد خرید</Link>
                                        </div>
                                </div>

                                ))}
                                    
                            </div>
                        </div>


                        <div className="pagination-div">
                        <nav aria-label="Page navigation">
                        <ul className="pagination">
                            <li className={`${currentPage === 1 ? 'disabled' : ''}`}>
                                <a className="page-link" aria-label="Previous" onClick={() => paginate(currentPage - 1)}>
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            {Array.from({ length: Math.ceil(Search(data).length / itemsPerPage) }, (_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                    <a className="page-link" onClick={() => paginate(index + 1)}>
                                        {index + 1}
                                    </a>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === Math.ceil(Search(data).length / itemsPerPage) ? 'disabled' : ''}`}>
                                <a className="page-link"  aria-label="Next" onClick={() => paginate(currentPage + 1)}>
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                        </div>

                    </div>

                </div>

            </div>
        </section>
        </>
    )
};

export default ProductsComponent;

