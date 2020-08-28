import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

const Recap = () => {
    const state = useSelector(state => state)

    return(
        <div className="options">
            <ListGroup>
                <ListGroup.Item>Marque: {state.marque}</ListGroup.Item>
                <ListGroup.Item>Couleur: {state.couleur}</ListGroup.Item>
                <ListGroup.Item>Jantes: {state.jantes}</ListGroup.Item>
                <ListGroup.Item>Sellerie: {state.sellerie}</ListGroup.Item>
                <ListGroup.Item>Equipements: {state.equipements}</ListGroup.Item>
                <ListGroup.Item>Accessoires: {state.accessoires}</ListGroup.Item>
                <ListGroup.Item>Prix: {state.prix} €</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Recap;