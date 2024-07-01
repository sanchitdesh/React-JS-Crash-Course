import { useState, useEffect } from "react";

const useFetchProducts = (url) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
     try {
      const response = await fetch(url);

      if(!response.ok){
        throw new Error("Unable to fetch products. Something went wrong...")
      }

      const data = await response.json()

      setProducts(data)

     } catch (error) {
      setError(error)
      
     }finally{
      setLoading(false)
     }
    };

fetchProducts()

  }, [url]);

  return {error, loading, products};
};

export default useFetchProducts;
