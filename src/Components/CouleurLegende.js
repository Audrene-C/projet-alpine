import React from 'react';
import MyButton from './MyButton';
import Images from '../tools/Images';

const CouleurLegende = () => {
    return (
      <div>
        <div className="card" style={{ width: '10rem' }}>
            <img src={Images.marque.legende.blanc.select} className="card-img-top" alt="blanc" />
            <div className="card-body">
                <h5 className="card-title">Peinture opaque Blanc Glacier</h5>
                <p className="card-text">0 €</p>
                <MyButton couleur="Blanc">
                    Selectioner
                </MyButton>
            </div>
        </div>

        <div className="card" style={{ width: '10rem' }}>
            <img src={Images.marque.legende.bleu.select} className="card-img-top" alt="blanc" />
            <div className="card-body">
                <h5 class="card-title">Teinte spéciale Bleu Alpine</h5>
                <p class="card-text">1 800 €</p>
                <MyButton couleur="Bleu">
                    Selectioner
                </MyButton>
            </div>
        </div>

        <div className="card" style={{ width: '10rem' }}>
            <img src={Images.marque.legende.noir.select} className="card-img-top" alt="blanc" />
            <div className="card-body">
                <h5 class="card-title">Teinte métallisée Noir Profond</h5>
                <p class="card-text">840 €</p>
                <MyButton couleur="Noir">
                    Selectioner
                </MyButton>
            </div>
        </div>
      </div>
    );
}

export default CouleurLegende;