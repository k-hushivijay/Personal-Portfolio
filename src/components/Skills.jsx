import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaUsers, FaLightbulb } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiFigma, SiMysql, SiGooglesheets } from "react-icons/si"; 
import { MdOutlineManageAccounts } from "react-icons/md";
import { TbDeviceImacCode } from "react-icons/tb";

function Skills() {
  const technicalSkills = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'SQL', icon: <SiMysql /> },
    { name: 'Figma', icon: <SiFigma /> },
    { name: 'MS Excel', icon: <SiGooglesheets /> } // Added Excel (using Google Sheets icon)
  ];

  const nonTechnicalSkills = [
    { name: 'Problem Solving', icon: <TbDeviceImacCode /> },
    { name: 'Creativity', icon: <FaLightbulb /> },
    { name: 'Time Management', icon: <MdOutlineManageAccounts /> }
  ];

  const interpersonalSkills = [
    { name: 'Communication', icon: <FaUsers /> },
    { name: 'Teamwork', icon: <FaUsers /> },
    { name: 'Adaptability', icon: <FaLightbulb /> }
  ];

  const renderSkills = (skills) => (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          <div className="skill-icon">{skill.icon}</div>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>Skills</h2>

        <h3 className="skills-subtitle">Technical Skills</h3>
        {renderSkills(technicalSkills)}

        <h3 className="skills-subtitle">Non-Technical Skills</h3>
        {renderSkills(nonTechnicalSkills)}

        <h3 className="skills-subtitle">Interpersonal Skills</h3>
        {renderSkills(interpersonalSkills)}
      </div>
    </section>
  );
}

export default Skills;
