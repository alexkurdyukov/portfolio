import React, { useState } from "react";
import Button from "../Button";
import { ReactComponent as RestartIcon } from "../../assets/images/restartIcon.svg";
import { calculateWinner } from "../../scripts/gameLogic";

const Square = (props) => {
  return (
    <div onClick={props.onClick} className="square">
      {props.value}
    </div>
  );
};
const Board = ({ squares, click }) => {
  return (
    <div className="game__board">
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => click(index)} />
      ))}
    </div>
  );
};
const Game = () => {
  const [isGameAvailable, setGameAvailable] = useState(false); //
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true); //first move for X
  const winner = calculateWinner(board); //function, which contain game logic to find winner
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  const startNewGame = () => {
    setBoard(Array(9).fill(null));
  };
  return (
    <div className="game">
      {!isGameAvailable && (
        <>
          <div className="game__end">
            {winner === "O" ? (
              <p className="game__end-text">You lose!</p>
            ) : (
              <p className="game__end-text">Grats!You win</p>
            )}
            <Button onClick={()=>{setGameAvailable(!isGameAvailable)}}>New Game</Button>
          </div>
          <div className="game__overlay"></div>
        </>
      )}
      <Board squares={board} click={handleClick} />
      <span className="game__text">Next player: {xIsNext ? "X" : "O"} </span>
      <div className="buttons">
        <Button className={`game__button`}>
          <div className="game__button-icon">
            <RestartIcon />
          </div>
          <span
            onClick={() => {
              startNewGame();
            }}
            className="game__button-text"
          >
            New game
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Game;
