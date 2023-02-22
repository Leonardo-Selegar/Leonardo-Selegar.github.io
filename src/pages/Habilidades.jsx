import React from "react";
import '../styles/habilidades.css';
import Linux from '../imgs/Linux.png';
import Bash from '../imgs/Bash.png';
import Github from '../imgs/Github.png';
import HTML from '../imgs/HTML.png';
import CSS from '../imgs/CSS.png';
import JS3 from '../imgs/JS3-2.png';
import Bootstrap from '../imgs/Bootstrap.png';
import Jest from '../imgs/Jest.png';
import ReactImg from '../imgs/React.png';
import RTL from '../imgs/RTL.png';
import Redux from '../imgs/Redux.png';
import Scrum from '../imgs/Scrum.png';
import Kanban from '../imgs/Kanban.png';
import Context from '../imgs/Context.png';
import Docker from '../imgs/Docker.png';
import MySQL from '../imgs/MySQL.png';
import FramerMotion from '../imgs/framer-motion.png';
import Responsive from '../imgs/responsive.png';
import Node from '../imgs/Node.png';
import Vue from '../imgs/Vue.png';
import { motion }from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";

function Habilidades() {
  const arrayTitulos = ['JavaScript', 'React', 'Vue.js', 'Framer Motion', 'CSS', 'Git/Github', 'Bootstrap',
    'Responsive design', 'Linux', 'Shell e Bash', 'HTML','Jest', 'RTL', 'Redux', 'Context Api', 'Scrum', 'Kanban', 'Docker', 'MySQL', 'Node.js'];

  const imgsArray = [JS3, ReactImg, Vue, FramerMotion, CSS, Github, Bootstrap,
    Responsive, Linux, Bash, HTML, Jest, RTL, Redux, Context, Scrum, Kanban, Docker, MySQL, Node];

  const carrousel = useRef();
  const [width, setWidth] = useState(0);

  const [ref, inView ] = useInView();

  useEffect(() => {
    setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth)
  }, [inView]);

  return (
    <div  className="pag-2" id="pag2">
      {
        inView && (
          <motion.h1
            className="titulo-carrousel"
            initial={{ x: -200}}
            animate={{ x: 0, transition: {
              type: 'spring', duration: 1, bounce: 0.3}}}
          >
            Minha lista de Habilidades
          </motion.h1>
        )
      }
      
      <div ref={ref} className="container-carrousel">
        {
          inView && (
            <motion.div ref={ carrousel } className="carrousel" whileTap={{ cursor: "grabbing" }}>
              <motion.div
                className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: -width}}
                initial={{ x: 200}}
                animate={{ x: 0, transition: {
                  type: 'spring', duration: 1, bounce: 0.3}}}
              >
                {
                  arrayTitulos.map((titulo, index) => (
                    <motion.div className="item-car" key={index}>
                      <h3>{titulo}</h3>
                      <div className="img-bg">
                        <img src={imgsArray[index]} alt={imgsArray[index]} />
                      </div>
                    </motion.div> 
                  ))
                }
              </motion.div>
            </motion.div>
          )
        }
      </div>
    </div>
  )
}

export default Habilidades;