import './certificates.css';
import sql from './assets/sql.jpg';
import javascript from './assets/javascript.png';
import react from './assets/react.jpg';
import php from './assets/php.jpg'


const Certificates = () => {
    return(
        <div className="certificates" id="certificates">
            <h2>Certificados</h2>
            <div className="items">
                <img src={sql} alt="sql" />
                <img src={javascript} alt="javascript" />
                <img src={react} alt="react" />
                <img src={php} alt="php" />
            </div>
        </div>
    );
}

export default Certificates;