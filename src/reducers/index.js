import Images from '../tools/Images'

const initialState = {
  carousel: [Images.marque.legende.img],
  preview: [Images.marque.legende.img],
  show: false,
  marque: "Legende",
  couleur: "Noir",
  jantes: "Legende",
  sellerie: "Cuir brun",
  equipements: [],
  accessoires: [],
  prix: 0
};
   
const rootReducer = (state = initialState, action) => {

  if (action.type === 'setMarque') {
    let myMarque = action.payload.marque
    console.log('ppl')

    if (myMarque === 'Legende') {
      console.log('ppl2')
      let newState = {
        ...state,
        carousel: [Images.marque.legende.img],
        marque: myMarque,
        jantes: "Jantes Légendes"
      }
      console.log(newState)
  
      return newState
    }
    if (myMarque === 'Pure') {
      let newState = {
        ...state,
        carousel: [Images.marque.pure.img],
        marque: myMarque,
        jantes: "Jantes Standard"
      }
      console.log(newState)
  
      return newState
    }
  }

  if (action.type === 'setCouleur') {
    let myCouleur = action.payload.couleur
    console.log('state: ', state)
    
    if (myCouleur === 'Blanc') {
      console.log('ppl')
      if (state.marque === 'Legende') {
        let newState = {
          ...state,
          carousel: Images.marque.legende.blanc.img,
          preview: Images.marque.legende.blanc.img,
          couleur: myCouleur
        }
        console.log(newState)
    
        return newState
      } else {
        let newState = {
          ...state,
          carousel: Images.marque.pure.blanc.img,
          preview: Images.marque.pure.blanc.img,
          couleur: myCouleur
        }
        console.log(newState)
    
        return newState
      }
    } else if (myCouleur === 'Bleu') {
      if (state.marque === 'Legende') {
        let newState = {
          ...state,
          carousel: Images.marque.legende.bleu.img,
          preview: Images.marque.legende.bleu.img,
          couleur: myCouleur
        }
        console.log(newState)
    
        return newState
      } else {
        let newState = {
          ...state,
          carousel: Images.marque.pure.bleu.img,
          preview: Images.marque.pure.bleu.img,
          couleur: myCouleur
        }
        console.log(newState)
    
        return newState
      }
    } else if (myCouleur === 'Noir') {
      if (state.marque === 'Legende') {
        let newState = {
          ...state,
          carousel: Images.marque.legende.noir.img,
          preview: Images.marque.legende.noir.img,
          couleur: myCouleur
        }
        console.log(newState)
    
        return newState
      } else {
        let newState = {
          ...state,
          carousel: Images.marque.pure.noir.img,
          preview: Images.marque.pure.noir.img,
          couleur: myCouleur
        }
        console.log(newState)
    
        return newState
      }
    }
  }

  if (action.type === 'setJantes') {
    console.log('state: ', state)
    let myJantes = action.payload.jantes
    console.log('myJantes: ', myJantes)

    if (myJantes === 'Jantes Legende') {
      console.log(state.couleur)

      if (state.couleur === 'Blanc') {
        console.log('ppl blanc')
        let newState = {
          ...state,
          carousel: [Images.marque.legende.blanc.jantes.legende],
          jantes: myJantes
        }
        console.log(newState)
    
        return newState
      } else if (state.couleur === 'Bleu') {
        console.log('ppl bleu')
        let newState = {
          ...state,
          carousel: [Images.marque.legende.bleu.jantes.legende],
          jantes: myJantes
        }
        console.log(newState)
    
        return newState
      } else if (state.couleur === 'Noir') {
        console.log('ppl noir')
        let newState = {
          ...state,
          carousel: [Images.marque.legende.noir.jantes.legende],
          jantes: myJantes
        }
        console.log(newState)
    
        return newState
      }
    } else if (myJantes === 'Jantes Serac') {
      if (state.couleur === 'Blanc') {
        console.log('ppl blanc')
        let newState = {
          ...state,
          carousel: [Images.marque.pure.blanc.jantes.serac],
          jantes: myJantes
        }
        console.log(newState)
    
        return newState
      } else if (state.couleur === 'Bleu') {
        console.log('ppl bleu')
        let newState = {
          ...state,
          carousel: [Images.marque.pure.bleu.jantes.serac],
          jantes: myJantes
        }
        console.log(newState)
    
        return newState
      } else if (state.couleur === 'Noir') {
        console.log('ppl noir')
        let newState = {
          ...state,
          carousel: [Images.marque.pure.noir.jantes.serac],
          jantes: myJantes
        }
        console.log(newState)
    
        return newState
      }
    } else if (myJantes === 'Jantes Standard') {
      if (state.couleur === 'Blanc') {
        console.log('ppl blanc')
        let newState = {
          ...state,
          carousel: [Images.marque.pure.blanc.jantes.standard],
          jantes: myJantes
        }
        console.log(newState)
    
        return newState
      } else if (state.couleur === 'Bleu') {
        console.log('ppl bleu')
        let newState = {
          ...state,
          carousel: [Images.marque.pure.bleu.jantes.standard],
          jantes: myJantes
        }
        console.log(newState)
    
        return newState
      } else if (state.couleur === 'Noir') {
        console.log('ppl noir')
        let newState = {
          ...state,
          carousel: [Images.marque.pure.noir.jantes.standard],
          jantes: myJantes
        }
        console.log(newState)
    
        return newState
      }
    }
  }

  if (action.type === 'setPreview') {
    let myPreview = action.payload.img
    console.log('myPreview: ', myPreview)
    if (myPreview === state.preview) {
      return
    } else {
      let newState = {
        ...state,
        preview: myPreview
      }
      console.log(newState)
  
      return newState
    }
  }

  if (action.type === 'setShow') {
    let newShow = action.payload.val
    let newState = {
      ...state,
      show: newShow
    }
    console.log(newState)  
    return newState
  }

  return state;
}
  
export default rootReducer;
