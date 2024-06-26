import Guy from '../components/Guy/Guy';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import FixedSocialIcons from '../components/SocialIcons/FixedSocialIcons';
import ScrollToTop from '../components/SocialIcons/ScrollToTop';
import Footer from '../components/Footer/Footer';


function Home() {
  return (
    <>
      <Guy />
      <Projects />
      <About />
      <Contact />
      <FixedSocialIcons />
      <Footer/>
      <ScrollToTop />
    </>
  );
}

export default Home;