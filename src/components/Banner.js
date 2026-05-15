import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Gemini_Generated_Image_pqvb7ipqvb7ipqvb-clean (1).png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "Fullstack Developer", "Web Designer", "3rd Year Undergraduate" ];
  const period = 2000;

  useEffect(() => {
  let ticker = setInterval(() => {
    tick();
  }, delta);
  return () => { clearInterval(ticker) };
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [text, delta])

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
    // Removed the setIndex line that was causing the error
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Sudesh `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Fullstack Developer", "Web Designer", "3rd Year Undergraduate" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Passionate about creating beautiful, functional web experiences that solve real problems.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
  <TrackVisibility>
    {({ isVisible }) =>
      <div className={isVisible ? "animate__animated animate__zoomIn" : ""}
        style={{ overflow: "hidden", borderRadius: "12px" }}
      >
        <video
          src={headerImg}
          autoPlay
          muted
          playsInline
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "700px",
            display: "block",
            margin: "0 auto",
            objectFit: "cover",
            objectPosition: "center top",
            marginBottom: "-1px",
          }}
        />
      </div>}
  </TrackVisibility>
</Col>
        </Row>
      </Container>
    </section>
  )
}
