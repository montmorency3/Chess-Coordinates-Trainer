import React from "react";
import "./Board.css"
import Files from "./Files";
import "./Files.css"
import Ranks from "./Ranks";
import "./Ranks.css"
import Tiles from "./Tiles";





function Board(){
    const ranks = Array(8).fill().map( (x, i ) => i);
    const files = Array(8).fill().map( (x,i) =>  i);
    const board = Array(8).fill(null).map( () => Array(8).fill(null))

    board.forEach( ( (array,indexArray) => {
        array.forEach( (item, indexItem) => {
            board[indexArray][indexItem] = (indexArray + "" + indexItem);
        })
    }))

    return (
        <div className="board"> 
        <Ranks ranks={ranks}/>
            <div class="tilesList"> 
            <Tiles key="tiles" ranks={ranks} files={files} board={board}/>
            </div>
        <Files files={files}/>
        
        </div>
    );
}

export default Board;