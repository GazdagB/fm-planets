import { Link } from "react-router-dom";
import "./Header.css";


export default function Header() {
    return (
        <nav className="navbar flex">
        <div className="logo">THE PLANETS</div>
        
        <div className="menu">
            <Link className="li" to="/">mercury</Link>
            <Link className="li" to="/venus">venus</Link>
            <Link className="li" to="/earth">earth</Link>
            <Link className="li" to="/mars">mars</Link>
            <Link className="li" to="/jupiter">jupiter</Link>
            <Link className="li" to="/saturn">saturn</Link>
            <Link className="li" to="/uranus">uranus</Link>
            <Link className="li" to="/neptune">neptune</Link>
        </div>
        </nav>
    );
};