import React from 'react';

// Import icons from react-icons
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaDatabase 
} from 'react-icons/fa';
import { 
  SiMysql, 
  SiFlutter, 
  SiMicrosoftsqlserver, 
  SiCsharp, 
  SiSass, 
  SiFirebase, 
  SiMongodb, 
  SiDocker,
  SiBootstrap
} from 'react-icons/si';

export const Skills = () => {
  // Skill sections grouped by category
  const skillSections = [
    {
      title: "Frontend Development",
      description: "Crafting responsive and interactive user interfaces with modern web technologies, ensuring seamless user experiences across devices.",
      skills: [
        { name: "HTML5", icon: <FaHtml5 size={50} /> },
        { name: "CSS3", icon: <FaCss3Alt size={50} /> },
        { name: "Bootstrap", icon: <SiBootstrap size={50} /> },
        { name: "SASS", icon: <SiSass size={50} /> },
        { name: "JavaScript", icon: <FaJsSquare size={50} /> },
        { name: "React", icon: <FaReact size={50} /> },
      ]
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications, APIs, and scalable systems using versatile programming languages and frameworks.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={50} /> },
        { name: "Python", icon: <FaPython size={50} /> },
        { name: "Java", icon: <FaJava size={50} /> },
       
        { name: "Flutter", icon: <SiFlutter size={50} /> },
      ]
    },
    {
      title: "Database Management",
      description: "Efficiently designing, querying, and optimizing relational databases for secure data handling and performance.",
      skills: [
        { name: "MySQL", icon: <SiMysql size={50} /> },
       
        { name: "MongoDB", icon: <SiMongodb size={50} /> },
        { name: "Firebase", icon: <SiFirebase size={50} /> },
      ]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skills-header">
              <h2>What I Do</h2>
              <p>With a strong foundation in software engineering from the University of Moratuwa, I specialize in full-stack development. Explore my expertise in key areas below.</p>
            </div>
            <div className="skills-grid">
              {skillSections.map((section, index) => (
                <div className="skills-card" key={index}>
                  <div className="card-accent"></div>
                  <div className="card-content">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                    <div className="skills-icons">
                      {section.skills.map((skill, skillIndex) => (
                        <div className="skill-icon-wrapper" key={skillIndex}>
                          <div className="skill-icon">{skill.icon}</div>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};