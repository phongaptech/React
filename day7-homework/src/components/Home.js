import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Danh sách sản phẩm</h2>
      {products.map((p) => (
        <div key={p.id} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
          <h3>{p.title}</h3>
          <img src={p.image} alt={p.title} style={{ width: 100 }} />
          <p>Giá: ${p.price}</p>
          <Link to={`/product/${p.id}`}><button>Xem chi tiết</button></Link>
        </div>
      ))}
      <Link to="/cart"><button>Giỏ hàng</button></Link>
    </div>
  );
}

export default Home;
