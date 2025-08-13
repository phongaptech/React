import { Link } from "react-router-dom"
function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/products">Product List</Link>
        </div>
    )
}
export default Home;