import { Link } from "react-router-dom";
function ProductList({ products }) {
    return (
        <div>
            <h1>Product List</h1>
            <Link to="/">Home</Link>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <Link to={`/products/$/{product.id}`}>Product Detail</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ProductList;