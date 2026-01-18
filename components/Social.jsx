import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Karim-bz" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/karimbouzid/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/kaarim.bz/" },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} target="_blank" className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
