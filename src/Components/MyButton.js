import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';

const MyButton = (props) => {

  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const setCouleur = (props) => {
    dispatch({type: 'setCouleur', payload: {marque: state.marque, couleur: props.couleur}})
    console.log('setCouleur se lance')
  }

  const setJantes = (props) => {
    dispatch({type: 'setJantes', payload: {jantes: props.jantes}})
    console.log('setJantes se lance')
  }

  const setSellerie = (props) => {
    dispatch({type: 'setSellerie', payload: {sellerie: props.sellerie}})
    console.log('setSellerie se lance')
  }

  if (props.couleur !== undefined) {

    return(
      <div className="MyButton">
        <Button 
          bg="dark"
          variant="dark"
          onClick={() => setCouleur(props)}>
            Selectionner
        </Button>
      </div>
    )
  }

  if (props.jantes !== undefined) {

    return(
      <div className="MyButton">
        <Button 
          bg="dark"
          variant="dark"
          onClick={() => setJantes(props)}>
            Selectionner
        </Button>
      </div>
    )
  }

  if (props.sellerie !== undefined) {

    return(
      <div className="MyButton">
        <Button 
          bg="dark"
          variant="dark"
          onClick={() => setSellerie(props)}>
            Selectionner
        </Button>
      </div>
    )
  }

}

export default MyButton;
