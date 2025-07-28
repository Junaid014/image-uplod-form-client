import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {products.map(product => (
        <div key={product._id} className="border rounded-lg shadow hover:shadow-lg transition duration-300">
          <img
            src={product.mainImage}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <Link
              to={`/product/${product._id}`}
              className="inline-block mt-2 text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
