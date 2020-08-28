import React from 'react';
import MyButton from './MyButton';
import Images from '../tools/Images';

const JantesPure = () => {
    return (
      <div>
        <img src={Images.jantes.serac} alt="serac" className="options"/>
        <MyButton jantes="Jantes Serac" />
        <img src={Images.jantes.standard} alt="standard" className="options"/>
        <MyButton jantes="Jantes Standard" />
      </div>
    );
}

export default JantesPure;