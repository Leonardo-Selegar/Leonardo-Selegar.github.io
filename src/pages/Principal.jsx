import React from "react";
import Astro from '../imgs/astro.png'
import '../styles/principal.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { motion }from 'framer-motion';

function Principal() {
  return (
    <div className="img-bg-principal" id="pag0">
      <Navbar bg="rgb(247, 65, 78)" variant="dark" fixed="bottom" className="navbar-custom d-flex justify-content-center">
        <Container>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#pag0">INICIO</Nav.Link>
            <Nav.Link href="#pag1">SOBRE MIM</Nav.Link>
            <Nav.Link href="#pag2">HABILIDADES</Nav.Link>
            <Nav.Link href="#pag3">PROJETOS</Nav.Link>
            <Nav.Link href="#pag4">CERTIFICADOS</Nav.Link>
            <Nav.Link href="#pag5">CONTATO</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
      <div className="container-conteudo-principal">
        <div className="conteudo-principal">
          <h1 className="apresentacao">Olá! Meu nome é</h1>
          <h1 className="nome">Leonardo Selegar</h1>
          <h1 className="subtitulo">Desenvolvedor Front-End!</h1>
          <div className="buttons">
            <a href="https://www.linkedin.com/in/leonardo-selegar/" target="_blank" rel="noreferrer noopener">
              <button className="button-linkedin">LinkedIn</button>
            </a>
            <a href="https://github.com/Leonardo-Selegar" target="_blank" rel="noreferrer noopener">
              <button className="button">Github</button>
            </a>
          </div>
        </div>
        <motion.div className="astro-container">
          <motion.img
            className="astro-img"
            src={Astro}
            alt="astronauta icon"
            height="60%"
            initial={{ y: -25}}
            animate={{ y: 0, transition: {
              duration: 2, yoyo: Infinity, bounce: 0.2}}}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Principal;