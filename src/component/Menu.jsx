import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Image,
} from "react-bootstrap";
import Logo from "../assets/logo5.png";
import { HiMiniBarsArrowDown } from "react-icons/hi2";

function Menu() {
  return (
    <section>
      <Navbar expand="lg" className="py-4">
        <Container>
          <Navbar.Brand href="#home" className="h-4">
            <Image src={Logo} className="img" />
          </Navbar.Brand>
          <Navbar.Toggle className="navicon">
            {" "}
            <HiMiniBarsArrowDown />
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navText ">
              <Nav.Link variant="dark" href="#home">
                About
              </Nav.Link>
              <Nav.Link variant="dark" href="#Features">
                Features
              </Nav.Link>
              <Nav.Link variant="dark" href="#Pricing">
                Pricing
              </Nav.Link>
              <Button variant="dark" className="fw-medium button">
                GET STARTED
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default Menu;
