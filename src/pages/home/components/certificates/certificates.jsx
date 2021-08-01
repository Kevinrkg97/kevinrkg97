import './certificates.css';
import sql from './assets/sql.jpg';
import javascript from './assets/javascript.png'


const Certificates = () => {
    return(
        <div className="certificates" id="certificates">
            <h2>Certificados</h2>
            <div className="items">
                <img src={sql} alt="sql" />
                <img src={javascript} alt="javascript" />
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Certificates;