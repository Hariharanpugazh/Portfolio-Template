'use client'
import React, { useEffect } from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

const About = () => {
  const { ref } = useSectionInView('About')

  return <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' id='about'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    ref={ref}
  >
    <SectionHeading>
      about
    </SectionHeading>
    <p className='mb-3'>
    My journey started with a strong interest in emerging technologies, which inspired me to delve into programming and software development. {" "}
      <span className="font-medium"></span>,I established a solid foundation through online courses and hands-on projects in {" "}
      <span className="italic">Python Programming and Machine Learning</span>.{" "}
      <span className="italic">My enthusiasm for</span>AI and data science drove me to work on projects like Deepfake Detection using Hugging Face models and analyzing concentration drops in manufacturing processes.
      </p>
      <p>
      I love problem-solving, and my favorite aspect of programming is the challenge of creating innovative solutions. I'm committed to continuous learning, particularly in AI advancements. Currently, I'm pursuing a {" "}
      <span className="font-medium">B.Tech in Artificial Intelligence and Data Science</span>with a focus on frontend web development.
    </p>
    <p>
    I also enjoy exploring new technologies, contributing to{" "}
      <span className="font-medium">open-source projects</span>. informed about the latest trends in{" "}
      <span className="font-medium">AI and automation.</span>.
    </p>
  </motion.section>
}

export default About