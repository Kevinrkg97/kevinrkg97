import './portfolio.css';
import geoaplication1 from './assets/geoaplication/geoaplication1.png';
import fuf1 from './assets/formularioUsuariosFlask/formLogin.png'
import loginReact from './assets/formReact/Login.png'
import react from './assets/react.svg';
import python from './assets/python.svg'

const Portfolio = () => {
    return(
        <div className="portfolio" id="portfolio">
            <h2>Portafolio</h2>
            <div className="items">
                <div className="item">
                    <span />
                    <img src={geoaplication1} alt="geoaplication1" />
                    <div className="containerDescription">
                        <div className="description">
                            <div className="text">
                                <p>Consume una API en formato JSON que contiene información de empleados, muestra esos datos en pantalla; de igual forma se muestra una API de google maps que toma las coordenadas registradas de choferes para mostrar sus rutas diarias mientras se pueden ver la hora de registro y datos del teléfono.</p>
                            </div>
                            <div className="more">
                                <a className="link" href="about:blank " target="_blank" rel="noreferrer">Ir al sitio</a>
                                <img src={react} alt="react" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span />
                    <img src={fuf1} alt="fuf1" />
                    <div className="containerDescription">
                        <div className="description">
                            <div className="text">
                                <p>Aplicación web en la que se muestra un formulario.</p>
                                <br />
                                <p>Se puede hacer registro de usuarios el cuál al logearse, puede ver la tabla de todos los usuarios que han sido registrados.</p>
                            </div>
                            <div className="more">
                                <a className="link" href="https://github.com/Kevinrkg97/FormularioUsuariosFlask" target="_blank" rel="noreferrer">Ir al sitio</a>
                                <img src={python} alt="python" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span />
                    <img src={loginReact} alt="loginReact" />
                    <div className="containerDescription">
                        <div className="description">
                            <div className="text">
                                <p>Aplicación web en la que se muestra un formulario.</p>
                                <br />
                                <p>Se puede hacer registro de usuarios el cuál al logearse, puede ver la tabla de todos los usuarios que han sido registrados.</p>
                            </div>
                            <div className="more">
                                <a className="link" href="https://github.com/Kevinrkg97/reactLogin" target="_blank" rel="noreferrer">Ir al sitio</a>
                                <img src={react} alt="react" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;