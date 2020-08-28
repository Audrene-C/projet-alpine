import { useDispatch, useSelector } from 'react-redux';

const SetMarque = (marque) => {
    console.log('setMarque se lance')
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    
    if (marque === state.marque) {
        console.log('setMarque se cancel')
        return
    }
    if (marque === 'Legende') {        
        dispatch({type: 'setMarque', payload: {marque: marque}})        
    }
    if (marque === 'Pure') {
        dispatch({type: 'setMarque', payload: {marque: marque}})            
    }
}

export default SetMarque;