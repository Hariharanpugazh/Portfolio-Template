"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  imageUrl,
  tags,
  link,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className=" group mb-3 sm:mb-8 last:mb-0 "
    >
      <a href={link} target="_blank">
        <section className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] sm:group-even:pl-12 hover:bg-gray-200 transiton rounded-lg dark:bg-white/10  hover:dark:bg-white/20 dark:text-white ">
          <div className="px-5 pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] ">
            <h3 className="text-2xl font-semibold "> {title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wide text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="absolute  hidden  sm:block top-9 -right-[18rem] w-[36.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-[18rem] group-hover:-translate-x-3 group-hover:scale-[1.04] group-hover:-translate-y-3 group-hover:-rotate-2 transition group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-3 "
          />
        </section>
      </a>
    </motion.div>
  );
};
export default Project;
