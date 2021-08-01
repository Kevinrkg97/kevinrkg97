import './resume.css';
import aboutMe from './assets/aboutMe.svg';
import goals from './assets/goals.svg';
import skills from './assets/skills.svg';


const Resume = () => {
    return(
        <div className="resume" id="resume">
            <div className="cards">
                <div className="card">
                    
                    <span></span>
                    <div className="content">
                        <div className="imgCard">
                            <img src={aboutMe} alt="aboutMe"/>
                        </div>
                        <h3>¿Quién soy?</h3>
                        <br />
                        <p>Soy un desarrollador de la Ciudad de México.</p>
                        <p>Soy bastante intuitivo y me gusta resolver problemas de la mejor forma posible, soy alguien autodidacta con una gran pasión por lo que hago.</p>
                    </div>
                </div>
                <div className="card">
                    <span></span>
                    
                    <div className="content">
                    <div className="imgCard">
                        <img src={goals} alt="goals" />
                    </div>
                        <h3>Lo que hago</h3>
                        <br />
                        <p>Busco desarrollar mis habilidades para hacer una trabajo mas eficiente para así mejorar mi futuro destacando y haciendo lo que más me apasiona.</p>
                    </div>
                </div>
                <div className="card">
                    <span></span>
                    
                    <div className="content">
                        <div className="imgCard">
                            <img src={skills} alt="skills" />
                        </div>
                        <h3>¿Cuáles son mis habilidades?</h3>
                        <br />
                        <p>Trabajo con front end pero me especializo en back end, principalmente con Python.</p>
                        <p>Desarrollo aplicaciones Web, móviles (Android) y creación de API's.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;