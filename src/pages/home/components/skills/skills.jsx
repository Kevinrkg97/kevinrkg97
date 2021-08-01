import './skills.css';
import androidstudio from './assets/androidstudio.ico';
import css from './assets/css.svg';
import flutter from './assets/flutter.svg';
import github from './assets/github.svg';
import html from './assets/html.svg';
import javascript from './assets/javascript.svg';
import linux from './assets/linux.ico';
import mysql from './assets/mysql.svg';
import php from './assets/php.svg';
import postgres from './assets/postgres.svg';
import python from './assets/python.svg';
import react from './assets/react.svg';
import windows from './assets/windows.svg';



const Skills = () => {
    return(
        <div className="skills" id="skills">
            <div className="content">
                <div className="text">
                    <p>Soy un desarrollador que trabaja con aplicaciones Web y Móviles, desarrollo principalmente con Python Flask pero de igual forma trabajo con PHP, JavaScript, Node Js, React Js y en Front End prefiero HTML5, CSS3 y JavaScript aunque también puedo usar Bootstrap y Material Design si se requiere. Para aplicaciones Móviles Flutter y Java.</p>
                    <br />
                    <p>Desarrollo mis API's con Node Js y mis bases de datos las trabajo con Sql Server y Postgres.</p>
                    <br />
                    <p>Busco desarrollar mis habilidades así como aprender inteligencia artifical y ciber seguridad.</p>
                </div>
                <div className="image">
                    <img src={html} alt="html" />
                    <img src={css} alt="css" />
                    <img src={javascript} alt="javascript" />
                    <img src={react} alt="react" />
                    <img src={python} alt="python" />
                    <img src={php} alt="php" />
                    <img src={androidstudio} alt="androidstudio" />
                    <img src={flutter} alt="flutter" />
                    <img src={github} alt="github" />
                    <img src={mysql} alt="mysql" />
                    <img src={postgres} alt="postgres" />
                    <img src={windows} alt="windows" />
                    <img src={linux} alt="linux" />


                </div>
            </div>
        </div>
    );
}

export default Skills;