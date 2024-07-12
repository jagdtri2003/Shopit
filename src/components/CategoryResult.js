import React from 'react'
import { useParams,Link } from 'react-router-dom';
import product from '../products/products';
import ProductCard from './ProductCard';
import Header from './Header';

function CategoryResult() {
    const { categoryName } = useParams();
    const products = Object.values(product).filter((product)=> product.category.toLowerCase() === categoryName.toLowerCase());
    console.log(products);
  return (
    <>
    <Header/>
    <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>{categoryName[0].toUpperCase()+categoryName.slice(1)}</span>
    </div>
    <div style={{marginLeft:'10vw'}} className="category">
      <h2>Showing Results for {categoryName[0].toUpperCase()+categoryName.slice(1)} ...</h2>
      <div style={{paddingBottom:'30px'}} className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>
  )
}

export default CategoryResult;