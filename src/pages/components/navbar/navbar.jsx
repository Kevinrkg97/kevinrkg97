import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useEffect} from 'react';

import './navbar.css';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }


    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);
        
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])
  

    return (
        <div className="navBar">
            <div className="title">
                <div className="name">
                    <p>aFoxWithNoName</p>
                </div>
                <div>
                    <button className="btnMenu" onClick={toggleNav}> <FontAwesomeIcon icon={faBars} /> </button>
                </div>
            </div>
            {(toggleMenu || screenWidth > 850) && (
                <ul className="sections">
                    <a href="#resume"><li>Inicio</li></a>
                    <a href="#skills"><li>Habilidades</li></a>
                    <a href="#portfolio"><li>Portafolio</li></a>
                    <a href="#certificates"><li>Certificados</li></a>
                    <a href="#contact"><li>Contacto</li></a>
                </ul>
            )}

        </div>
    );
}

export default Navbar;