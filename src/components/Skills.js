import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';

// Icons
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
  SiMicrosoftsqlserver,
  SiBootstrap,
  SiC,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVite
} from 'react-icons/si';

export const Skills = () => {
  const cardsRef = useRef([]);

  // Skill sections grouped by category
  const skillSections = [
    {
      title: "Frontend Development",
      description: "Crafting responsive and interactive UIs with modern tools and frameworks.",
      skills: [
        { name: "HTML5", icon: <FaHtml5 size={50} color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt size={50} color="#1572B6" /> },
        { name: "Bootstrap", icon: <SiBootstrap size={50} color="#7952B3" /> },
        { name: "JavaScript", icon: <FaJsSquare size={50} color="#F7DF1E" /> },
        { name: "React", icon: <FaReact size={50} color="#61DAFB" /> },
        { name: "Vite", icon: <SiVite size={50} color="#646CFF" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={50} color="#06B6D4" /> },
      ]
    },
    {
      title: "Backend Development",
      description: "Building scalable server-side applications and APIs.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={50} color="#339933" /> },
        { name: "Express.js", icon: <SiExpress size={50} color="#ffffff" style={{ background: "#000", borderRadius: "5px", padding: "5px" }} /> },
        { name: "Python", icon: <FaPython size={50} color="#3776AB" /> },
        { name: "Java", icon: <FaJava size={50} color="#007396" /> },
      ]
    },
    {
      title: "Database Management",
      description: "Designing and optimizing modern relational & NoSQL databases.",
      skills: [
        { name: "MySQL", icon: <SiMysql size={50} color="#4479A1" /> },
        { name: "MS SQL", icon: <FaDatabase size={50} color="#CC2927" /> },
        { name: "MongoDB", icon: <SiMongodb size={50} color="#47A248" /> },
      ]
    },
    {
      title: "Programming Languages",
      description: "Strong foundation in problem-solving and algorithms.",
      skills: [
        { name: "C", icon: <SiC size={50} color="#A8B9CC" /> },
        { name: "Python", icon: <FaPython size={50} color="#3776AB" /> },
        { name: "Java", icon: <FaJava size={50} color="#007396" /> },
      ]
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="skills-section" id="skills">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="skills-header">
              <h2>What I Do</h2>
              <p>
                With a strong foundation in software engineering from the University of Moratuwa, 
                I specialize in full-stack development using the latest technologies.
              </p>
            </div>
            <div className="skills-grid">
              {skillSections.map((section, index) => (
                <div 
                  className="skills-card" 
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                >
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};
