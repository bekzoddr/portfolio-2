import React from "react";
import { FaHtml5, FaCss3, FaBootstrap, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFiletypeScss } from "react-icons/bs";
import { Container } from "@mui/material";

const skills = [
  { icon: <FaHtml5 style={{ color: "#E34F26" }} />, title: "HTML" },
  { icon: <FaCss3 style={{ color: "#1572B6" }} />, title: "CSS" },
  {
    icon: <IoLogoJavascript style={{ color: "#F7DF1E" }} />,
    title: "JavaScript",
  },
  { icon: <FaReact style={{ color: "#61DAFB" }} />, title: "React" },
  { icon: <FaBootstrap style={{ color: "#7952B3" }} />, title: "Bootstrap" },
  {
    icon: <RiTailwindCssFill style={{ color: "#38B2AC" }} />,
    title: "Tailwind CSS",
  },
  { icon: <BsFiletypeScss style={{ color: "#CC6699" }} />, title: "SCSS" },
];

const Skills = () => {
  return (
    <section className="skills">
      <Container maxWidth="lg">
        <h2 className="skills__title">My Skills</h2>
        <div className="icons">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill__icon">{skill.icon}</div>
              <div className="skill__title">
                <h3>{skill.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
