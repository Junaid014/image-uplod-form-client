import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  // Auto image change
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % (product?.allImages?.length || 1));
    }, 3000); // change every 3 sec
    return () => clearInterval(interval);
  }, [product]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto p-6">
      {/* Left Side - Images */}
      <div>
        <img
          src={product.allImages[activeImage]}
          alt="Main"
          className="w-full h-[400px] object-cover rounded-lg mb-4"
        />
        <div className="flex gap-3">
          {product.allImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              onClick={() => setActiveImage(i)}
              className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                i === activeImage ? "border-blue-500" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Details */}
      <div>
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="text-lg text-gray-700 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-green-600">৳ {product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
