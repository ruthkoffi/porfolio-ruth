import Title from "./Title"
import img from '../assets/img.jpg'
import { LetterText, CalendarSync, Calculator  } from "lucide-react"

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je suis un développeur frontend avec une bonne expérience.",
        icon: <LetterText className="text-yellow-600 scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
        icon: <CalendarSync className="text-yellow-600 scale-150" />,
    },
    {
        id: 2,
        title: "Maitrise du package office",
        description: "Je execel word poxer point power bi maîtrise les bases du développement backend pour créer des APIs robustes.",
        icon: <Calculator className="text-yellow-600 scale-150" />,
    },
    
];


const About = () => {
  return (
    <div className="bg-gray-200 p-6 mb-5 md:mb-16" id="About">
      <Title title="A propos" />
      <div className="md:h-screen flex justify-center">
        <div className="hidden md:block">
            <img src={img} alt=""className="w-150 object-cover rounded-xl" 
        />
        </div>

        <div className="md:ml-4 space-y-4">
                    {aboutSections.map((section) => (
                        <div key={section.id}
                            className="flex flex-col md:flex-row items-center bg-base-100 p-15 rounded-xl md:w-96 shadow-xl"
                        >
                            <div className="mb-2 md:mb-0">
                                {section.icon}
                            </div>
                            <div className="md:ml-4 text-center md:text-left">
                                <h2 className="text-xl  font-bold mb-1">
                                    {section.title}
                                </h2>
                                <p className="text-sm">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))

                    }
                </div>
      </div>
    </div>
  )
}

export default About
