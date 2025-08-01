import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Image,
  ListGroup,
} from "react-bootstrap";

import JkRoy from "../assets/jkroyEdited.jpg";
import Faruk from "../assets/faruk.jpg";
import Mostofa from "../assets/mostofa.jpg";
import Nafis from "../assets/nafis.jpg";
import Tabib from "../assets/tabib.jpg";
import Polash from "../assets/polas2.png";

function Team() {
  return (
    <section className="team">
      <Container>
        <Row className="customTeamArrangeOne">
          <Col>
            <h2 className="teamHeading"> Team section </h2>
            <p className="teamParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.
            </p>
          </Col>
        </Row>
        <Row className="customTeamArrangeTwo">
          <Col lg={4}>
            <Card className="border border-0">
              <Card.Img variant="top"  src={JkRoy} className="cardImg"/>
              <Card.Body className="">
                <Card.Title>Jhulon Kumar Roy</Card.Title>
                <Card.Text>Founder & Full Stack Developer</Card.Text>
                <Card.Text>
                  Expertise Area: React, Node.js, MongoDB, REST APIs, Deployment
                </Card.Text>
                <Card.Text>
                  Key Responsibilities:
                  <ListGroup as="ol" className="">
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Client communication & project planning
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Lead frontend and backend architecture
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Code review and quality assurance
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Card.Text>
                  Experience: 3+ years in full-stack web development, team
                  leadership & client handling
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border border-0">
              <Card.Img variant="top" src={Mostofa} className="cardImg"/>
              <Card.Body className="">
                <Card.Title>Mostofa Jaman</Card.Title>
                <Card.Text> UI/UX Designer</Card.Text>
                <Card.Text>
                  Expertise Area: Figma, Adobe XD, UI Kits, Design Systems
                </Card.Text>
                <Card.Text>
                  Key Responsibilities:
                  <ListGroup as="ol" className="">
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Wireframe & prototype creation
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Design mobile & desktop friendly UI
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Improve user experience based on feedback
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Card.Text>
                  Experience: 2+ years in designing clean, user-focused
                  interfaces
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border border-0">
              <Card.Img variant="top" src={Nafis} className="cardImg"/>
              <Card.Body className="">
                <Card.Title>Nafij Islam</Card.Title>
                <Card.Text> Frontend Developer (React)</Card.Text>
                <Card.Text>
                  Expertise Area: React.js, JSX, Redux, Tailwind, Responsive
                  Design
                </Card.Text>
                <Card.Text>
                  Key Responsibilities:
                  <ListGroup as="ol" className="">
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Build pixel-perfect frontend from UI designs
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Integrate APIs and dynamic content
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Ensure cross-browser compatibility
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Card.Text>
                  Experience: 2+ years in frontend development with React
                  ecosystem
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border border-0">
              <Card.Img variant="top" src={Tabib} className="cardImg" />
              <Card.Body className="">
                <Card.Title>Tahsin Al Tabib</Card.Title>
                <Card.Text> Backend Developer (Node/Express)</Card.Text>
                <Card.Text>
                  Expertise Area: Node.js, Express.js, MongoDB, JWT, REST API
                </Card.Text>
                <Card.Text>
                  Key Responsibilities:
                  <ListGroup as="ol" className="">
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Develop and manage server-side logic
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Build secure, scalable REST APIs
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Connect database and manage queries
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Card.Text>
                  Experience: 2+ years in backend & database management
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border border-0">
              <Card.Img variant="top" src={Polash} className="cardImg"/>
              <Card.Body className="">
                <Card.Title>Polas Dash</Card.Title>
                <Card.Text> WordPress Developer</Card.Text>
                <Card.Text>
                  Expertise Area: WordPress, Elementor, WooCommerce, Custom
                  Themes
                </Card.Text>
                <Card.Text>
                  Key Responsibilities:
                  <ListGroup as="ol" className="">
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Build dynamic websites using WordPress
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Customize themes & plugins
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Perform regular maintenance & updateses
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Card.Text>
                  Experience: 3+ years building client websites with WordPress
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border border-0">
              <Card.Img variant="top" src={Faruk} className="cardImg" />
              <Card.Body className="">
                <Card.Title>Faruk Mulla</Card.Title>
                <Card.Text>Digital Marketer & SEO Expert</Card.Text>
                <Card.Text>
                  Expertise Area: SEO, Google Ads, Facebook Ads, Google
                  Analytics
                </Card.Text>
                <Card.Text>
                  Key Responsibilities:
                  <ListGroup as="ol" className="">
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Run ad campaigns (Google, FB)
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Optimize content for search engines
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="listBorder">
                      {" ** "}
                      Monitor traffic & improve ROI
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Card.Text>
                  Experience: 2.5+ years in digital marketing & SEO strategies
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Team;
