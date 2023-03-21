import React from "react";
import Astro from '../imgs/astro.png'
import '../styles/principal.css';
import { motion }from 'framer-motion';

function Principal() {
  return (
    <div className="img-bg-principal" id="pag0">
      <div className="navbar-custom">
        <a href="#pag0" className="link-nav">INICIO</a>
        <a href="#pag1" className="link-nav">SOBRE MIM</a>
        <a href="#pag2" className="link-nav">HABILIDADES</a>
        <a href="#pag3" className="link-nav">PROJETOS</a>
        <a href="#pag4" className="link-nav">CERTIFICADOS</a>
        <a href="#pag5" className="link-nav">CONTATO</a>
      </div>
      
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