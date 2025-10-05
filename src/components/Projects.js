import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaBootstrap } from 'react-icons/fa';
import { SiDotnet, SiEspressif } from 'react-icons/si';
import { useState, useEffect, useRef } from 'react';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -80px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setVisibleCards(prev => [...new Set([...prev, index])]);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const projects = [
    {
      title: "Motovista Display Pro",
      description: "First Year Hardware Project: Monitoring system for motorcycles with GPS, battery voltage, RPM, and engine temperature sensors. Developed the accurate temperature monitoring feature using MAX6675 thermocouple, ensuring precise and reliable data for performance analysis and safety alerts, with real-time display on LCD and mobile app.",
      imgUrl: projImg1,
      tech: [
        { name: "ESP32", icon: <SiEspressif size={35} /> },
        { name: "GPS", icon: <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>GPS</span> },
        { name: "Thermocouple", icon: <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Thermo</span> },
        { name: "LCD", icon: <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>LCD</span> },
        { name: "Mobile App", icon: <span style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>Mobile</span> }
      ],
      year: "2024",
      position: "left"
    },
    {
      title: "Workforce Planning and Optimization System",
      description: "Co-developed a web-based HR solution with HSenid Business Solutions for real-time skill gap analysis, attrition tracking, and centralized workforce allocation. As Full-stack Developer, implemented modules including admin/dashboard, skill-tracking, targeted announcements, and project timeline management.",
      imgUrl: projImg2,
      tech: [
        { name: "React", icon: <FaReact size={35} /> },
        { name: "Bootstrap", icon: <FaBootstrap size={35} /> },
        { name: ".NET", icon: <SiDotnet size={35} /> },
        { name: "MS SQL", icon: <FaDatabase size={35} /> }
      ],
      year: "2024",
      position: "right"
    },
    {
      title: "QR Code Generator",
      description: "Personal Project: Developed for an External Exhibition using HTML, JavaScript to create a photo web-based system at the exhibition stall. Generated unique QR codes ensuring security, with viewing and download features via QR on devices in real-time processing.",
      imgUrl: projImg3,
      tech: [
        { name: "HTML5", icon: <FaHtml5 size={35} /> },
        { name: "JavaScript", icon: <FaJsSquare size={35} /> }
      ],
      year: "2024",
      position: "left"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore my portfolio of innovative projects showcasing my skills in full-stack development, hardware integration, and creative problem-solving.</p>
                  
                  <div className="timeline-container">
                    <div className="timeline-line"></div>
                    
                    {projects.map((project, index) => (
                      <div 
                        key={index}
                        ref={el => cardRefs.current[index] = el}
                        data-index={index}
                        className={`timeline-item ${project.position} ${visibleCards.includes(index) ? 'visible' : ''}`}
                      >
                        <div className="timeline-content">
                          <div className="timeline-dot">
                            <div className="dot-inner"></div>
                          </div>
                          
                          <Card className="project-card">
                            <Card.Body>
                              <div className="project-image">
                                <Card.Img 
                                  variant="top" 
                                  src={project.imgUrl} 
                                  alt={project.title} 
                                />
                                <div className="project-year-badge">{project.year}</div>
                              </div>
                              
                              <Card.Title className="project-title">{project.title}</Card.Title>
                              <Card.Text className="project-description">{project.description}</Card.Text>
                              
                              <div className="tech-stack">
                                {project.tech.map((tech, idx) => (
                                  <div key={idx} className="tech-item">
                                    <div className="tech-icon">
                                      {tech.icon}
                                    </div>
                                    <span className="tech-name">{tech.name}</span>
                                  </div>
                                ))}
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
      
    </section>
  );
};