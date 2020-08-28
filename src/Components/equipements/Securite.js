import React from 'react';
import MyButton from '../MyButton';
import Images from '../../tools/Images';

const Securite = () => {
    return (
      <div className="options">
          <div class="card1" style={{ width: '10rem' }}>
            <img src={Images.sellerie.dinamica.select} class="card-img-top" alt="cuir noir dinamica"/>
            <div class="card-body">
                <h5 class="card-title">Sieges baquets en cuir noir et Dinamica</h5>
                <p class="card-text">0 €</p>
                <MyButton sellerie="Noir Dinamica" />
            </div>
          </div>

          <div class="card1" style={{ width: '10rem' }}>
            <img src={Images.sellerie.perfore.select} class="card-img-top" alt="cuir noir perfore"/>
            <div class="card-body">
                <h5 class="card-title">Sieges baquets en cuir noir et Perfore</h5>
                <p class="card-text">0 €</p>
                <MyButton sellerie="Noir Perfore" />
            </div>
          </div>
      </div>
    );
}

export default Securite;