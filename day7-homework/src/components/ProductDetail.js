import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ!");
    navigate("/cart");
  };

  if (!product) return <p>Đang tải...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: 200 }} />
      <p>{product.description}</p>
      <p>Giá: ${product.price}</p>
      <button onClick={addToCart}>Thêm vào giỏ</button>
    </div>
  );
}

export default ProductDetail;
