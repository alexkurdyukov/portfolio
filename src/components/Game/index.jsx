import React from "react";

const Cage = () => {
    return(
        <div className="cage"></div>
    )
}

const Game = () => {
    return(
        <div className="grid">  
            <Cage/>
            <Cage/>
            <Cage/>
            <Cage/>
            <Cage/>
            <Cage/>
            <Cage/>
            <Cage/>
            <Cage/>
        </div>
    )
}

export default Game
