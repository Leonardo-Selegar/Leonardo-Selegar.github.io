import React from "react";
import '../styles/projetos.css';
import Recipes from '../imgs/recipes.png';
import Wallet from '../imgs/Wallet.png';
import Pixel from '../imgs/PixelArt.png';
import Warts from '../imgs/Trybewarts.png';
import SistemaSolar from '../imgs/SistemaSolar.png'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Projetos() {

  const arrayImgs = [ Recipes, Wallet, SistemaSolar, Warts, Pixel];
  const arrayNomesProjetos = ['App de Receitas', 'Carteira Digital', 'Sistema Solar', 'TrybeWarts', 'Pixel Art'];

  const arrayLinksProjetos = ['https://leonardo-selegar.github.io/recipes-app/#/',
  'https://leonardo-selegar.github.io/trybewallet/#/', 'https://leonardo-selegar.github.io/solar-system/',
  'https://leonardo-selegar.github.io/trybewarts/', 'https://leonardo-selegar.github.io/pixels-art/'];

  const arrayLinksGithub = ['https://github.com/Leonardo-Selegar/recipes-app',
  'https://github.com/Leonardo-Selegar/trybewallet', 'https://github.com/Leonardo-Selegar/solar-system',
  'https://github.com/Leonardo-Selegar/trybewarts', 'https://github.com/Leonardo-Selegar/pixels-art'];

  const arrayDescription = ['Projeto em grupo desenvolvido no final do módulo de front-end na Trybe.',
  'Projeto de uma carteira digital para adicionar despesas em diferentes moedas.',
  'Primeiro projeto do módulo de front-end, uma lista de missões para os planetas do sistema solar.',
  'Projeto em dupla do módulo de Fundamentos, onde foi desenvolvido um formulário.',
  'Um dos primeiros projetos que desenvolvi, é possivel selecionar uma cor e pintar um grid de pixels.',
  ];

  const arrayTecs = ['React, CSS, bootstrap e Context Api', 'ReactJS CSS e Redux', 'ReactJS e CSS', 'HTML, CSS E JavaScript', 'HTML, CSS E JavaScript']

  return (
    <div className="pag-3" id="pag3">
      <h1 className="titulo-pag3">Projetos</h1>
          <Carousel>
            {
              arrayImgs.map((img, index) => (
                <Carousel.Item className="container-projects">
                  <Carousel.Caption>
                  <Card className="card-project" bg={'dark'} style={{ width: '25vw' }}>
                  <Card.Img src={img} alt={index} />
                  <Card.Body>
                    <Card.Title>{arrayNomesProjetos[index]}</Card.Title>
                    <Card.Text className="description-card">{arrayDescription[index]}</Card.Text>
                    <Card.Text className="description-card">{`Tecnologias usadas no projeto: ${arrayTecs[index]}.`}</Card.Text>
                    <Button className="button-project button-previl" href={arrayLinksProjetos[index]} target="_blank" rel="noreferrer noopener" variant="primary">VISUALIZAR</Button>
                    <Button className="button-project" href={arrayLinksGithub[index]} target="_blank" rel="noreferrer noopener" variant="primary">GITHUB</Button>
                  </Card.Body>
                  </Card>
                  </Carousel.Caption>
                </Carousel.Item>
              ))
            }
        </Carousel>
      </div>
    
  )
}

export default Projetos;
