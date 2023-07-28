
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Product from './Product';

const Products = () => {
   let [products, setProducts] = useState([]);

   useEffect(() => {
      axios.get('https://voodoo-sandbox.myshopify.com/products.json?limit=12')
         .then(response => setProducts(response.data.products));
   }, [])

   return (
      <div className="container mx-auto py-12" >
         <div className="columns-1  md:columns-2 lg:columns-3 xl:columns-4 gap-x-6">
            {products.map((product) => (
               <Product key={product.id} title={product.title} />
            ))}
         </div>
      </div>
   );
}

export default Products;