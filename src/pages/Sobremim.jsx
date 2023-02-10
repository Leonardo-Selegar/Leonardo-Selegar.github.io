import React from "react";
import '../styles/sobremim.css'
import sobre from "../imgs/foto.jpg";
import trybe from "../imgs/trybe2.jpg";
import { motion }from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";

function Sobremim() {

  const carrousel = useRef();
  const [width, setWidth] = useState(0);

  const [ref, inView ] = useInView();

  useEffect(() => {
    setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth)
  }, [inView]);

  return (
    <div className="sobre-mim-pag" id="pag1">
      {
      inView && (
      <motion.h1 
        className="title-sobre"
        initial={{ y: -200}}
        animate={{ y: 0, transition: {
          type: 'spring', duration: 1, bounce: 0.3}}}
        >
          Um pouco mais sobre mim!
        </motion.h1>
      )}
      <div ref={ref} className="conteudo-pag-sobre">
      {
      inView && (
      <motion.div 
      className="sobre"
      initial={{ x: -200}}
      animate={{ x: 0, transition: {
        type: 'spring', duration: 1, bounce: 0.3}}}
      >
        <img src={sobre} alt="imagem perfil linkedin" className="img-perfil" />
        <div className="text-sobre-mim">
          <h3 className="text-sobre">Sou de São Leopoldo/RS, estudante de desenvolvimento web na Trybe, apaixonado por: animais, ler, jogar e codar.</h3>
          <h3 className="text-sobre">Meu gosto por programação vem desde quando cursei técnico em eletrônica na Liberato e lá tive meus primeiro contatos com C++.</h3>
          <h3 className="text-sobre">Atualmente estou estudando Back-End, penúltimo módulo da trybe, e quando formado pretendo trabalhar com Front-End, fazer faculdade e me especializar mais nessa área.</h3>
        </div>
      </motion.div>
      )
    }
    {
      inView && (
      <motion.div 
      className="trybe"
      initial={{ x: +200}}
      animate={{ x: 0, transition: {
        type: 'spring', duration: 1, bounce: 0.3}}}
      >
        <div className="text-sobre-trybe">
          <h3 className="text-sobre">A <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer noopener">Trybe</a> é uma escola de desenvolvimento web que tem comprometimento genuíno com o sucesso profissional das pessoas estudantes.</h3> 
          <h3 className="text-sobre">Com o Modelo de Sucesso Compartilhado, quem estuda na Trybe tem a opção de pagar apenas quando já estiver trabalhando.</h3>
          <h3 className="text-sobre">São mais de 1500 horas de formação, aulas ao vivo, projetos individuais e em grupo e desenvolvimento de habilidades socioemocionais.</h3>
        </div>
        <img src={trybe} alt="imagem sobre a trybe" className="img-trybe" />
      </motion.div>
       )
      }
      </div>
    </div>
  )
}

export default Sobremim;
