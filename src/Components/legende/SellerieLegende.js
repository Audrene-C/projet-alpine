import React from 'react';
import MyButton from '../MyButton';
import Images from '../../tools/Images';

const SellerieLegende = () => {
    return (
      <div className="options">
         <div class="card1" style={{ width: '10rem' }}>
            <img src={Images.sellerie.brun.select} class="card-img-top" alt="cuir brun"/>
            <div class="card-body">
                <h5 class="card-title">Sieges Confort en cuir brun</h5>
                <p class="card-text">800 €</p>
                <MyButton sellerie="Cuir brun" />
            </div>
          </div>

          <div class="card1" style={{ width: '10rem' }}>
            <img src={Images.sellerie.noir.select} class="card-img-top" alt="cuir noir"/>
            <div class="card-body">
                <h5 class="card-title">Sieges Confort en cuir noir</h5>
                <p class="card-text">0 €</p>
                <MyButton sellerie="Cuir noir" />
            </div>
          </div>
      </div>
    );
}

export default SellerieLegende;