  import React from 'react' 
  import './Home.css' 
  import products from '../data'
  import ProductCard from '../Components/ProductCard'
  
  const Home = () => {
    return (
      <div className='products__wrapper'>
        {products.map((product)=>(
            <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )
  }
  
  export default Home