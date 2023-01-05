import React from "react";
import '../styles/contatoEmail.css';
import Form from 'react-bootstrap/Form';
import { motion }from 'framer-motion';
import { useInView } from "react-intersection-observer";

function ContatoEmail() {

  const {ref, inView } = useInView();
  
  return (
    <div className="pag-contato" id="pag5">
      <div ref={ ref }>
      {
        inView && (
          
            <motion.div
              initial={{ y: -250}}
              animate={{ y: 0}}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.1 }}
              >
                <h1 className="titulo-pag-contato">Fale Comigo</h1>
                <form action="https://api.staticforms.xyz/submit" method="POST" className="form-contato">
                  <input type="hidden" name="accessKey" value="2fd0616a-2b4f-4137-95bd-6def40d2720a" />
                  <input type="hidden" name="redirectTo" value="http://localhost:3000/"></input>
                  <div className="d-flex size-form">
                    <Form.Group className="mb-3 mx-4" controlId="exampleForm.ControlInput1">
                      <Form.Label className="text-light" htmlFor="inputName">SEU NOME (*)</Form.Label>
                      <Form.Control type="text" name="name" id="inputName" required maxlength="30" minlength="2" placeholder="Digite seu nome" />
                    </Form.Group>
                    <Form.Group className="mb-3 mx-4" controlId="exampleForm.ControlInput1">
                      <Form.Label className="text-light" htmlFor="inputEmail">E-MAIL (*)</Form.Label>
                      <Form.Control type="email" name="email" id="inputEmail" required maxlength="50" placeholder="name@example.com" />
                    </Form.Group>
                  </div>
                  <Form.Group className="mb-3 d-flex flex-column" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="text-light" htmlFor="textAreaMensagem">MENSAGEM (*)</Form.Label>
                    <textarea className="textarea-form" as="textarea" name="message" id="textAreaMensagem" required maxLength="500"></textarea>
                  </Form.Group>
                  <button className="btn-form">Enviar</button>
                </form>
            </motion.div>   
          )
        }
      </div>
    </div>
  )
}

export default ContatoEmail;