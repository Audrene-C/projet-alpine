import React from 'react';
import MyButton from './MyButton';
import Images from '../tools/Images';

const CouleurPure = () => {
    return (
      <div>
        <img className="options" src={Images.marque.pure.blanc.select} alt="blanc"/>
        <MyButton couleur="Blanc" />
        <img className="options" src={Images.marque.pure.bleu.select} alt="bleu"/>
        <MyButton couleur="Bleu" />
        <img className="options" src={Images.marque.pure.noir.select} alt="noir"/>
        <MyButton couleur="Noir" />
      </div>
    );
}

export default CouleurPure;