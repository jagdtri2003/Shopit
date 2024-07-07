import React,{useState} from 'react';
import '../style/itemcomponent.css';
import { useParams } from 'react-router-dom';
import Header from './Header';

const ItemComponent = () => {
    const { id } = useParams();
    const [count, setCount] = useState(1);
    const item = {
        image:'https://via.placeholder.com/1000x800.png?text=Random+Item',
        name : 'Random Item',
        price : 90,
        discountPrice:100,
        specifications : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quia',
    }
  return (
    <>
    <Header/>
    <div style={{margin:'40px'}} className="item-container">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details">
        <h2 className="item-name">{item.name}</h2>
        <p><strong>SKU ID:</strong>  Sku-{id}</p>
        <p>
            <strong>» Brand:</strong> Brand 1
        </p>
        <div className="item-price">
          <span className="price">₹ {item.price}</span>
          {item.discountPrice && (
            <span className="discount-price">₹ {item.discountPrice}</span>
          )}
        </div>
        <div className='count-btn'>
            <button onClick={()=>count > 1 ? setCount(count-1) : null }>-</button>
            <input id='count' value={count} type='number' min={1} readOnly/>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
        <button className="add-to-cart">Add to Cart</button>
        <p className="item-specifications">{item.specifications}</p>
      </div>
    </div>
    </>
  );
};

export default ItemComponent;
