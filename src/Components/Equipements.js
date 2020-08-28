import React from 'react';
import MyButton from './MyButton';

const Equipements = () => {
    return (
      <div>
        <MyButton equipements="Conduite" />
        <MyButton equipements="Confort" />
        <MyButton equipements="Design" />
        <MyButton equipements="MediaNavigation" />
        <MyButton equipements="Exterieur" />
        <MyButton equipements="Interieur" />
        <MyButton equipements="Securite" />
      </div>
    );
}

export default Equipements;