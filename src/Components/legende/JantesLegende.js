import React from 'react';
import MyButton from '../MyButton';
import Images from '../../tools/Images';

const JantesLegende = () => {
  return (
    <div className="options">
        <div class="card" style={{ width: '10rem' }}>
            <img src={Images.jantes.legende} class="card-img-top" alt="legende"/>
            <div class="card-body">
                <h5 class="card-title">Jantes Legende</h5>
                <p class="card-text">0 €</p>
                <MyButton jantes="Jantes Legende" />
            </div>
        </div>
    </div>
  );
}

export default JantesLegende;