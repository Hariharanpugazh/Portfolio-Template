"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "./actions/sendEmail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.7);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-5 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:hariharanpugazh@gmail.com">
          hariharanpugazh@gmail.com
        </a>{" "}
        or through form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
      >
        <input
          className="h-14 rounded-lg borderBlack w-full px-4 dark:bg-white dark:bg-opacity-80
      dark:focus:bg-opacity-100 transition-all dark:outline-none
      "
          required
          maxLength={500}
          type="email"
          placeholder="Your email"
          name="senderEmail"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 w-full  dark:bg-white dark:bg-opacity-80
      dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
          maxLength={5000}
          placeholder="Your message"
          name="message"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
