import React from 'react'
import { Link,useParams } from 'react-router-dom';


function CategoryResult() {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
  return (
    <>

    </>
  )
}

export default CategoryResult