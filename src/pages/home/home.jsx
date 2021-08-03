import Navbar from '../components/navbar/navbar';
import Header from './components/header/header';
import Resume from './components/resume/resume';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/portfolio';
import Certificates from './components/certificates/certificates';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import './home.css';
import { useState , useEffect} from "react";
import CircleLoader from "react-spinners/CircleLoader";


const Home = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <>  
            {loading ? (
                <div className="loading">
                <CircleLoader 
                    color={"#F9A826"} 
                    loading={loading} 
                    size={30} 
                />                
                </div>
            ) : (
                <>
                    <Navbar />
                    <Header />
                    <Resume />
                    <Skills />
                    <Portfolio />
                    <Certificates />
                    <Contact />
                    <Footer />
                </>
                )
            }
        </>
    )
}

export default Home;