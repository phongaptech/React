import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Card, CardContent, CardMedia, Typography, CircularProgress } from "@mui/material";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <CircularProgress style={{ margin: "50px" }} />;

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>Danh sách sản phẩm</Typography>
            <Grid container spacing={3}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card sx={{ height: "100%" }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={product.image}
                                alt={product.title}
                                style={{ objectFit: "contain", padding: "10px" }}
                            />
                            <CardContent>
                                <Typography variant="h6" noWrap>{product.title}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ${product.price}
                                </Typography>
                                <Link to={`/product/${product.id}`}>Xem chi tiết</Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ProductList;
