/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import { Board } from "../game/board/board";
function BoardCom() {
  const board = new Board();
  const [boardState, setBoardState] = useState([
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ]);
  useEffect(() => {
    board.startGame();
    setBoardState(board.getBoard())
  }, []);
  useEffect(() => {
    console.log('board rn fr fr:', boardState);
  }, [boardState]);
  const getMovement = (piece: any, xIndex: any, yIndex: any) => {
    const validMovements = piece.getValidMovements(boardState, xIndex, yIndex)
    console.log(validMovements)
  }
  return (
    <div className="board">
      {boardState.map((innerArray, yIndex) => (
        <div key={yIndex}>
          {innerArray.map((element, xIndex) => (
            <div className="board-cell" key={xIndex}>
              {element === null && (<>
                {element}
              </>)}
              {element !== null && (<>
                {/* //@ts-ignore */}
                <button onClick={() => getMovement(element, xIndex, yIndex)} style={{backgroundColor: 'transparent',color: `${element.color}`}}>{element.type}</button>
              </>)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default BoardCom;
