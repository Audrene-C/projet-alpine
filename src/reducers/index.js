const initialState = {
  image: "legende",
  marque: "legende",
  couleur: "",
  jantes: "",
  sellerie: "",
  equipement: [],
  accessoires: []
};
   
const rootReducer = (state = initialState, action) => {

  function maj(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (action.type === 'setMarque') {
    let myMarque = maj(action.payload.marque)
    let newState = {
      ...state,
      image: myMarque,
      marque: myMarque
    }
    console.log(newState)

    return newState
  }

  if (action.type === 'setCouleur') {
    let myCouleur = maj(action.payload.couleur)
    let myImg = maj(action.payload.marque)+myCouleur
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
