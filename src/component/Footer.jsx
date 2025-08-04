import { Col, Container, ListGroup, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footerLayoutDesignHandle">
          <Col xs={6} sm={6} md={6} lg={3}>
            <ListGroup className="">
              <ListGroup.Item className="listFirst ">
                Cras justo odio
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3}>
            <ListGroup className="">
              <ListGroup.Item className="listFirst  ">COMPANY</ListGroup.Item>
              <ListGroup.Item className="list ">How it works</ListGroup.Item>
              <ListGroup.Item className="list ">Pricing</ListGroup.Item>
              <ListGroup.Item className="list ">Demo</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3}>
            <ListGroup className="">
              <ListGroup.Item className="listFirst ">RESOURCES</ListGroup.Item>
              <ListGroup.Item className="list ">
                Blog post name goes here
              </ListGroup.Item>
              <ListGroup.Item className="list ">
                Blog post name goes here
              </ListGroup.Item>
              <ListGroup.Item className="list ">
                Blog post name goes here
              </ListGroup.Item>
              <ListGroup.Item className="list ">
                See all resources
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3}>
            <ListGroup className="">
              <ListGroup.Item className="listFirst ">ABOUT</ListGroup.Item>
              <ListGroup.Item className="list ">
                Terms & Conditions
              </ListGroup.Item>
              <ListGroup.Item className="list ">Privacy Policy</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <p className="footerPragraph">Copyright © 2022 Company name</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
