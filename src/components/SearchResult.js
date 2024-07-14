import React,{useState,useEffect} from 'react'
import Header from './Header'
import { useParams,Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import Footer from './Footer';
import product from '../products/products';

function SearchResult() {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    const {query} = useParams();
    const [sortCriteria, setSortCriteria] = useState("None");
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(()=>{
        const products = Object.values(product).filter((product)=>{
            return (product.name.toLowerCase().includes(query.toLowerCase()) || product.category.toLowerCase().includes(query.toLowerCase()));
        });
        if(sortCriteria === 'Price: Low to High'){
            setSortedProducts(products.sort((a,b)=>a.price-b.price));
        }
        else if(sortCriteria==='Price: High to Low'){
            setSortedProducts(products.sort((a,b)=>b.price-a.price))
        }
        else if(sortCriteria==='Name'){
            setSortedProducts(products.sort((a,b)=>a.name.localeCompare(b.name)));
        }else{
            setSortedProducts(products);
        }
        
    },[sortCriteria,query])

    const handleSortChange = (e) =>{
        setSortCriteria(e.target.value);
    }


  return (
    <>
    <Header/>
    <div className="breadcrumb">
        <Link to="/">Home</Link> /search=<span>{query[0].toUpperCase()+query.slice(1)}</span>
    </div>
    { sortedProducts.length>0 ? (
    <>
    <div className="category" style={{maxWidth:'90vw'}}>
      <div className='category-header'>
      <h2>Showing Results for {query[0].toUpperCase()+query.slice(1)} ...</h2>
      <div>Sort by &nbsp;
      <select  value={sortCriteria} onChange={handleSortChange}>
        <option selected>None</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Name</option>
      </select></div>
      </div>
      <div style={{paddingBottom:'30px'}} className="product-list">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>):(
        <>
        <div className="category" style={{maxWidth:'90vw',display:'flex',justifyContent:'center',alignItems:'center',minHeight:'43vh'}}>
            <h2>Sorry, no result found for {query[0].toUpperCase()+query.slice(1)}.
            <h5>Try checking your spelling or use more general terms</h5>
            </h2>
        </div>
        </>
    )}
    <Footer/>
    </>
  )
}

export default SearchResult