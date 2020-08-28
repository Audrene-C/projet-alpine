import React from 'react';
import { useDispatch } from 'react-redux';

const SetShow = (bool) => {
    const dispatch = useDispatch()
    dispatch({type: 'setShow', payload: {val: bool}})
    console.log('setShow se lance')
}

export default SetShow;