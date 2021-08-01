import './header.css';
import developer from './assets/developer.svg';


const Header = () => {
    return (
        <div className="header">
            <div className="banner">
                <img src={developer} alt="developer" />
                <div className="text">
                    <h2>Mi nombre es Kevin Guzmán y soy programador de software.</h2>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default Header;