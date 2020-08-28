import React from 'react';
//import { useSelector } from 'react-redux';

const Preview = () => {
    //const state = useSelector(state => state)

    return(
        <div className="preview">
            <div className="card" style={{ width: '20rem' }}>
                <img src="img/configurateur/couleurs/selection/blanc.jpg" className="card-img-top" alt="blanc" />
                <div className="card-body">
                    <h5 className="card-title">Peinture opaque Blanc Glacier</h5>
                    <p className="card-text">0 €</p>
                    <a href="#" className="btn btn-outline-dark">Selectionner</a>
                </div>
            </div>

            <div class="card" style={{ width: '20rem' }}>
                <img src="img/configurateur/couleurs/selection/bleu.jpg" class="card-img-top" alt="bleu" />
                <div class="card-body">
                    <h5 class="card-title">Teinte spéciale Bleu Alpine</h5>
                    <p class="card-text">1 800 €</p>
                    <a href="#" class="btn btn-outline-dark">Selectionner</a>
                </div>
            </div>

            <div class="card" style={{ width: '20rem' }}>
                <img src="img/configurateur/couleurs/selection/noir.jpg" class="card-img-top" alt="noir" />
                <div class="card-body">
                    <h5 class="card-title">Teinte métallisée Noir Profond</h5>
                    <p class="card-text">840 €</p>
                    <a href="#" class="btn btn-outline-dark">Selectionner</a>
                </div>
            </div>
        </div>
    )
}

export default Preview;
