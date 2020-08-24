import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';

const MyButton = (props) => {

const dispatch = useDispatch()
const setMarque = (props) => {
    dispatch({type: 'setMarque', payload: {marque: props.marque}})
    console.log('setMarque se lance')
}

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

export default MyButton;
