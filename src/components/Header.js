import { Link } from "react-router-dom";
import "./Header.css";
import data from "../data.json";




export default function Header({setMobileIsOpen,mobileIsOpen,currentPlanet}) {

    function handleMobileToggle(){
        setMobileIsOpen((prev)=>!prev);
        console.log(mobileIsOpen);
        
    }




    return (
        <nav className="navbar flex">
        <div className="logo">THE PLANETS</div>
        
        <div onClick={handleMobileToggle}  className="navbar-toggler">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <div className="menu">
            {data.map((item, index) => {
                return <Link key={index} style={{'--active-color': currentPlanet === index ? data[index].color : undefined}} className={currentPlanet === index ? `menu-link-active li` : "li"} to={`/${item.name}`}>{item.name}</Link>
                
            })
            }

        </div>

         
        </nav>
    );
};