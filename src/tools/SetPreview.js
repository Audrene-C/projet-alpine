import { useDispatch, useSelector } from 'react-redux';
import Images from './Images';

const SetPreview = () => {
    console.log('setPreview se lance')
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    if (state.marque === 'Legende') {
        switch (state.couleur) {
            case 'Blanc':
                dispatch({type: 'setPreview', payload: {img: Images.marque.legende.blanc.img}})
                break;
            case 'Bleu':
                dispatch({type: 'setPreview', payload: {img: Images.marque.legende.bleu.img}})
                break;
            case 'Noir':
                dispatch({type: 'setPreview', payload: {img: Images.marque.legende.noir.img}})
                break;
            default:
                dispatch({type: 'setPreview', payload: {img: Images.marque.legende.img}})
        }
    } else if (state.marque === 'Pure') {
        switch (state.couleur) {
            case 'Blanc':
                if (state.jantes === 'Jantes Serac') {
                    dispatch({type: 'setPreview', payload: {img: Images.marque.pure.blanc.imgSerac}})
                } else {
                    dispatch({type: 'setPreview', payload: {img: Images.marque.pure.blanc.img}})
                }
                break;
            case 'Bleu':
                if (state.jantes === 'Jantes Serac') {
                    dispatch({type: 'setPreview', payload: {img: Images.marque.pure.bleu.imgSerac}})
                } else {
                    dispatch({type: 'setPreview', payload: {img: Images.marque.pure.bleu.img}})
                }
                break;
            case 'Noir':
                if (state.jantes === 'Jantes Serac') {
                    dispatch({type: 'setPreview', payload: {img: Images.marque.pure.noir.imgSerac}})
                } else {
                    dispatch({type: 'setPreview', payload: {img: Images.marque.pure.noir.img}})
                }
                break;
            default:
                dispatch({type: 'setPreview', payload: {img: Images.marque.pure.img}})
        }
    }
}

export default SetPreview;