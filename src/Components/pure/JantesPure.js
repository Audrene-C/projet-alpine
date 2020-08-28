import React from 'react';
import MyButton from '../MyButton';
import Images from '../../tools/Images';

const JantesPure = () => {
    return (
      <div className="options">
        <div class="card" style={{ width: '10rem' }}>
            <img src={Images.jantes.standard} class="card-img-top" alt="standard"/>
            <div class="card-body">
                <h5 class="card-title">Jantes Standard</h5>
                <p class="card-text">0 €</p>
                <MyButton jantes="Jantes Standard" />
            </div>
        </div>

          <div class="card" style={{ width: '10rem' }}>
            <img src={Images.jantes.serac} class="card-img-top" alt="serac"/>
            <div class="card-body">
                <h5 class="card-title">Jantes Serac</h5>
                <p class="card-text">1000 €</p>
                <MyButton jantes="Jantes Serac" />
            </div>
        </div>
      </div>
    );
}

export default JantesPure;