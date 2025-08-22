import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "antd";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <Row gutter={[16,16]}>
      {products.map((p) => (
        <Col span={6} key={p.id}>
          <Card
            cover={<img src={p.image} alt={p.title} style={{ height: 150, objectFit:"contain" }} />}
            actions={[
              <Button type="link" onClick={() => alert(`Chi tiết: ${p.title}`)}>Detail</Button>,
              <Button danger onClick={() => handleDelete(p.id)}>Delete</Button>
            ]}
          >
            <Card.Meta title={p.title} description={`$${p.price} - ${p.category}`} />
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Products;
