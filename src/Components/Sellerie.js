import React from 'react';
import MyButton from './MyButton';

const Sellerie = () => {
    return (
      <div>
        <MyButton sellerie="Brun" />
        <MyButton sellerie="Noir" />
        <MyButton sellerie="NoirDinamica" />
        <MyButton sellerie="NoirPerfore" />
      </div>
    );
}

export default Sellerie;