import React from "react";
import { heroIcons } from "../constant/data";
import Button from "./Button";
import { BackgroundGradient } from "./ui/BackgroundGradient";

//motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Hero = () => {
  return (
    <section className="py-28 lg:pt-40" id="home">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container flex flex-col items-center"
      >
        {/* Image */}
        <motion.div variants={variants.fadeIn}>
          <BackgroundGradient className="w-70 h-70 lg:w-80 lg:h-auto rounded-full  bg-zinc-900">
            <figure className="rounded-full overflow-hidden">
              <img
                src="/images/hero-img.jpeg"
                alt="ruth"
                width={452}
                height={452}
              />
            </figure>
          </BackgroundGradient>
        </motion.div>
        {/* Content */}
        <div className="text-center mt-8">
          <motion.h1
            variants={variants.fadeInUp}
            className="text-5xl lg:text-5xl mb-1.5 font-bold t"
          >
            Bonjour , je suis <span className="text-indigo-400">Mentiawaley Ruth KOFFI.</span>  
          </motion.h1>
          <motion.h2 variants={variants.fadeInUp}>
            <span className="text-amber-500">Développeuse FullStack Junior</span>
          </motion.h2>
          <motion.p
            variants={variants.fadeInUp}
            className="max-w-[820px] mx-auto mt-4 mb-6 text-xl font-semibold"
          >
             Je m'appelle Ruth , je suis développeur FullStack et je conçois des expériences numériques fluides
            grâce à un code innovant et un design intuitif. Fort de mon
            expertise dans les technologies de pointe et de ma passion pour l'optimisation des performances
            , je transforme des exigences commerciales complexes en
            applications évolutives et centrées sur l'utilisateur qui suscitent un engagement significatif


          </motion.p>

          {/* Wrapper */}
          <motion.div
            variants={variants.fadeInUp}
            className="flex items-center gap-5 justify-center"
          >
            {heroIcons.map((icon) => (
              <a
                href="#"
                target="_blank"
                className="hover:text-indigo-400 transition-colors"
                key={icon.id}
              >
                <icon.icon size={30} />
              </a>
            ))}
          </motion.div>

          {/* btn wrapper */}
          <motion.div
            variants={variants.fadeInUp}
            className="mt-10 flex items-center gap-5 justify-center flex-wrap"
          >
            <Button label="Télécharger mon CV" classes="primary-btn" icon />
            <Button label="Contactez-moi" classes="secondary-btn" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
