const initialState = {
    marque: "",
    couleur: "",
    jantes: "",
    sellerie: [],
    equipement: [],
    accessoires: []
  };
   
  const rootReducer = (state = initialState, action) => {

    if (action.type === 'setMarque') {
        //   TODO blabla
    }

    return state;
  }
   
  export default rootReducer;
  