import './footer.css';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import whatsapp from './assets/whatsapp.png';

const Footer = () => {
    return(
        <footer>
            <div className="content">
                <p>Copyright©2021 Roberto Kevin Guzmán</p>
                <h3>Ciudad de México, México</h3>
                <h3>+52 55 3965 0500</h3>
                <hr />
                <a href="https://github.com/Kevinrkg97"  target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/kevin-guzm%C3%A1n-1783811a7/"  target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a>
                <a href="https://wa.me/525539650500/"  target="_blank" rel="noreferrer"><img src={whatsapp} alt="whatsapp" /></a>

            </div>
        </footer>
    );
}

export default Footer;