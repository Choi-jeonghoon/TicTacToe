import React, { useState } from 'react';
import Square from './Square';
import "./Board.css"

const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    //승자 확인 로직
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let index = 0; index < lines.length; index++) {
            const [a, b, c] = lines[index];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const winnder = calculateWinner(squares)
    let status;

    if (winnder) {
        status = `Winner: ${winnder}`
    } else {
        status = `Next Player: ${xIsNext ? 'X' : 'O'}`
    }

    //클릭 이벤트
    const handleClick = (i) => {
        const newSquares = squares.slice();
        newSquares[i] = xIsNext ? 'X' : 'O'
        setSquares(newSquares)
        // setXIsNext(!xIsNext)
        setXIsNext(prev => !prev)

    }

    const renderSquare = (i) => {
        return <Square value={squares[i]}
            onClick={() => handleClick(i)} />
    }

    return (
        <div>
            <div className='status'>{status}</div>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );

}

export default Board
