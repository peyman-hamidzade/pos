import React from 'react';
import axiosInstance from '../axiosInstance/axiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddToCart = ({ slug }) => {
  const addToCart = async () => {
    try {
      const response = await axiosInstance.get(`product/${slug}/`);
      const product = response.data.product;

      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingProduct = cart.find(item => item.id === product.id);


      if (!existingProduct) {
        const updatedCart = [...cart, { ...product, quantity: 1 }];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        toast.success('محصول به سبد خرید اضافه شد.');
      } else {
        toast.info('محصول از قبل در سبد خرید وجود دارد.');
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div>
        <button onClick={addToCart} type='button'>افزودن به سبد خرید</button>
        <ToastContainer />
    </div>
  );
};

export default AddToCart;
