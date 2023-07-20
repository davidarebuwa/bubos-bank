import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TradingView from "../trading-view/TradingView";
import "./styles.css";
import logo from "../../images/bubos-bank-logo.svg";

function NavigationBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="200"
              height="auto"
              className="d-inline-block align-top "
              alt="Bubo's Bank Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="#link">FSSE</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <TradingView />
      </Container>
    </div>
  );
}

export default NavigationBar;
