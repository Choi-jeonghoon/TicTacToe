## React Tic Tac Toe 게임

이 프로젝트는 React.js를 사용하여 개발 중인 Tic Tac Toe 게임입니다. 이 게임은 React 18 버전에서 개발되었으며, Node.js 버전은 v21.7.1을 사용하여 개발되었습니다.

## 개요

이 프로젝트는 React 학습을 위한 샘플 프로젝트로서, Tic Tac Toe 게임을 구현함으로써 React 및 기본적인 웹 개발 스킬을 연습하는 데 목적이 있습니다. Tic Tac Toe는 두 플레이어 간에 번갈아가며 3x3 보드에 'X'와 'O'를 채우는 간단한 게임입니다.

## 설치 및 실행

이 저장소를 클론합니다 : git clone https://github.com/Choi-jeonghoon/TicTacToe

    cd TicTacToe
    npm install
    npm start

브라우저에서 http://localhost:3000 에 접속하여 게임을 플레이할 수 있습니다.

또는 https://Choi-jeonghoon.github.io/TicTacToe 로 접속하여 확인가능하다.

## 게임 규칙

Tic Tac Toe 게임은 두 플레이어 간에 번갈아가며 진행됩니다.
각 플레이어는 자신의 차례에 빈 셀에 'X' 또는 'O'를 선택합니다.
가로, 세로 또는 대각선 방향으로 동일한 기호가 3개 연속되면 해당 플레이어가 승리합니다.
모든 셀이 채워지고 아무도 승리하지 않으면 무승부로 판정됩니다.
