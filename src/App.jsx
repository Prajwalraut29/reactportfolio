import Navbar from './sections/navbar/Navbar';
import Header from './header/Header';
import About from './about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testmonials from './testimonials/Testmonials';
import FAQS from './faqs/FAQS';
import Contact from './contact/Contact';
import FloatingNav from './floating_nav/FloatingNav';
import Footer from './footer/Footer';
const App = () => {
  return (
    <main>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Portfolio/>
        <Testmonials/>
        <FAQS/>
        <Contact/>
        <FloatingNav/>
        <Footer/>

    </main>
  )
}

export default App