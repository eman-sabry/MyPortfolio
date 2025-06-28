
import Home from "./components/Home";
import Header from "./components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Element } from "react-scroll";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
 
 useEffect(() => {
    AOS.init({
      duration: 1000,     // مدة الحركة
      once: true,         // تظهر مرة واحدة بس
      offset: 100,        // يبدأ قبل الوصول بالضبط
    });
  }, []);
  return (
  <>

<Header/>
<div className=" mt-10">
 <Element name="Home">
        <Home />
      </Element>

      <Element name="Skills">
        <Skills />
      </Element>

      <Element name="Projects">
        <Projects />
      </Element>

    
    </div>

   
  </>
       
  )
}

export default App
