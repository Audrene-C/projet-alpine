import Images from '../img/Index'

const initialState = {
  image: Images.marque.legende.base,
  marque: Images.marque.legende.base,
  couleur: "",
  jantes: "",
  sellerie: "",
  equipement: [],
  accessoires: []
};
   
const rootReducer = (state = initialState, action) => {

  if (action.type === 'setMarque') {
    let myMarque = action.payload.marque
    let newState = {
      ...state,
      image: [myMarque],
      marque: myMarque
    }
    console.log(newState)

    return newState
  }

  if (action.type === 'setCouleur') {
    let myCouleur = action.payload.couleur
    let myImg = action.payload.marque+myCouleur
    let newState = {
      ...state,
      image: myImg,
      couleur: myCouleur
    }
    console.log(newState)

    return newState
  }

  return state;
}
  
export default rootReducer;
