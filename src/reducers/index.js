import Images from '../tools/Images'

const initialState = {
  carousel: [Images.marque.legende.img],
  marque: "Legende",
  couleur: "Noir",
  jantes: "Legende",
  sellerie: "Cuir noir",
  equipements: [],
  accessoires: [],
  prix: 58500
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
        jantes: "Jantes Légendes",
        prix: 58500
      }
      console.log(newState)
  
      return newState
    }
    if (myMarque === 'Pure') {
      let newState = {
        ...state,
        carousel: [Images.marque.pure.img],
        marque: myMarque,
        jantes: "Jantes Standard",
        prix: 54700
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

  if (action.type === 'setSellerie') {
    let newSellerie = action.payload.sellerie
    if (newSellerie === 'Cuir brun') {
      let newState = {
        ...state,
        carousel: Images.sellerie.brun.vue,
        sellerie: newSellerie
      }
      console.log(newState)  
      return newState
    }
    if (newSellerie === 'Cuir noir') {
      let newState = {
        ...state,
        carousel: Images.sellerie.noir.vue,
        sellerie: newSellerie
      }
      console.log(newState)  
      return newState
    }
    if (newSellerie === 'Noir Dinamica') {
      let newState = {
        ...state,
        carousel: Images.sellerie.dinamica.vue,
        sellerie: newSellerie
      }
      console.log(newState)  
      return newState
    }
    if (newSellerie === 'Noir Perfore') {
      let newState = {
        ...state,
        carousel: Images.sellerie.perfore.vue,
        sellerie: newSellerie
      }
      console.log(newState)  
      return newState
    }
  }

  return state;
}
  
export default rootReducer;
