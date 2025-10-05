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
      title: "Workforce Planning System",
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
      
      <style jsx>{`
        .project {
          padding: 80px 0;
          background: #000000;
          color: #ffffff;
          overflow: hidden;
          position: relative;
        }
        
        .project h2 {
          color: #ffffff;
          font-size: 3rem;
          text-align: center;
          margin-bottom: 1rem;
          font-weight: 700;
        }
        
        .project p {
          text-align: center;
          font-size: 1.1rem;
          color: #b0b0b0;
          margin-bottom: 4rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .timeline-container {
          position: relative;
          max-width: 1300px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, #4a4a4a, #2a2a2a, #4a4a4a);
          transform: translateX(-50%);
        }
        
        .timeline-line::before,
        .timeline-line::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 12px;
          background: #6a6a6a;
          border-radius: 50%;
        }
        
        .timeline-line::before {
          top: -6px;
        }
        
        .timeline-line::after {
          bottom: -6px;
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 60px;
          opacity: 0;
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .timeline-item.visible {
          opacity: 1;
        }
        
        .timeline-item.left .timeline-content {
          padding-right: calc(50% + 50px);
        }
        
        .timeline-item.right .timeline-content {
          padding-left: calc(50% + 50px);
        }
        
        .timeline-dot {
          position: absolute;
          top: 80px;
          left: 50%;
          transform: translateX(-50%);
          width: 24px;
          height: 24px;
          background: #1a1a1a;
          border: 3px solid #4a4a4a;
          border-radius: 50%;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }
        
        .timeline-item.visible .timeline-dot {
          border-color: #6a6a6a;
          animation: dotPulse 2s infinite;
        }
        
        @keyframes dotPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(106, 106, 106, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(106, 106, 106, 0);
          }
        }
        
        .dot-inner {
          width: 8px;
          height: 8px;
          background: #6a6a6a;
          border-radius: 50%;
        }
        
        .timeline-item.left {
          transform: translateX(-80px) translateY(40px) scale(0.75);
        }
        
        .timeline-item.right {
          transform: translateX(80px) translateY(40px) scale(0.75);
        }
        
        .timeline-item.left.visible,
        .timeline-item.right.visible {
          transform: translateX(0) translateY(0) scale(1);
        }
        
        .project-card {
          background: linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%);
          border: 1px solid #2a2a2a;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          position: relative;
        }
        
        .project-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to bottom, transparent, rgba(50, 50, 30, 0.3));
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .timeline-item.visible .project-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
          border-color: #3a3a3a;
        }
        
        .timeline-item.visible .project-card:hover::after {
          opacity: 1;
        }
        
        .project-card .card-body {
          padding: 1.rem;
        }
        
        .project-image {
          position: relative;
          margin-bottom: 1.3rem;
          border-radius: 12px;
          overflow: hidden;
          height: 100px;
        }
        
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .timeline-item.visible .project-image:hover img {
          transform: scale(1.1);
        }
        
        .project-year-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(26, 26, 26, 0.9);
          border: 1px solid #3a3a3a;
          color: #ffffff;
          padding: 6px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.85rem;
          backdrop-filter: blur(10px);
        }
        
        .project-title {
          color: #ffffff;
          font-size: 1.3rem;
          margin-bottom: 0.9rem;
          font-weight: 700;
        }
        
        .project-description {
          color: #b0b0b0;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1.3rem;
        }
        
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          padding-top: 1rem;
          border-top: 1px solid #2a2a2a;
        }
        
        .tech-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        
        .tech-icon {
          background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
          color: #ffffff;
          padding: 0.7rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 65px;
          height: 65px;
          transition: all 0.4s ease;
          border: 1px solid #3a3a3a;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }
        
        .timeline-item.visible .tech-icon:hover {
          transform: translateY(-6px) scale(1.1);
          background: linear-gradient(145deg, #3a3a3a, #2a2a2a);
          box-shadow: 0 8px 20px rgba(100, 100, 100, 0.3);
          border-color: #4a4a4a;
        }
        
        .tech-name {
          font-size: 0.75rem;
          color: #888888;
          font-weight: 600;
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .timeline-line {
            left: 30px;
          }
          
          .timeline-item.left .timeline-content,
          .timeline-item.right .timeline-content {
            padding-left: 70px;
            padding-right: 10px;
          }
          
          .timeline-dot {
            left: 30px;
            top: 60px;
            width: 20px;
            height: 20px;
          }
          
          .dot-inner {
            width: 6px;
            height: 6px;
          }
          
          .timeline-item.left,
          .timeline-item.right {
            transform: translateX(-40px) translateY(30px) scale(0.8);
          }
          
          .timeline-item.left.visible,
          .timeline-item.right.visible {
            transform: translateX(0) translateY(0) scale(1);
          }
          
          .project-card .card-body {
            padding: 1.3rem;
          }
          
          .project-image {
            height: 160px;
          }
          
          .project-title {
            font-size: 1.1rem;
          }
          
          .project-description {
            font-size: 0.85rem;
          }
          
          .tech-icon {
            width: 55px;
            height: 55px;
          }
          
          .tech-name {
            font-size: 0.7rem;
          }
        }
        
        .background-image-right {
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 0;
          opacity: 0.2;
        }
      `}</style>
    </section>
  );
};