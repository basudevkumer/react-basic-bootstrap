import { Col, Container, Form, Row, Button  } from "react-bootstrap";

function From() {
  return (
    <section className="from">
      <Container>
        <Row className=" text-center">
          <Col lg={12}>
            <h4 className="fromHeading "> Get in touch</h4>
            <p className="fromPadding ">Let us know how we can help</p>
          </Col>
        </Row>
        <Row className="praentInput">
          <Col lg={6}>
            <Form className="fromInput">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your full name" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your message..."/>
              </Form.Group>
            </Form>
                  <Button variant="dark" className="button buttonFrom">Send message</Button>

          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default From;
