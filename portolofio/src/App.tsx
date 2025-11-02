import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Experiences from "./components/Experiences"
import Project from "./components/Project"
import Footer from "./components/Footer"
// import Contact from "./components/Contact"

export default function App(){
  return(
      <div >
     <div className="p-5 md:px-[15%]">
       <Navbar />
       <Home />
     </div>
     <About />
     <div className="p-5 md:px-[15%]">
      <Experiences />
     </div>
    <Project />
    <div className="p-5 md:px-[15%]">
      {/* <Contact /> */}
     </div>
     <Footer />
    </div>
  )
}