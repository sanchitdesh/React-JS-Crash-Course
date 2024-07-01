import useFetchProducts from "./useFetchProducts"


const Products = () => {
const {error, loading, products} = useFetchProducts("https://fakestoreapi.com/products")

if(error){
  return (<div>Error:{error.message}</div>)
}

if(loading){
  return (
    <div>Loading...</div>
  )
}


  return (
    <div>
      <h1>Products</h1>
      <div>
    {products.map((product)=>(
      <li key={product.id}>
        <h1>Title: {product.title}</h1>
        <img src={product.image} alt={product.title} height={120} width={120} />
        <span>category:{product.category}</span>
        <div>rate: {product.rating.rate}</div>
        <div>Count: {product.rating.count}</div>
      </li>
    ))} 
      </div>
    </div>
  )
}

export default Products
