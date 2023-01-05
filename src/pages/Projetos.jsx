import React from "react";
import '../styles/projetos.css';
import Recipes from '../imgs/recipes.png';
import Wallet from '../imgs/Wallet.png';
import Pixel from '../imgs/PixelArt.png';
import Warts from '../imgs/Trybewarts.png';
import SistemaSolar from '../imgs/SistemaSolar.png'
import { motion }from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from 'react';
// 948 

function Projetos() {

  const arrayImgs = [ Recipes, Wallet, SistemaSolar, Warts, Pixel];
  const arrayNomesProjetos = ['App de Receitas', 'Carteira Digital', 'Sistema Solar', 'TrybeWarts', 'Pixel Art']
  
  const [width, setWidth] = useState(0);
  const carrouselA = useRef();
  const {ref, inView } = useInView();

  useEffect(() => {
    setWidth(carrouselA.current?.scrollWidth - carrouselA.current?.offsetWidth)
  }, [inView]);

  return (
    <div className="pag-3" id="pag3">
      {
        inView && (
          <motion.h1
            className="titulo-carrousel"
            initial={{ x: -200}}
            animate={{ x: 0, transition: {
              type: 'spring', duration: 1, bounce: 0.3}}}
          >
            Projetos
          </motion.h1>
        )
      }
      <div ref={ref} className="container-carrousel-project">
        {
          inView && (
          <motion.div
            ref={ carrouselA }
            className="carrousel"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              className="inner"
              drag="x"
              dragConstraints={{ right: 0, left: -width}}
              initial={{ x: 200}}
              animate={{ x: 0, transition: {
                type: 'spring', duration: 1, bounce: 0.3}}}
            >
              {
                arrayImgs.map((img, index) => (
                  <motion.div className="item-card">
                    <div>
                      <img src={img} alt={index} />
                      <h1 className="title-card-projects">{arrayNomesProjetos[index]}</h1>
                      <div className="buttons-project">
                        <button className="button-project">DEMO</button>
                        <button className="button-project">GITHUB</button>
                      </div>
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

export default Projetos;
