
import axios from "../utils/axios";
import React, { useEffect, useState } from "react";

function Products() {
  
  const api = "/products";

  useEffect(() => {
    getProducts();
  }, []);

  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get(api)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Products Page</h1> 

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain mb-4"
            />

            <h2 className="text-lg font-semibold text-center mb-2">
              {product.title}
            </h2>

            <p className="text-gray-600 text-sm mb-3">
              {product.category}
            </p>

            <p className="text-xl font-bold text-green-600 mb-3">
              ${product.price}
            </p>

            <p className="text-gray-500 text-sm text-center">
              ⭐ {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
