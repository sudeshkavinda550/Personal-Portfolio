import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About Me</h2>
                  <p>
                    I am a very motivated and adaptive person with a great knack for
                    picking things up quickly and solving problems. I have a strong
                    interest in full-stack development, do well in fast-paced settings,
                    and approach problems pro-actively and solution-focused.
                  </p>
                  <p>
                    I'm keen to keep learning new things so that I can contribute
                    significantly to software development projects. I thrive in
                    collaborative environments, have excellent communication and
                    teamwork skills, and am dedicated to providing excellent,
                    significant solutions.
                  </p>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}