import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './Main.css';

const Main = () => {
    const [players, SetPlayers] = useState([]);
    useEffect(() => {
        fetch('/dinos.json')
        .then(res => res.json())
        .then(data => SetPlayers(data));
    },[]);

    return (
        <div className="main-container">
            <div className="players-container">
                {
                    players.map(player => <Player
                        key = {player.key}
                        player = {player}
                    ></Player>)
                }
            </div>
            <div className="lobby-container">
                
            </div> 
        </div>
    );
};

export default Main;