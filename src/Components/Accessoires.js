import React from 'react';
import MyButton from './MyButton';

const Accessoires = () => {
    return (
      <div>
        <MyButton accessoires="Exterieur" />
        <MyButton accessoires="Garage" />
        <MyButton accessoires="Interieur" />
        <MyButton accessoires="Multimedia" />
        <MyButton accessoires="TransportProtection" />
      </div>
    );
}

export default Accessoires;