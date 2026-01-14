"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A repellat sit pariatur reprehenderit, rerum possimus autem nihil perferendis placeat fugit voluptatum, quo vel aliquid at! Voluptas exercitationem quia numquam. Numquam!",
    href: "",
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A repellat sit pariatur reprehenderit, rerum possimus autem nihil perferendis placeat fugit voluptatum, quo vel aliquid at! Voluptas exercitationem quia numquam. Numquam!",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A repellat sit pariatur reprehenderit, rerum possimus autem nihil perferendis placeat fugit voluptatum, quo vel aliquid at! Voluptas exercitationem quia numquam. Numquam!",
    href: "",
  },
  {
    num: "04",
    title: "DevOps",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A repellat sit pariatur reprehenderit, rerum possimus autem nihil perferendis placeat fugit voluptatum, quo vel aliquid at! Voluptas exercitationem quia numquam. Numquam!",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
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
