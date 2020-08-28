import React from 'react';
import MyButton from '../MyButton';
import Images from '../../tools/Images';

const Conduite = () => {
    return (
      <div className="options">
          <div class="card1" style={{ width: '10rem' }}>
            <img src={Images.equipements.conduite.cameraRecul} class="card-img-top" alt="camera recul"/>
            <div class="card-body">
                <h5 class="card-title">Camera de recul</h5>
                <p class="card-text">1200 €</p>
                <MyButton sellerie="Camera de recul" />
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

export default Conduite;