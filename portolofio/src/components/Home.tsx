import { Mail } from "lucide-react"
import img from '../assets/img.jpg'
const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
      <div className="flex flex-col justify-end">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
            Bonjour, <br />je suis <span className="text-purple-500"> Ruth A. M. KOFFI</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eaque nostrum sequi <br /> vel deleniti, harum, vero veniam corrupti doloribus a laborum tempore hic amet  <br />unde quod quaerat temporibus obcaecati repudiandae.
        </p>
        <a href="" className="flex text-purple-500 text-ml font-bold  hover:underline hover:text-yellow-600">
           <Mail className=""/> 
           Contactez-moi
        </a>
      </div>
      <div className="md:ml-60 ">
        <img src={img} alt=""className="w-96 h-96 object-cover border-8 border-yellow-600 
        shadow-xl"
        style={{
            borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
        }}
        />
      </div>
    </div>
  )
}

export default Home
