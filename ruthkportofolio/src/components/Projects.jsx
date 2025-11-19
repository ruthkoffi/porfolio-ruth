import React from "react";
import { Carousel } from "./ui/carousel";
import { ProjectsItems } from "../constant/data";

//motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Projects = () => {
  return (
    <section className="section" id="projects">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <motion.h2 variants={variants.fadeInUp} className="text-center text-5xl text-amber-500">
          Projets Récents
        </motion.h2>

        {/* Card wrapper */}
        <motion.div
          variants={variants.fadeInUp}
          className="relative overflow-hidden w-full h-full py-20"
        >
          <Carousel slides={ProjectsItems} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
