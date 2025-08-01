import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import TitlePic from "../assets/bannarImg4.jpg";

function Title() {
  return (
    <section className="title ">
      <Container>
        <Row className="customTitleArrange">
          <Col lg={6}>
            <div className="titleText">
              <h1 className="titleHeading">Title Copy Goes Here Be Awesome</h1>
              <p className="titlePragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <Button variant="dark" className="titleButton">
                GET STARTED
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <Image src={TitlePic} fluid className="titleImg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Title;
