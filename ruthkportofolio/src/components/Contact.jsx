import React from "react";
import { contactItems } from "../constant/data";
import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";

//motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid gap-10 md:grid-cols-2 md:divide-x md:divide-neutral-800"
      >
        {/* Content */}
        <motion.div variants={variants.fadeIn}>
          <h2>Contactez-moi</h2>
          <p className="mt-3.5 mb-7">
           Prêt à travailler sur votre prochain projet. Discutons ensemble de la manière dont je peux vous aider à donner vie à vos idées.
          </p>

          {/* list */}
          <ul className="">
            {contactItems.map((item) => (
              <li key={item.id} className="flex items-center gap-1.5">
                <p className="text-white font-semibold">{item.label}</p>
                <a href="#">{item.link}</a>
              </li>
            ))}
          </ul>

          {/* Social profiles */}
          <div className="flex items-center gap-2 mt-6">
            <button className="hover:text-neutral-300 transition-colors">
              <RiLinkedinBoxFill size={30} />
            </button>
            <button className="hover:text-neutral-300 transition-colors">
              <RiGithubFill size={30} />
            </button>
          </div>
        </motion.div>
        {/* Form */}
        <motion.form
          variants={variants.fadeIn}
          action=""
          className="grid gap-5"
        >
          {/* Input field */}
          <div className="grid gap-2">
            <label htmlFor="name">Nom *</label>
            <input
              type="text"
              placeholder="your name"
              required
              className="input"
            />
          </div>
          {/* Input field */}
          <div className="grid gap-2">
            <label htmlFor="name">Email *</label>
            <input
              type="email"
              placeholder="Email"
              required
              className="input"
            />
          </div>
          {/* Text area */}
          <div className="grid gap-2">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              placeholder="Message"
              className="h-40 w-full border border-neutral-800 indent-4 py-2 resize-none"
            />
          </div>

          <button className="primary-btn max-w-max">Soumettre</button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
