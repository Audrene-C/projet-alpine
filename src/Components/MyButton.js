import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';

const MyButton = (props) => {

const dispatch = useDispatch()
const state = useSelector(state => state)

const setMarque = (props) => {
    dispatch({type: 'setMarque', payload: {marque: props.marque}})
    console.log('setMarque se lance')
}

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

const setEquipement = (props) => {
  dispatch({type: 'setEquipement', payload: {equipement: props.equipement}})
  console.log('setEquipement se lance')
}

const setAccessoires = (props) => {
  dispatch({type: 'setAccessoires', payload: {accessoires: props.accessoires}})
  console.log('setAccessoires se lance')
}

if (props.marque !== undefined) {

  return(
    <div className="MyButton">
      <Button 
        bg="dark"
        variant="dark"
        onClick={() => setMarque(props)}>
          {props.marque}
      </Button>
    </div>
  )
}

if (props.couleur !== undefined) {

  return(
    <div className="MyButton">
      <Button 
        bg="dark"
        variant="dark"
        onClick={() => setCouleur(props)}>
          {props.couleur}
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
          {props.jantes}
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
          {props.sellerie}
      </Button>
    </div>
  )
}

if (props.equipement !== undefined) {

  return(
    <div className="MyButton">
      <Button 
        bg="dark"
        variant="dark"
        onClick={() => setEquipement(props)}>
          {props.equipement}
      </Button>
    </div>
  )
}

if (props.accessoires !== undefined) {

  return(
    <div className="MyButton">
      <Button 
        bg="dark"
        variant="dark"
        onClick={() => setAccessoires(props)}>
          {props.accessoires}
      </Button>
    </div>
  )
}

}

export default MyButton;
