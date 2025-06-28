export default function Projects() {
    const myprojects = [
 {
    title: "Weddingly",
    image: "/img/Screenshot 2024-10-21 014708.png",
    description: "A wedding planning platform with gift, services, and booking.",
    link: "https://eman-sabry.github.io/thispagedoesnotexist"
  },
  {
    title: "Saydalia",
    image: "/img/Screenshot 2025-05-28 170557.png",
    description: "Responsive pharmacy website with modern UI.",
    link: "https://eman-sabry.github.io/thispagedoesnotexist"
  },
  {
    title: "Child Vaccination System",
    image: "/img/Screenshot 2025-05-13 060453.png",
    description:
      "A full web system for tracking children's vaccinations with role-based login (Doctors & Parents). Includes secure dashboard and health tracking.",
    link: "https://eman-sabry.github.io/thispagedoesnotexist"
  },
  {
    title: "Vet Clinic Website",
    image: "/img/Screenshot 2025-06-21 161914.png", 
    description:
      "A modern responsive website for a veterinary clinic with services, contact, and booking section.",
    link: "https://eman-sabry.github.io/Vet/", 
  },
];
  return (
    <div>
        <h1  data-aos="fade-left" className="text-white text-5xl md:text-6xl font-extrabold leading-tight my-4 drop-shadow-lg text-center ">
            My <span className="text-deep-purple-300">Projects</span>

        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-28 py-10">
        {myprojects.map((project, index) => (
          <div
           data-aos="fade-up"
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-xl text-white font-bold">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition-opacity"
            >
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
