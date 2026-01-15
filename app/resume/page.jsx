"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFlutter, SiDart } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ToolTip,
  ToolTipContent,
  ToolTipProvider,
  ToolTipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, molestiae cupiditate? Corporis cum laborum voluptas, tempore, accusamus optio nisi laboriosam, repellat quos voluptatem facilis ea tempora. Obcaecati nostrum asperiores atque?",
  info: [
    {
      fieldName: "name",
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
      fieldName: "Email",
      fieldValue: "me@bouzidkarim.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, molestiae cupiditate? Corporis cum laborum voluptas, tempore, accusamus optio nisi laboriosam, repellat quos voluptatem facilis ea tempora. Obcaecati nostrum asperiores atque?",
  items: [
    {
      company: "Creative DMS",
      position: "React native Developer",
      duration: "02/2025 - Present",
    },
    {
      company: "NetCapital B.V.",
      position: "Full Stack Developer",
      duration: "04/2024 - 12/2024",
    },
    {
      company: "SYNC",
      position: "Full Stack Developer",
      duration: "10/2023 - 01/2025",
    },
  ],
};

const education = {
  icon: "./assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, molestiae cupiditate? Corporis cum laborum voluptas, tempore, accusamus optio nisi laboriosam, repellat quos voluptatem facilis ea tempora. Obcaecati nostrum asperiores atque?",
  items: [
    {
      institution: "ISET Rades",
      degree: "Mobile application development",
      duration: "2020 - 2022",
    },
    {
      institution: "ISET Mahida",
      degree: "WEB development",
      duration: "2017 - 2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sunt, quo dolorum officia quos debitis ea non quis! Quasi velit aliquid tempore repellendus aperiam quae doloribus. Quod ad inventore numquam!",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
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
                <p className="max-w-150 text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-100">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7.5">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-46 py-6 px-10 rounded-xl flex flex-col 
                                      justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-65 min-h-15 text-center lg:text-right">
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
              Education
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              Skills
            </TabsContent>
            {/* About */}
            <TabsContent value="about" className="w-full">
              About
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
