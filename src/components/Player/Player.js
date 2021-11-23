import React from 'react';
import './Player.css'

const Player = (props) => {
    const {name, health, damage, speed, rarity, img} = props.player;
    return (
        <div className="player-card">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h4 className="bg-health">Health: {health}</h4>
            <h4 className="bg-damage">Damage: {damage}</h4>
            <h4 className="bg-speed">Speed: {speed}</h4>
            <h4 className="bg-rarity">Rarity: {rarity}</h4>
        </div>
    );
};

export default Player;