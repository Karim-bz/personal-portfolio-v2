"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I create modern, responsive websites using React, Next.js, and WordPress. From landing pages to business websites, I focus on clean design, fast performance, and smooth user experience.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "I build cross-platform apps for Android and iOS using React Native and Flutter. From UI design to deployment, I deliver apps that look great and work perfectly on every device.",
    href: "",
  },
  {
    num: "03",
    title: "Dashboards & Data Management",
    description:
      "I develop custom dashboards and admin panels for apps and websites, making complex data easy to track, manage, and act upon.",
    href: "",
  },
  {
    num: "04",
    title: "UI/UX Design",
    description:
      "I design clean, modern interfaces and user experiences that are intuitive, visually appealing, and easy to navigate, helping apps and websites stand out.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto h-full px-4 lg:px-8 xl:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-15"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-17.5 h-17.5 rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
