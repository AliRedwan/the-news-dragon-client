import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="bg-light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                href="#home"
                className="h1 fw-semibold"
                as={Link}
                to="/"
              >
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="h1 fw-semibold">
                About
              </Nav.Link>
              <Nav.Link href="#career" className="h1 fw-semibold">
                Career
              </Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              {user && <FaUser style={{ fontSize: "1.7rem" }} />}
              {user ? (
                <Button onClick={handleLogOut} variant="secondary">
                  Log Out
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
