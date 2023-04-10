import React from 'react';
import ReactStars from "react-rating-stars-component";

const ProductCard = () => {
  return (
    <div className='col-3'>
        <div className='product-card position-relative'>
            <div className='product-image'>
                <img src='images/headphone.jpg' alt='product image'/>
            </div>
            <div className='product details'>
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>
                    Kids headphones bulk 10 pack multi colored for studentts
                </h5>
                <ReactStars count={5} size={24} edit={false} value='4' activeColor="#ffd700"/>
                <p className='price'>$100.00</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard