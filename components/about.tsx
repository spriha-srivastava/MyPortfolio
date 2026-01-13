"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello 👋 I am a pre-final year <span className="font-medium">Computer Science Engineering</span> student with a strong passion for frontend development. I have completed a coding bootcamp where
        I gained hands-on experience in building responsive and user-friendly web applications.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core tech stack includes{" "}
        <span className="font-medium">
          React, Next.js, JavaScript, Tailwind CSS, and modern UI libraries.
        </span>
        I love learning new technologies and continuously improving my skills. Currently, I am seeking a{" "}
        <span className="font-medium">full-time opportunity as a Frontend Developer</span> where I can contribute and grow professionally.
      </p>

    </motion.section>
  );
}
