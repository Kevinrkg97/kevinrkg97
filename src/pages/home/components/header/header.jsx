import './header.css';
import developer from './assets/developer.svg';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import whatsapp from './assets/whatsapp.png';


const Header = () => {
    return (
        <div className="header">
            <div className="banner">
                <img src={developer} alt="developer" />
                <div className="text">
                    <h2>Mi nombre es Kevin Guzmán y soy programador de software.</h2>
                    <hr />
                    <div className="social">
                        <a href="https://github.com/Kevinrkg97"  target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
                        <a href="https://www.linkedin.com/in/kevin-guzm%C3%A1n-1783811a7/"  target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a>
                        <a href="https://wa.me/525539650500/"  target="_blank" rel="noreferrer"><img src={whatsapp} alt="whatsapp" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;