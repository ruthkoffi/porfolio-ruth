
import { Github  } from "lucide-react"
import { Mails } from "lucide-react"
import { Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <div>
     
    <footer className="bg-white dark:bg-gray-800 mt-12 transition-colors duration-300">
        <div className=" container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center" >
            <p>&copy; 2025 Mon portfolio .   </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
                 <Github className="text-yellow-600"/>
                <Mails className="text-yellow-600" />
                <Linkedin className="text-yellow-600" />

                </div>
             
        </div>
    </footer>
</div>
  
  )
}

export default Footer
