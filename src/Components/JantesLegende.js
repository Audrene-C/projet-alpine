import React from 'react';
import MyButton from './MyButton';
import Images from '../tools/Images';

const JantesLegende = () => {
  return (
    <div>
      <img src={Images.jantes.legende} alt="legende" className="options"/>
      <MyButton jantes="Jantes Legende" />
    </div>
  );
}

export default JantesLegende;