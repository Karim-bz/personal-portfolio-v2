"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+216) 94 770 763",
    link: "https://wa.me/21694770763",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "me@bouzidkarim.com",
    link: "mailto:me@bouzidkarim.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Monastir, Tunisia",
    link: "",
  },
];
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      // className="py-2"
    >
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        <div className="flex flex-col xl:flex-row gap-7.5">
          {/* FORM */}
          <div className="xl:w-[55%] order-2 xl:order-0">
            <form className="flex flex-col gap-4 p-8 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Minima, sapiente deserunt.
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="firstname" placeholder="First name" />
                <Input type="lastname" placeholder="Last name" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              {/* Select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">WEB Dev</SelectItem>
                    <SelectItem value="mobile">Mobile Dev</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Text Area */}
              <Textarea
                className="h-30"
                placeholder="Type your message here."
              />
              {/* Btn */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* INFO */}
          <div className="flex-1 flex items-center xl:justify-start order-1 xl:order-0 mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-13 h-13 xl:w-18 xl:h-18 bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      {item.link != "" ? (
                        <Link href={item.link} className="text-xl">
                          {item.description}
                        </Link>
                      ) : (
                        <h3 className="text-xl">{item.description}</h3>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
