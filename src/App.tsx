import React, { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponents';
import { Board } from './model/Board';

function App() {
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restart()
  }, [])

  const restart = () => {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }
  
  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard}/>
    </div>
  );
}

export default App;
