

import "./App.js"
import { Link } from 'react-scroll';
import logo from './img/logo.png';



function Header(){
    return(
       <header className="header">
        <div className="logo">
            <img className="photo" src={logo} alt="" />
            <h4>Shushi</h4>
        </div>

        <nav className="nav">
            <Link to="home" smooth={true}        
                duration={1000}  style={{color: 'orange'}} >Home</Link>
            <Link to="about" smooth={true}        
                duration={1000} >About Us</Link>
            <Link to="popular" smooth={true}        
                duration={1000}>Popular</Link>
            <Link to="recently" smooth={true}        
                duration={1000}>Recently</Link>
        </nav>
       </header> 
    )
}

export default Header;