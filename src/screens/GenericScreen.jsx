import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GenericScreen = () => {
  return (
    <Navbar
      collapseOnSelect
      bg="light"
      variant="light"
      fixed="top"
      expand="md"
      className="pt-3"
    >
      <Container className="justify-content-center">
        <Nav>
          <Nav.Link>
            <Navbar.Brand>marian wang</Navbar.Brand>
          </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link>experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>gallery</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link>
                <FontAwesomeIcon icon={solid("file")} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <FontAwesomeIcon icon={brands("github")} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <FontAwesomeIcon icon={solid("paper-plane")} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GenericScreen;
