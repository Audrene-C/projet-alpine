import React from 'react';
import { useSelector } from 'react-redux';
import Legende from '../img/configurateur/modele/selection/legende.png';
import Pure from '../img/configurateur/modele/selection/pure.png';
import LegendeBlanc from '../img/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg';
import LegendeBleu from '../img/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg';
import LegendeNoir from '../img/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg';
import PureBlanc from '../img/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard.jpg';
import PureBleu from '../img/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard.jpg';
import PureNoir from '../img/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard.jpg';

const Image = () => {

  const image = useSelector(state => state.image)

  switch (image) {
    
    //choose car brand
    case "Legende":
      return(
        <div className="Image">
            <img
                src={Legende}
                alt="Legende"
            />
        </div>
      );

    case "Pure":
      return(
        <div className="Image">
            <img
                src={Pure}
                alt="Pure"
            />
        </div>
      );

      //choose car color depending on brand
      case "LegendeBlanc":
        return(
          <div className="Image">
              <img
                  src={LegendeBlanc}
                  alt="LegendeBlanc"
              />
          </div>
        );

        case "LegendeBleu":
          return(
            <div className="Image">
                <img
                    src={LegendeBleu}
                    alt="LegendeBleu"
                />
            </div>
          );

        case "LegendeNoir":
          return(
            <div className="Image">
                <img
                    src={LegendeNoir}
                    alt="LegendeNoir"
                />
            </div>
          );

        case "PureBlanc":
          return(
            <div className="Image">
                <img
                    src={PureBlanc}
                    alt="PureBlanc"
                />
            </div>
          );

        case "PureBleu":
          return(
            <div className="Image">
                <img
                    src={PureBleu}
                    alt="PureBleu"
                />
            </div>
          );

          case "PureNoir":
            return(
              <div className="Image">
                  <img
                      src={PureNoir}
                      alt="PureNoir"
                  />
              </div>
            );

    default:
      return(
        <div className="Image">
            <img
                src="#"
                alt="voiture"
            />
        </div>
      );
  }

  

}

export default Image;
