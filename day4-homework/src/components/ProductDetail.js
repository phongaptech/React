import { useParams, Link } from "react-router-dom";
function ProductDetail({ products }) {
    const { id } = useParams();
    const product = products.find((product) => product.id);
    return (
        <div>
            <h1>Product Detail</h1>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <Link to="/products">Product List</Link>
        </div>
    );
}
export default ProductDetail;