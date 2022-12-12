import React, { useContext } from 'react'
import './ProductCard.css'
import CartContext from '../context/cart/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  return (
    <div className='productCard__wrapper'>
        <div>
           <img className='productCard__img' src={product.img} alt=''/>
           <h4>{product.name}</h4>
           <p>{product.info}</p>
           <div className= 'productCart__price'>
            <h5> ₹ {product.price}</h5>
           </div>
           <button className='ProductCard__button' onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard