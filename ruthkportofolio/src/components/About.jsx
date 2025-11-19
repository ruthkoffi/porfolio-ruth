import React from "react";
import { aboutItems } from "../constant/data";

//motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const About = () => {
  return (
    <section className="section bg-secondary-clr" id="about">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 variants={variants.fadeInUp} className="text-amber-500 text-center justify-center text-5xl">A propos de moi</motion.h2>
        <motion.p variants={variants.fadeInUp} className="mt-3 mb-9 items-center justify-center font-semibold text-xl">
          Développeuse junior motivée, passionnée par la création de solutions logicielles modernes.
Diplômée en développement d'application, avec une solide des bases du web et de la programmation orientée objet.
Compétent en HTML, CSS, JavaScript et familiarisé avec les frameworks front-end les plus courants.<br/>
Possède d'autres connaissances en PHP et en développement backend.
À l'aise avec Git, GitHub et les bonnes pratiques de versionnement.
Curieuse, autonome et toujours en quête d'apprentissage continuent.
Capable de comprendre rapidement les besoins fonctionnels d'un projet.
Habitué à travailler sur des projets académiques ou personnels structurés.
Particulièrement intéressée par le développement d'interfaces intuitives.
Capable de résoudre des problèmes techniques et logiques.<br/>
À l'écoute des nouvelles technologies et tendances du développement.
<br/>Rigoureuse, organisée et attentive soucieuse du travail bien fait je suis 
prète à m'investir dans une équipe pour contribuer activement à la réussite des projets.
        </motion.p>

        {/* Skills */}
        <div className="">
          <motion.p
            variants={variants.fadeInUp}
            className="font-semibold text-xl mb-3 text-indigo-500"
          >
            Skills:
          </motion.p>

          <ul className="space-y-2.5">
            {aboutItems.map((item) => (
              <motion.li variants={variants.fadeInUp} key={item.id}>
                <p className="font-semibold">✔ {item.label}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
