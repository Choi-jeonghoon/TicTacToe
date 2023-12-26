import React, { Component } from 'react';
import Square from './Square';
import "./Board.css"

export default class Board extends Component {

    renderSquare(i) {
        return <Square value={i} />
    }

    render() {
        return (
            <div>
                <div className='status'>Next Player: X, 0</div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}


//위코드를 간단하게 나타내는 방법(map 함수 사용)
// export default class Board extends Component {
//     renderSquare(i) {
//         return <Square key={i} value={i} />;
//     }

//     render() {
//         const rows = Array(3).fill(null);

//         return (
//             <div>
//                 <div className='status'>Next Player: X, 0</div>
//                 {rows.map((row, rowIndex) => (
//                     <div key={rowIndex} className='board-row'>
//                         {rows.map((_, colIndex) => this.renderSquare(rowIndex * 3 + colIndex))}
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }
