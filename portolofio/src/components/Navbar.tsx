import { MonitorCog } from "lucide-react"
const Navbar = () => {
    return (
        <div className=" bg-amber-50 flex justify-center md:justify-between items-center p-4">
            <a href="#" className="flex items-center font-bold text-5xl md:text-3xl">
                <MonitorCog  classNane="mr-2" />
                DEV <span className="text-purple-600">Girl</span>
            </a>
            <ul className="hidden md:flex space-x-6">
            <li><a href="#About"className="hover:text-yellow-600 px-6 py-2 bg-gradient-to-r from-yellow-600 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">A propos de moi</a></li>
            <li><a href="#Experiences"className="hover:text-yellow-600 px-6 py-2 bg-gradient-to-r from-yellow-600 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"> Mes expériences</a></li>
            <li><a href="#Projects"className="hover:text-yellow-600 px-6 py-2 bg-gradient-to-r from-yellow-600 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">Mes projets</a></li>
            <li><a href="#Contact"className="hover:text-yellow-600 px-6 py-2 bg-gradient-to-r from-yellow-600 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">Contact</a></li>
            </ul>
        </div>
    )
}
export default Navbar
