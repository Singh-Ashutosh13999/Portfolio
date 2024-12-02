import Navbar from "./component/Navbar/navbar.js";
import Intro from './component/intro/Intro.js';
import Skills from './component/Skiils/Skills.js'
import Works from './component/Works/Works.js'
import Education  from "./component/Education/Education.js";
import Contact from "./component/Contact/Contact.js";
import Footer from "./component/Footer/Footer.js";
function App() {
  return (
    <div className="App ">
    <Navbar/>
    <Intro/>
    <Skills/>
    <Works/>
    <Education/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
