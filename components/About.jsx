import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import DoctorList from "./DoctorList";
import DoctorSearch from "./DoctorSearch";

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

const About = () => {
  useEffect(() => {
    const titles = document.querySelectorAll(".h_title");
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll("span span");
      const delay = index * 0.08;

      tl.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: "cubic-text",
        },
        delay
      );
    });
    return () => {};
  }, []);
  return (
    <div className="h-screen bg-slate-500 justify-between">
      <div></div>
      <button className="text-black border-2 bg-[#f2f4f5] border-[#65a0b466] rounded-md mt-28 p-4 mx-16 hover:bg-[#487381] ease-in transition-all duration-300 hover:text-white font-semibold">
        <a href="https://diseaseprediction-2023.streamlit.app/" target="_blank">
          Enter Your Symptoms
        </a>
      </button>

      <div className="flex gap-60 p-20">
        <DoctorList className="text-red-300"/>
        <DoctorSearch />
      </div>
    </div>
  );
};

export default About;
