import { Col, Container,Row,Image } from "react-bootstrap";
import CollectioOne from "../assets/collection1.png"
import CollectioTwo from "../assets/collection2.png"
import CollectioTree from "../assets/collection3.png"
import CollectioFour from "../assets/collection4.png"
import CollectioFive from "../assets/collection5.png"
import CollectioSix from "../assets/collection6.png"

function Client() {
  return (
    <section className="client ">
        <Container>
          <Row >
            <Col lg={12}>
              <h5 className="text-center clohed fw-bold fs-6 lh-sm">Clients Section</h5>
            </Col>
          </Row>
          <Row>
            <Col lg={2}> <Image src={CollectioOne}  /></Col>
            <Col lg={2}> <Image src={CollectioTwo}  /></Col>
            <Col lg={2}> <Image src={CollectioTree}  /></Col>
            <Col lg={2}> <Image src={CollectioFour}  /></Col>
            <Col lg={2}> <Image src={CollectioFive}  /></Col>
            <Col lg={2}> <Image src={CollectioSix}  /></Col>
          </Row>
        </Container>
    </section>
  );
}

export default Client;
