import React from "react";
import '../styles/projetos.css';
import Recipes from '../imgs/recipes.png';
import Wallet from '../imgs/Wallet.png';
import Pixel from '../imgs/PixelArt.png';
import Warts from '../imgs/Trybewarts.png';
import SistemaSolar from '../imgs/SistemaSolar.png'

function Projetos() {

  const arrayImgs = [ Recipes, Wallet, SistemaSolar, Warts, Pixel];
  const arrayNomesProjetos = ['App de Receitas', 'Carteira Digital', 'Sistema Solar', 'TrybeWarts', 'Pixel Art', ''];

  const arrayLinksProjetos = ['https://leonardo-selegar.github.io/recipes-app/#/',
  'https://leonardo-selegar.github.io/trybewallet/#/', 'https://leonardo-selegar.github.io/solar-system/',
  'https://leonardo-selegar.github.io/trybewarts/', 'https://leonardo-selegar.github.io/pixels-art/', ''];

  const arrayLinksGithub = ['https://github.com/Leonardo-Selegar/recipes-app',
  'https://github.com/Leonardo-Selegar/trybewallet', 'https://github.com/Leonardo-Selegar/solar-system',
  'https://github.com/Leonardo-Selegar/trybewarts', 'https://github.com/Leonardo-Selegar/pixels-art', '']

  return (
    <div className="pag-3" id="pag3">
      <h1 className="titulo-pag3">Projetos</h1>
          <div className="container-projects">
            {
              arrayImgs.map((img, index) => (
                <div className="item-card">
                  <img src={img} alt={index} />
                  <h1 className="title-card-projects">{arrayNomesProjetos[index]}</h1>
                  <div className="buttons-project">
                    <a href={arrayLinksProjetos[index]} target="_blank" rel="noreferrer noopener">
                      <button className="button-project">DEMO</button>
                    </a>
                    <a href={arrayLinksGithub[index]} target="_blank" rel="noreferrer noopener">
                      <button className="button-project">GITHUB</button>
                    </a>
                  </div>
                </div>
              ))
            }
      </div>
    </div>
  )
}

export default Projetos;
