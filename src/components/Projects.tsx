// import Title from "./Title"
import React from "react";
import img1 from '../assets/projects/2tr.png';
import img2 from '../assets/projects/3rt.png';
import img3 from '../assets/projects/2msh.png';
import img4 from '../assets/projects/4fd.png';
import img5 from '../assets/projects/yw.png';
import img6 from '../assets/projects/int.png';
// import { Github, Video } from "lucide-react";
import { motion } from "motion/react";
import * as variants from "../motion/animation";


const projects = [
    {
        id: 1,
        title: 'My ShowTime',
        description: " Application web permettant de faire des reservation de ticket d'évènements et de suivre l'actualité musicale.",
        technologies: ['Next JS ', 'API', 'Tailwind CSS'],
        // demoLink: '#',
        // repoLink: '#',
        image: img1,
    },
    {
        id: 2,
        title: 'My Rotten Tomato',
        description: 'Platefome numerique pour la visualisation de films et  séries. ',
        technologies: ['Nuxt.js', 'TypeScript','API','Mango BD'],
        // demoLink: '#',
        // repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: 'My Shop',
        description: ' Site E-commerce. ',
        technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
        // demoLink: '#',
        // repoLink: '#',
        image: img3,
    },
    {
        id: 4,
        title: 'Free Ad',
        description: 'Site E-commerce.',
        technologies: ['Tailwind CSS', 'Laravel', 'MySQL'],
        // demoLink: '#',
        // repoLink: '#',
        image: img4,
    },
    {
        id: 5,
        title: 'Freedom',
        description: "Plateforme numérique permettant de commenter tous contenus du net à partir de l'url du post.",
        technologies: ['Tailwind CSS', 'Laravel', 'MySQL'],
        // demoLink: '#',
        // repoLink: '#',
        image: img5,
    },
    {
        id: 6,
        title: 'Ma Boutique',
        description: 'Site E-commerce Front-End.',
        technologies: ['HTML', 'CSS'],
        // demoLink: '#',

        // repoLink: '#',
        image: img6,
    },
];

const Projects = () => {
    return (
        <div className="py-10" id="projects">
            <motion.h2 variants={variants.fadeInUp} className="text-center text-5xl text-amber-500">
          Projets Récents
        </motion.h2>
            {/* <Title title="Mes Projets" /> */}
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {/* <div className="flex">
                            <a className="btn btn-accent w-2/3" href={project.demoLink}>
                                Demo
                                <Video className="w-4" />
                            </a>

                            <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                <Github className="w-4" />
                            </a>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects