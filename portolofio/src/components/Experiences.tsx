import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgVUE from "../assets/techno/Vue_js.jpeg";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPHP from "../assets/techno/PHP.jpeg";
import imgLARAVEL from "../assets/techno/Laravel.jpeg";
import imgREACTNATIVE from "../assets/techno/React JS .jpeg";
import imgSQL from "../assets/techno/sql1.jpeg";

import black from "../assets/companies/black.jpeg";
import srvinfo from "../assets/companies/srvinfo.jpeg";


const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React JS", image: imgREACT },
    { id: 4, name: "Vue JS", image: imgVUE },
    { id: 4, name: "PHP", image: imgPHP },
     { id: 4, name: "Laravel", image: imgLARAVEL },
     { id: 4, name: "ReactNative", image: imgREACTNATIVE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "MySQL", image: imgSQL },

   
];

const experiences = [
    {
        id: 1,
        role: "Stagiaire",
        company: "CHU de Cocody : SERVICE INFORMATIQUE",
        period: "Mars 2023 - Aout 2023",
        description: [
            "Stade academique portant sur la création d'une application pour la gestion des dossiers patients du  services d'ondoto-stomatologie .",
            "Maintenance informatique, réseaux et câblage informatique. ",
        ],
        image: srvinfo,
    },
    {
        id: 2,
        role: "Controleur technique ",
        company: "Black INGENIEURIE",
        period: "Septembre 2023 - Juillet 2024",
        description: [
            "Récensement et dispatching du matériels informatique et électrique",
            "Utilisation de l'outils Excel pour la réalisations les tableaux de récensements et les dévis",
        ],
        image: black,
    },
]    


const Experiences = () => {
  return (
    <div className="bg-gray-200 p-10 mb-10 md:mb-32" id="Experiences">
        <Title title="Expériences" />
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        {/* <div className="flex  flex-col-reverse md:flex-row justify-center items-center"> */}
                <div className="flex flex-wrap gap-4  justify-center items-center md:w-1/2 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className=" flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-purple-600">
                                <img src={skill.image} alt={skill.name}
                                    className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>
       {/* </div> */}
      
       
       <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((expericence) => (
                        <div
                            key={expericence.id}
                            className="flex flex-col p-10 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center">
                                <img
                                    src={expericence.image}
                                    alt={expericence.company}
                                    className="object-cover h-10 w-10"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {expericence.role} , {expericence.company}
                                    </h1>
                                    <span className="text-sm">{expericence.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {expericence.description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences
