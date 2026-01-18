"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { SiAppstore } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../../components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Fly Delivery",
    description:
      "A complete delivery platform designed for food and product delivery using bikes. The system includes three mobile applications (customer, restaurant, and delivery driver) along with an admin dashboard to manage orders, drivers, and statistics in real time.",
    stack: [
      { name: "Flutter" },
      { name: "Android" },
      { name: "PHP" },
      { name: "SQL" },
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "REST API" },
    ],
    image: "/assets/work/flydelivery.png",
    alt: "Fly Delivery",
    live: "",
    github: "",
    appstore: "https://apps.apple.com/ro/app/fly-delivery/id6502603819",
    playstore:
      "https://play.google.com/store/apps/details?id=tn.flydelivery.client&hl=fr",
  },
  // {
  //   num: "02",
  //   category: "frontend",
  //   title: "Olivier Madera",
  //   description:
  //     "An eCommerce website for selling handcrafted wooden products used for food presentation and home decoration. The platform focuses on clean design, product presentation, and an intuitive shopping experience.",
  //   stack: [
  //     { name: "Wordpress" },
  //     { name: "SQL" },
  //     { name: "HTML5" },
  //     { name: "CSS3" },
  //     { name: "WooCommerce" },
  //   ],
  //   image: "/assets/work/thumb2.png",
  //   live: "http://oliviermadera.com/",
  //   github: "",
  //   appstore: "",
  //   playstore: "",
  // },
  {
    num: "02",
    category: "frontend",
    title: "Personal Portfolio",
    description:
      "A modern and responsive personal portfolio website showcasing projects, skills, and experience. Built with performance, animations, and clean UI in mind to highlight professional work effectively.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/portfolio-thumb.png",
    live: "https://bouzidkarim.com/",
    github: "https://github.com/Karim-bz/personal-portfolio-v2",
    appstore: "",
    playstore: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get currrent slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center xl:px-0"
    >
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        <div className="flex flex-col xl:flex-row xl:gap-7.5">
          <div className="w-full xl:w-[50%] xl:h-115 flex flex-col xl:justify-between order-2 xl:order-0">
            <div className="flex flex-col gap-7.5 h-[50%]">
              {/* Outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* Remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live app link */}
                {project.live != "" && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-17.5 h-17.5 rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* Github Button */}
                {project.github != "" && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-17.5 h-17.5 rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* Google Play */}
                {project.playstore != "" && (
                  <Link href={project.playstore}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-17.5 h-17.5 rounded-full bg-white/5 flex justify-center items-center group">
                          <FaGooglePlay className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Google Play</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* App Store */}
                {project.appstore != "" && (
                  <Link href={project.appstore}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-17.5 h-17.5 rounded-full bg-white/5 flex justify-center items-center group">
                          <SiAppstore className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>App Store</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          {/* Swiper */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-130 mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-115 relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full bg-primary">
                        <img
                          src={project.image}
                          alt=""
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
