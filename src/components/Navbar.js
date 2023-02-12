import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { motion } from "framer-motion"

import { Link } from "react-router-dom"

const ReactNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">andrewkeir.xyz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <motion.li
              whileHover={{
                scale: 1.3,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <Nav.Link href="/">// Home</Nav.Link>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.3,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <Nav.Link href="about">// About</Nav.Link>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.3,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <Nav.Link href="proof-of-work">// Proof of Work</Nav.Link>
            </motion.li>

            <motion.li
              whileHover={{
                scale: 1.3,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            ></motion.li>
            <motion.li
              whileHover={{
                scale: 1.3,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <Nav.Link href="skills">// Skills</Nav.Link>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.3,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <Nav.Link href="contact">// Contact</Nav.Link>
            </motion.li>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default ReactNav
