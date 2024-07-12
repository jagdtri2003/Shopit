import React,{useState} from 'react'
import { Link,useParams } from 'react-router-dom';
import product from '../products/products';


function CategoryResult() {
    const { categoryName } = useParams();
    const [products, setProducts] = useState(()=>{
      return Object.values(product).filter((product)=> product.category.toLowerCase() === categoryName.toLowerCase())
    });
    console.log(products);
  return (
    <>

    </>
  )
}

export default CategoryResult