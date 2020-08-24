import React from 'react';
import { useSelector } from 'react-redux';
import Legende from '../img/configurateur/modele/selection/legende.png';
import Pure from '../img/configurateur/modele/selection/pure.png';

const Image = () => {

  const image = useSelector(state => state.image)
  console.log(image)

  if (image === "legende") {

    return(
      <div className="Image">
          <img
              src={Legende}
              alt="voiture"
          />
      </div>
    )
  } else if (image === "pure") {

    return(
      <div className="Image">
          <img
              src={Pure}
              alt="voiture"
          />
      </div>
    )
  } else {

    return(
      <div className="Image">
          <img
              src="#"
              alt="voiture"
          />
      </div>
    )
  }
}

export default Image;
