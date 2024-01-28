import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div>
        <div className="logo">THE PLANETS</div>
        <Link to="/">mercury</Link>
        <Link to="/venus">venus</Link>
        <Link to="/earth">earth</Link>
        <Link to="/mars">mars</Link>
        <Link to="/jupiter">jupiter</Link>
        <Link to="/saturn">saturn</Link>
        <Link to="/uranus">uranus</Link>
        <Link to="/neptune">neptune</Link>
        </div>
    );
};