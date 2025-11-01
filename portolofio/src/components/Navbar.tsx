import { MonitorCog } from "lucide-react"
const Navbar = () => {
    return (
        <div className="flex justify-center md:justify-between items-center p-4">
            <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
                <MonitorCog  classNane="mr-2" />
                DEV <span className="text-purple-600">Girl</span>
            </a>
            <ul className="hidden md:flex space-x-6">
            <li><a href="#"className="hover:text-yellow-600">Accueil</a></li>
            <li><a href="#"className="hover:text-yellow-600">A propos de moi</a></li>
            <li><a href="#"className="hover:text-yellow-600"> Mes expériences</a></li>
            <li><a href="#"className="hover:text-yellow-600">Mes projets</a></li>
            </ul>
        </div>
    )
}

export default Navbar
