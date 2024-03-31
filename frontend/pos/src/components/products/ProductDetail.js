import { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance/axiosInstance";
import { useParams } from 'react-router-dom';


function ProductDetail () {

    const [product, setProduct] = useState([]);
    const {slug} = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axiosInstance.get(`product/${slug}/`);
                if (response.status === 200) {
                    setProduct(response.data);
                } else {
                    console.error('Failed to fetch products. Status code:', response.status);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
    
        fetchProduct();
    
    }, []);
    

    return (
        <p></p>
    )
};

export default ProductDetail;