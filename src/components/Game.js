import React from 'react'
import styled from 'styled-components'

const Game = ({gameID, external, steamAppID, thumb }) => {

    const GameContainer = styled.div`
    
        width: 500px;
        height: auto;
        background: #dedede;
        color: #666;
        padding: 10px;
        margin: 10px;
        border-radius: 15px;
        box-shadow: 0px 3px 8px rgba(0,0,0,0.3); 
        text-align: center;
    
    `;

    
  return (
    <GameContainer>
        <img src={thumb} alt="" />
        <h2>{external}</h2>
        <p>Game ID: {gameID}</p>
        <p>Steam ID: {steamAppID}</p>
        <button>Megveszem</button>
    </GameContainer>
  )
}

export default Game