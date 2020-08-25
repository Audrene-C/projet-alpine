import React from 'react';
import { useSelector } from 'react-redux';

const Image = () => {

  const image = useSelector(state => state.image)

  // function multiOrSingleImg() {
  //   if (image.length === 1) {
  //     let myImage = image[0]
  //     return(
  //       <img src={myImage} alt={myImage}/>
  //     )
  //   } else {
  //     let number = image.length
  //     return(
  //       <MyCarousel slide={number} />
  //     )
  //   }
  // }

  return(
    <img src={image} alt="voiture" />
  )  

}

export default Image;
