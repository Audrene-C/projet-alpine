const initialState = {
  image: "legende",
  marque: "legende",
  couleur: "",
  jantes: "",
  sellerie: [],
  equipement: [],
  accessoires: []
};
   
const rootReducer = (state = initialState, action) => {

  if (action.type === 'setMarque') {
    let myMarque = action.payload.marque
    let newState = {
      ...state,
      image: myMarque,
      marque: myMarque
    }
    console.log(newState)

    return newState
  }

  return state;
}
  
export default rootReducer;
