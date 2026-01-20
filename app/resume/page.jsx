"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaBootstrap,
  FaPhp,
  FaNodeJs,
  FaGitAlt,
  FaAndroid,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFlutter,
  SiKotlin,
  SiSymfony,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJira,
  SiTrello,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useState } from "react";

// about data
const about = {
  title: "About me",
  description:
    "Get to know me,I am a Software engineer with a passion for modern web and mobile development",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Karim Bouzid",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+216) 94 770 763",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Tunisian",
    },

    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "karim.bouzid.pro@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, French, Arabic",
    },
  ],
};

const experience = {
  icon: "./assets/resume/badge.svg",
  title: "My Experience",
  description:
    "My growth path is in the field of technology and development, where I have built, learned, and improved along the way.",
  items: [
    {
      company: "Creative DMS",
      position: "Front-end Developer",
      duration: "03/2025 - Present",
    },
    {
      company: "SYNC",
      position: "Software Engineer",
      duration: "10/2023 - 01/2025",
    },
    {
      company: "NetCapital B.V.",
      position: "Software Engineer",
      duration: "04/2024 - 12/2024",
    },
    {
      company: "Octoplus",
      position: "Software Engineer Intern",
      duration: "03/2022 - 09/2022",
    },
    {
      company: "IPARK",
      position: "Full Stack Web Developer Intern",
      duration: "01/2020 - 06/2020",
    },
    {
      company: "SW Consulting",
      position: "Web Developer Intern",
      duration: "01/2018 - 02/2018",
    },
  ],
};

const education = {
  icon: "./assets/resume/cap.svg",
  title: "My education",
  description: "Where it all started, By Learning the fundamentals",
  items: [
    {
      institution: "ISET Rades",
      degree: "Master degree on Mobile Application Development",
      duration: "2020 - 2022",
    },
    {
      institution: "ISET Mahdia",
      degree: "Bachelor Degree on WEB development",
      duration: "2017 - 2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Skills built through experience and continuous learning.",
  skillsList: [
    // Frontend
    { icon: <FaHtml5 />, name: "HTML 5", category: "Front end" },
    { icon: <FaCss3Alt />, name: "CSS 3", category: "Front end" },
    { icon: <FaJs />, name: "JavaScript", category: "Front end" },
    { icon: <FaReact />, name: "ReactJS", category: "Front end" },
    { icon: <SiNextdotjs />, name: "NextJS", category: "Front end" },
    { icon: <FaAngular />, name: "Angular", category: "Front end" },
    { icon: <FaBootstrap />, name: "Bootstrap", category: "Front end" },

    // Mobile
    { icon: <FaAndroid />, name: "Android", category: "Mobile" },
    { icon: <SiKotlin />, name: "Kotlin", category: "Mobile" },
    { icon: <SiFlutter />, name: "Flutter", category: "Mobile" },
    { icon: <FaReact />, name: "React Native", category: "Mobile" },

    // Backend
    { icon: <FaPhp />, name: "PHP", category: "Back end" },
    { icon: <SiSymfony />, name: "Symfony", category: "Back end" },
    { icon: <FaNodeJs />, name: "NodeJS", category: "Back end" },
    { icon: <SiExpress />, name: "ExpressJS", category: "Back end" },

    // Databases
    { icon: <SiMongodb />, name: "MongoDB", category: "Database" },
    { icon: <SiMysql />, name: "SQL", category: "Database" },

    // Tools
    { icon: <FaGitAlt />, name: "Git", category: "Tools" },
    { icon: <SiJira />, name: "Jira", category: "Tools" },
    { icon: <SiTrello />, name: "Trello", category: "Tools" },
  ],
};

const Resume = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredSkills =
    activeFilter === "all"
      ? skills.skillsList
      : skills.skillsList.filter((skill) => skill.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[75vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-15"
        >
          <TabsList className="flex flex-col w-full max-w-95 mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-7.5 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-95">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5.5">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-40 py-6 px-10 rounded-xl flex flex-col 
                                      justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-75 min-h-15 text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-7.5 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-95">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7.5">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-46 py-6 px-10 rounded-xl flex flex-col 
                                      justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl min-h-15 text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-7.5">
                <div className="flex flex-col gap-7.5 text-center xl:text-left">
                  <div className="text-4xl font-bold">{skills.title}</div>
                  <div className="max-w-150 text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </div>
                </div>
                <div className="flex flex-wrap justify-center xl:justify-start gap-3">
                  {[
                    "all",
                    "Front end",
                    "Mobile",
                    "Back end",
                    "Database",
                    "Tools",
                  ].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-4 py-2 rounded-full text-sm capitalize transition-all
                        ${
                          activeFilter === filter
                            ? "bg-accent text-primary"
                            : "bg-[#232329] text-white/70 hover:text-white"
                        }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-7.5">
                  {filteredSkills.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-37.5 bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap=[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 pt-5 xl:grid-cols-2 gap-y-6 max-w-155">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
