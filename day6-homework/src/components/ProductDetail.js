import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Typography, Card, CardMedia, CardContent, CircularProgress, Button } from "@mui/material";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <CircularProgress style={{ margin: "50px" }} />;

  return (
    <Container sx={{ mt: 4 }}>
      <Card>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ width: "200px", objectFit: "contain", margin: "20px auto" }}
        />
        <CardContent>
          <Typography variant="h5">{product.title}</Typography>
          <Typography variant="h6" color="primary">${product.price}</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>{product.description}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Category: {product.category}
          </Typography>
          <Button component={Link} to="/" variant="contained" sx={{ mt: 2 }}>
            Quay lại danh sách
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ProductDetail;
