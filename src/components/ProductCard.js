import React,{useContext,useEffect,useState} from 'react';
import { CartContext } from '../context/CartContex';
import { Link } from 'react-router-dom';
import '../style/productcard.css';
import StarRatings from 'react-star-ratings';
import { successToast } from './ToastComponent';

function ProductCard({product}) {

  const {addToCart} = useContext(CartContext);
  const [starRating, setStarRating] = useState(4);
  const [limitedTimeDeal, setLimitedTimeDeal] = useState(false);

  useEffect(() => {
    setStarRating(4 + Math.random());
    setLimitedTimeDeal(Math.random() > 0.5);
  }, []);

  const handleAddToCart = (item) => {
    addToCart(
      item.id,
      {
        id:item.id,
        name: item.name,
        quantity: 1,
        sku: `Sku-${item.id}`,
        brand: item.brand,
        price: item.price,
        image: item.image,
      },1);
    successToast("Item Added to Cart !!");
  };


  return (
    <>
    <div className="product-card2">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <Link to={`/item/${product.id}`} className="product-name">{product.name}</Link>
        <div className="product-rating">
          <span>
          <StarRatings
            rating={starRating}
            starRatedColor="orange"
            starDimension="20px"
            starSpacing="5px"
          />
          </span>
          <br/><br/>
          <strong>SKU :</strong> Sku-{product.id}
          <br/>
          <strong>Brand:</strong> {product.brand}
        </div>
        {limitedTimeDeal && <span className="product-deal">Limited time deal</span>}
        <div className="product-price">
          <span className="current-price">₹{product.price}</span>
          <span className="original-price">M.R.P: ₹{product.discountPrice}</span>
          <span className="discount">{(((product.discountPrice-product.price)/product.discountPrice)*100).toFixed(2)}% off</span>
        </div>
        <button onClick={(e)=>{
              handleAddToCart(product)
              e.target.setAttribute("disabled", "true");
              setTimeout(()=>{
                e.target.removeAttribute("disabled");
              },3000)
        }} className="add-to-cart-button">Add to cart</button>
      </div>
    </div>    
    </>
  )
}

export default ProductCard