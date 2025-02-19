import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="text-center py-16 bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-50">
      <h1 className="text-6xl font-bold text-gray-800 mb-16">Store Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="w-full h-56 relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate">
                {product.title}
              </h3>
              <p className="text-lg font-medium text-gray-600 mb-4">
                ${product.price}
              </p>
              <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
