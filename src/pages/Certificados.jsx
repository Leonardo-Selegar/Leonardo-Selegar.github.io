import React from "react";
import '../styles/certificados.css';
import fundamentos from '../imgs/fundamentos.png'
import front from '../imgs/front-end.png'
import { motion }from 'framer-motion';
import { useInView } from "react-intersection-observer";

function Certificados() {

  const {ref, inView } = useInView();

  return (
    <div className="certificados-pag" id="pag4">

      {
        inView && (
          <motion.h1
            className="certificados-titulo"
            initial={{ y: -500}}
            animate={{ y: 0}}
            transition={{ type: 'spring', duration: 2, bounce: 0.1 }}
          >
            CERTIFICADOS
          </motion.h1>
        )
      }
      <div ref={ ref }>

        {
          inView && (
            <div className="certificados">
              <motion.div className="card-certificados"
                initial={{ x: -1500}}
                animate={{ x: 0}}
                transition={{ type: 'spring', duration: 1.5, bounce: 0.1 }}
                >
                <img className="img-card-certificados" src={fundamentos} alt="fundamentos" />
                <a href="https://www.credential.net/fe2996b3-90cd-4f7a-b743-c6214703283b" target="_blank" rel="noreferrer noopener">
                  <button className="btn-card">VERIFICAR</button>
                </a>
                <h1 className="certificados-description">Certificado do módulo de Fundamentos do Desenvolvimento Web da Trybe.</h1>
              </motion.div>
              <motion.div className="card-certificados" 
                initial={{ x: +1500}}
                animate={{ x: 0}}
                transition={{ type: 'spring', duration: 1.5, bounce: 0.15 }}
              >
                <img className="img-card-certificados" src={front} alt="front-end" />
                <a href="https://www.credential.net/9d151527-9369-46d0-8c9d-38da44a7cee8" target="_blank" rel="noreferrer noopener">
                  <button className="btn-card">VERIFICAR</button>
                </a>
                <h1 className="certificados-description">Certificado do módulo de Front-End da Trybe.</h1>
              </motion.div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Certificados;
