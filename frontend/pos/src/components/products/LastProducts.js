import image from '../../assets/images/product1.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance/axiosInstance';

function LastProducts() {

    const [products, setProducts] = useState([])


    useEffect(() => {
        async function fetchProducts() {
        try {
          const response = await axiosInstance.get('products/');
          if (response.status !== 200) {
          }
          setProducts(response.data);
        } catch (error) {
          console.error('Error:', error)
        }
    };

    fetchProducts();

    }, []);

    return (
        <>
        <section className="px-4 py-14 bg-gradient-to-t from-orange-100">
                    <div className="container mx-auto max-w-screen-xl">
                        <div className="flex justify-center relative mb-14">
                            <h2 className="font-YekanBakh-ExtraBlack text-3xl">آخــــریـــن مــحــصــولــات</h2>
                            <div className="absolute -top-6">
                                <span className="font-YekanBakh-ExtraBlack text-6xl text-opacity-10 text-stone-900">last products</span>

                            </div>
                            <div className="bg-orange-200 w-20 h-1.5 rounded-full absolute top-10"></div>

                        </div>
                        
                        <div className='product-container'>

                        {products.map((product) => (

                            <div className='product-div' key={product.id}>
                            {console.log(product)}

                                <Link to={'/'}>
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
            </section>
        </>
    );
}

export default LastProducts; 