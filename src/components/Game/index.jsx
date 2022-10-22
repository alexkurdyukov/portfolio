import React, { Children, useState, useEffect } from "react";
import Button from "../Button";
import { ReactComponent as RestartIcon } from "../../assets/images/restartIcon.svg";
import { calculateWinner } from "../../scripts/gameLogic";

const defaultSquares = () => new Array(9).fill(null);
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Game = () => {
  const answerData = {
    o: "Computer win!",
    x: "You win!",
    draw: "draw",
  };
  const [gameOpened, setGameOpened] = useState(false);
  const [totalGameState, setTotalGameState] = useState("start");
  //на основании двух стэйтов будем делать проверку на багованное состояние игры - когда игрок или ии выигрывает последним ходом
  // в таком случае будем делать проверку, если gameState ==='draw' и одновременно выиграл кто-то, то будем выводить кто выиграл
  // если setState==='draw', но никто не выиграл, будем выдавать ничью
  // напишем функцию stateDefinder
  const [gameState, setGameState] = useState("start");
  const [squares, setSquares] = useState(defaultSquares());
  const [winner, setWinner] = useState(null);

  const newGame = () => {
    setSquares(defaultSquares);
    setGameState(null);
    setWinner(null);
  };
  const stateDefinder = () => {
    console.log(`function is working , now state is ${totalGameState}`);
    if (!winner && gameState == "draw") {
      setTotalGameState("draw");
      
    }
    if ((winner === "o" || winner === "x") && gameState == "draw") {
      setTotalGameState(winner);
      
    }
  };
  useEffect(() => {
    const isComputerTurn =
      squares.filter((square) => square !== null).length % 2 === 1;
    const linesThatAre = (a, b, c) => {
      return lines.filter((squareIndexes) => {
        const squareValues = squareIndexes.map((index) => squares[index]);
        return (
          JSON.stringify([a, b, c].sort()) ===
          JSON.stringify(squareValues.sort())
        );
      });
    };
    const emptyIndexes = squares
      .map((square, index) => (square === null ? index : null))
      .filter((val) => val !== null);
    const playerWon = linesThatAre("x", "x", "x").length > 0;
    const computerWon = linesThatAre("o", "o", "o").length > 0;
    if (playerWon) {
      setWinner("x");
      setGameState("win");
      stateDefinder();
    }
    if (computerWon) {
      setWinner("o");
      setGameState("lose");
      stateDefinder();
    }
    const putComputerAt = (index) => {
      let newSquares = squares;
      newSquares[index] = "o";
      setSquares([...newSquares]);
    };

    if (isComputerTurn) {
      const winningLines = linesThatAre("o", "o", "null");
      if (winningLines.length > 0) {
        const winIndex = winningLines[0].filter(
          (index) => squares[index] === null
        )[0];
        putComputerAt(winIndex);
        return;
      }

      const linesToBlock = linesThatAre("x", "x", null);
      if (linesToBlock.length > 0) {
        const blockIndex = linesToBlock[0].filter(
          (index) => squares[index] === null
        )[0];
        putComputerAt(blockIndex);
        return;
      }

      const linesToContinue = linesThatAre("o", "null", "null");
      if (linesToContinue.length > 0) {
        putComputerAt(
          linesToContinue[0].filter((index) => squares[index] === null)[0]
        );
        return;
      }

      const randomIndex =
        emptyIndexes[Math.ceil(Math.random() * emptyIndexes.length)];
      putComputerAt(randomIndex);
    }
  }, [squares]);

  function handleSquareClick(index) {
    const isPlayerTurn =
      squares.filter((square) => square !== null).length % 2 === 0;
    if (isPlayerTurn) {
      let newSquares = squares;
      if (newSquares[index] !== "o") {
        newSquares[index] = "x";
      }
      setSquares([...newSquares]);
    }
  }

  useEffect(() => {
    let flag = squares.every((element) => element !== null);
    if (flag) {
      if (!gameState === "win") {
        setGameState("draw");
        return;
      }
    }
  }, [squares]);

  return (
    <div className="game">
      <Board>
        {squares.map((square, index) => (
          <Square
            key={index}
            x={square === "x" ? 1 : 0}
            o={square === "o" ? 1 : 0}
            onClick={() => handleSquareClick(index)}
          />
        ))}
      </Board>
      <div className="game__buttons">
        <Button onClick={newGame} className={`game__button`}>
          New Game
        </Button>
      </div>
      {(gameState === "win" || gameState === "lose") && (
        <div className="game__popup">
          <span className="game__popup-text">You {gameState}</span>
        </div>
      )}
    </div>
  );
};

const Board = (props) => {
  return <div className="game__board" {...props}></div>;
};

const Square = (props) => {
  return (
    <div className="square" {...props}>
      {props.x ? "x" : props.o ? "o" : ""}
    </div>
  );
};

export default Game;
