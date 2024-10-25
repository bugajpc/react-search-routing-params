import { Link } from "react-router-dom"
import './navbar.css';

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/items">Items</Link>
        </nav>
    )
}
export default Navbar