import { FaFacebook, FaSquareInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { Link } from "react-scroll";
export default function Home() {
  return (
    <>
<div className="flex flex-col-reverse md:flex-row items-center justify-between text-white px-4 md:px-6 py-16 md:py-20 gap-10  min-h-screen">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-16">
        
        <div data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome to My Portfolio</h1>
        </div>

        <br />

        <div data-aos="fade-right" data-aos-delay="300">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            I’m <span className="text-deep-purple-300">Eman Sabry</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium mb-6 drop-shadow-lg">
            Frontend Web Developer
          </h2>
          
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mb-8">
            <a target="_blank" data-aos="fade-left" data-aos-delay="1000" href="https://www.facebook.com/eman.sabry.94214508?locale=ar_AR">
              <FaFacebook className="text-2xl" />
            </a>
            <a target="_blank"  data-aos="fade-left" data-aos-delay="1000" href="https://www.instagram.com/emily19_8/">
              <FaSquareInstagram className="text-2xl" />
            </a>
            <a target="_blank"  data-aos="fade-left" data-aos-delay="1000" href="https://www.linkedin.com/in/eman-sabry-bb791a2b5/">
              <FaLinkedin className="text-2xl" />
            </a>
            <a target="_blank"  data-aos="fade-left" data-aos-delay="1000" href="https://github.com/eman-sabry">
              <FaGithub className="text-2xl" />
            </a>
          </div>

          {/* Download CV Button */}
          <div data-aos="zoom-in" data-aos-delay="1500">
            <a
              href="eman sabry cv (3).pdf"
              download
              className="inline-block px-6 py-3 bg-deep-purple-300 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
            >
              📄 Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
        <img
          src="img/f3c5a772705cb80fbe152aea96cc2514-removebg-preview.png"
          alt="Laptop showing code"
          className="w-96 md:w-96 h-auto object-contain"
        />
      </div>
    </div>
  
    </>
    
  );
}
