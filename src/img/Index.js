import React from 'react';

const Images = {
    
    marque: {
        legende: {
            blanc: {
                img: [
                    './assets/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg',
                    './assets/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg',
                    './assets/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg',
                    './assets/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg'
                ],
                jantes: {
                    legende: './assets/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg'
                }
            },
            bleu: {
                img: [
                    './assets/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg',
                    './assets/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg',
                    './assets/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg',
                    './assets/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg'
                ],
                jantes: {
                    legende: './assets/configurateur/jantes/vues/couleur-bleu_jante-legende (3).jpg'
                }
            },
            noir: {
                img: [
                    './assets/configurateur/modele/selection/legende.png',
                    './assets/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg',
                    './assets/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg',
                    './assets/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg',
                    './assets/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg'
                ],
                jantes: {
                    legende: './assets/configurateur/jantes/vues/couleur-noir_jante-legende (1).jpg'
                }
            },
        },
        pure: {
            base: './assets/configurateur/modele/selection/pure.png',
            blanc: {
                jantes: {
                    standard: './assets/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg',
                    serac: './assets/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg'
                }
            },
            bleu: {
                jantes: {
                    standard: './assets/configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg',
                    serac: './assets/configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg'
                }
            },
            noir: {
                jantes: {
                    standard: './assets/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg',
                    serac: './assets/configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg'
                }
            }
        }
    },
    sellerie: {
        brun: './assets/configurateur/interieurs/selection/cuir-brun.jpg',
        noir: './assets/configurateur/interieurs/selection/cuir-noir.jpg',
        dinamica: './assets/configurateur/interieurs/selection/cuir-noir_dinamica.jpg',
        perfore: './assets/configurateur/interieurs/selection/cuir-noir_perfore.jpg'
    },
    equipement: {
        conduite: {
            stationnementAv: './assets/configurateur/equipements/categories/conduite/aide-stationnement-ar.jpg',
            stationnementAr: './assets/configurateur/equipements/categories/conduite/aide-stationnement-av-ar.jpg',
            cameraRecul: './assets/configurateur/equipements/categories/conduite/camera-recul.jpg',
            echappement: './assets/configurateur/equipements/categories/conduite/echappement-sport.jpg'
        },
        confort: {
            rangement: './assets/configurateur/equipements/categories/confort/pack-rangement.jpg',
            regulateur: './assets/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg',
            retroExt: './assets/configurateur/equipements/categories/confort/retro-ext-chaffant.jpg',
            retroInt: './assets/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg'
        },
        design: {
            pack: './assets/configurateur/equipements/categories/design/pack-heritage.jpg',
            reposePied: './assets/configurateur/equipements/categories/design/repose-pied-alu.jpg'
        },
        media: {
            metrics: './assets/configurateur/equipements/categories/media et navigation/alpine-metrics.jpg',
            focal: './assets/configurateur/equipements/categories/media et navigation/audio-focal.jpg',
            premium: './assets/configurateur/equipements/categories/media et navigation/audio-premium.jpg',
            standard: './assets/configurateur/equipements/categories/media et navigation/audio-standard.jpg'
        },
        persoExt: {
            etrierBleu : './assets/configurateur/equipements/categories/personnalisation exterieure/etrier-bleu.jpg',
            etrierGris: './assets/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg',
            logo: './assets/configurateur/equipements/categories/personnalisation exterieure/logo-alpine.jpg'
        },
        persoInt: {
            logo: './assets/configurateur/equipements/categories/personnalisation interieure/logo-volant.jpg',
            pack: './assets/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg',
            pedal: './assets/configurateur/equipements/categories/personnalisation interieure/pedal-alu.jpg',
            siege: './assets/configurateur/equipements/categories/personnalisation interieure/siege-chauffant.jpg'
        },
        securité: {
            freinageUrgence: './assets/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg',
            airbag: './assets/configurateur/equipements/categories/securite/airbag.jpg',
            freinagePerf: './assets/configurateur/equipements/categories/securite/freinage-haute-perf.jpg'
        }
    },
    accessoires: {
        exterieur: {
            antivol: './assets/configurateur/accessoires/exterieur/antivol-jantes.jpg',
            cabochons: './assets/configurateur/accessoires/exterieur/cabochons-metal.jpg',
            housse: './assets/configurateur/accessoires/exterieur/housse.jpg'
        },
        garage: {
            chargeur: './assets/configurateur/accessoires/garage/chargeur-batterie.jpg',
            kit: './assets/configurateur/accessoires/garage/kit-outils.jpg'
        },
        interieur: {
            filet: './assets/configurateur/accessoires/interieur/filet-rangement.jpg',
            tapis: './assets/configurateur/accessoires/interieur/tapis-coffre.jpg'
        },
        multimedia: {
            camera: './assets/configurateur/accessoires/multimedia/support-camera.jpg',
            smartphone: './assets/configurateur/accessoires/multimedia/support-smartphone.jpg'
        },
        transport: {
            alarme: './assets/configurateur/accessoires/transport et protection/alarme.jpg',
            chaine: './assets/configurateur/accessoires/transport et protection/chaaine-neige.jpg',
            extincteur: './assets/configurateur/accessoires/transport et protection/extincteur.jpg',
            fixation: './assets/configurateur/accessoires/transport et protection/fixation-extincteur.jpg',
            kit: './assets/configurateur/accessoires/transport et protection/kit-securite.jpg',
            protection: './assets/configurateur/accessoires/transport et protection/protection-obd.jpg'
        }
    }

}

export default Images;