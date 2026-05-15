import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// The Contact section image has been moved here to become the Banner image
import bannerImg from "../assets/img/PicsArt_10-06-07.53.49.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Fullstack Developer", "Web Designer", "3rd Year Undergraduate"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Sudesh `} 
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>Passionate about creating beautiful, functional web experiences that solve real problems.</p>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img 
                    src={bannerImg} 
                    alt="Banner Img" 
                    style={{
                      width: "400px",  // Force square dimensions for perfect circle
                      height: "400px", // Force square dimensions for perfect circle
                      display: "block",
                      margin: "0 auto",
                      borderRadius: "50%", // True circular shape
                      objectFit: "cover", // Ensures the image fills the circle without distortion
                      boxShadow: "0 10px 30px rgba(0,0,0,0.5)", // Optional: adds depth
                      border: "5px solid rgba(255,255,255,0.1)" // Optional: subtle border
                    }}
                  />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
