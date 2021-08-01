import Navbar from '../components/navbar/navbar';
import Header from './components/header/header';
import Resume from './components/resume/resume';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/portfolio';
import Certificates from './components/certificates/certificates';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import './home.css';


const Home = () => {
    return (
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

export default Home;