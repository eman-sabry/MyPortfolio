export default function Projects() {
  const myprojects = [
    {
      title: "medical care",
      image: "img/Screenshot 2025-11-26 190132.png",
      description:
        "an e-commerce platform designed to offer a wide range of medical products, including medical devices, medications, and cosmetics, all in one place",
      link: "https://medical-care-gilt.vercel.app/",
    },
    {
      title: "Saydalia",
      image: "img/Screenshot 2025-05-28 170557.png",
      description: "Responsive pharmacy website with modern UI.",
      link: "https://eman-sabry.github.io/thispagedoesnotexist",
    },
    {
      title: "Child Vaccination System",
      image: "img/Screenshot 2025-05-13 060453.png",
      description:
        "A full web system for tracking children's vaccinations with role-based login (Doctors & Parents). Includes secure dashboard and health tracking.",
      link: "https://eman-sabry.github.io/thispagedoesnotexist",
    },
    {
      title: "StyleHup — E-Commerce Website",
      image: "img/Screenshot 2025-10-23 142108.png",
      description:
        "StyleHup is a modern e-commerce platform built with React.js (Vite) as part of a university project The goal of this project is to create a fully functional and responsive online fashion store with advanced features such as product filtering, authentication, and an admin dashboard.",
      link: "https://style-hup.vercel.app/",
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 py-10">
      <h1
        data-aos="fade-left"
        className="text-white text-4xl sm:text-5xl font-extrabold leading-tight mb-10 drop-shadow-lg text-center"
      >
        My <span className="text-deep-purple-300">Projects</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {myprojects.map((project, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg bg-gray-800"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl text-white font-bold">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-base sm:text-lg font-semibold transition-opacity"
            >
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
