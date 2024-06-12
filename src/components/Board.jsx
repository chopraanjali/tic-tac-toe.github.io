import Square from './Square';

import React, { useState } from 'react';

export default function Board() {
  const [isXNext, setXNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSq = squares.slice();
    isXNext ? (nextSq[i] = 'X') : (nextSq[i] = 'O');
    setSquares(nextSq);
    setXNext(!isXNext);
  }

  function calculateWinner(squares) {
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

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] == squares[b] && squares[b] == squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status = '';
  let gameOver = '';
  if (winner) {
    status = 'The Winner is: ' + winner;
    gameOver = 'Game Over!';
  } else {
    status = 'Next player is: ';
    isXNext ? (status += 'X') : (status += 'O');
  }

  function handleNewGame(squares) {
    const emptySquares = squares.slice(0, squares.length);
    setSquares(emptySquares);
  }
  return (
    <>
      <h3 className="game-over">{gameOver}</h3>
      <div
        className="status"
        style={winner ? { color: 'green' } : { color: '' }}
      >
        {status}
      </div>

      <div className="board-container">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <button className="new-game" onClick={() => handleNewGame(squares)}>
        New Game
      </button>
    </>
  );
}
