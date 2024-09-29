"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

const Intro = () => {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/hafis(1).jpg"
              alt="profile picture"
              width="192"
              height="192"
              priority={true}
              quality="95"
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
            className="text-4xl absolute bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Hariharan P.</span> I'm a{" "}
        <span className="font-bold">Python developer & Full Stack Developer</span>. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">Python & GenAI (AI)</span>.
      </motion.h1>
      <motion.div
        className="flex items-center justify-center gap-4 flex-col sm:flex-row px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="group flex items-center bg-gray-900 text-white px-7 py-3 gap-2 rounded-full outline-none focus:scale-110  hover:scale-110 hover:bg-gray-950 active:scale-105 transition "
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group flex items-center bg-white px-7 py-3 gap-2 rounded-full outline-none focus:scale-110  hover:scale-110 active:scale-105 transition borderBlack dark:bg-white/10
        "
          href="/Resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-1 transition opacity-70" />
        </a>
        <a
          className="flex items-center gap-2 p-4 bg-white text-gray-700 rounded-full  focus:scale-110  hover:scale-110 active:scale-105 transition hover:text-gray-950 border border-black/10  dark:bg-white/10 dark:text-white/70"
          href="https://www.linkedin.com/in/hari-haran-z/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="flex items-center gap-2 p-4 bg-white text-gray-700 rounded-full focus:scale-110  hover:scale-110 active:scale-105 hover:text-gray-950 transition border border-black/10 dark:bg-white/10 dark:text-white/70"
          href="https://github.com/Hariharanpugazh"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
