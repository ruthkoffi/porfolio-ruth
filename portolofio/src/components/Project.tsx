import Title from "./Title"

import myshop from'../assets/projects/myshop.png';
import html from'../assets/projects/html.jpg';
import yowl from'../assets/projects/yowl.png';
import postit from'../assets/projects/postit.png';
import { Github } from "lucide-react";


const projects = [
  {
    id:1,
    title: 'Site vitrine',
    description:'Site vitrine mettant en avant les articles proposés par le client. Site responsive avec pagination acordéon dynamique.',
    technologie: [' HTML' , 'CSS' , 'JavaScript'],
    repoLink: '	https://github.com/EpitechCodingAcademyPromo2025/C-DEV-113-ABJ-1-3-integration-jean-christ.ouali',
    image: html,
  },

  {
    id:2,
    title: 'Plateforme de vente en ligne',
    description:"MY SHOP est un site E-commerce surperviser par un administrateur qui est charger de créer , de modifier ou de supprimer un produit de la base de donnée ou encore de l'afficher à la page d'accueil",
    technologie: [' HTML' , 'Taiwind CSS' , 'PHP', 'MySql'] ,
    repoLink: 'https://github.com/EpitechCodingAcademyPromo2025/C-DEV-114-ABJ-1-3-myshop-ruth.koffi',
    image: myshop,
  },

  {
    id:3,
    title: 'Gestionnaire de tâches',
    description:'POSTIT est une plateforme permettant de créer , de modifier ou de supprimer une note pour une bonne organisation de ses tâches',
    technologie: [' HTML' , ' Tailwind CSS' , 'Vue JS'],
    repoLink: 'https://github.com/EpitechCodingAcademyPromo2025/C-DEV-121-ABJ-1-3-twp-ruth.koffi',
    image: postit,
  },

  {
    id:4,
    title: 'Application de chat sans barrières',
    description:' YOWL plateforme sans retriction premettant de commenter toutes les pulications du net juste ou copiant leur URL ',
    technologie: [' HTML' , ' Tailwind CSS' , 'Laravel' , 'Vue Js'],
    repoLink: 'https://github.com/EpitechCodingAcademyPromo2025/C-DEV-160-ABJ-1-3-yowl-ruth.koffi',
    image: yowl,
  }
  


]

const Projects = () => {
    return (
        <div className="bg-gray-200 p-6 mb-5 md:mb-16" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white  p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold text-xl text-purple-600">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologie.map((tech) => (
                                <span className="bg-yellow-100 text-yellow-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-600 dark:text-yellow-600">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                <Github className="w-10 text-purple-700" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects