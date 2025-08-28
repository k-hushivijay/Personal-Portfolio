import React from "react";

const experiences = [
  {
    company: "Maitrii Infotech & Maitrii Loans",
    role: "UI Designer Intern",
    duration: "July 2024 – July 2024",
    description:
      "Enhanced website efficiency, designed lead generation pages, and created UI components using Figma. Improved user experience for web platforms.",
    certificate: "https://drive.google.com/uc?export=view&id=1OAzB0cb8te96OjQ7D1hmcAhhmLtnh76D",
  },
  
  {
    company: "Dotsquares Pvt. Ltd.",
    role: "Web Development Intern",
    duration: "June 2023 – July 2023",
    description:
      "Worked on web development projects using HTML, CSS, JavaScript, and ReactJS. Assisted in designing responsive layouts and implemented UI components.",
    certificate: "https://drive.google.com/uc?export=view&id=15Qqie0c9d3jU9GKv7puCuM-ArlK9kiyo",
  },
  {
    company: "IBM SkillsBuild",
    role: "Trainee",
    duration: "June 2024 – August 2024",
    description:
      "Completed Data Fundamentals course and contributed to web-based learning projects.",
    certificate: "https://drive.google.com/uc?export=view&id=1ibE2N-BaFyYtCUlc-ZjzQsFYnww_Yl13",
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience & Internships</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role}</h3>
            <h4>
              <a
                href={exp.certificate}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline", color: "#007bff" }}
              >
                {exp.company}
              </a>
            </h4>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
