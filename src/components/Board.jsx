import React from "react";
import "./Board.css"
import Files from "./Files";
import "./Files.css"
import Ranks from "./Ranks";
import "./Ranks.css"
import Tile from "./Tile";

const pieces = [
    ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
    ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
    ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"]
]


function Board(){

    function getClassName(indexArray, indexItem){
        let c = "tile";
        c += ((indexArray + indexItem) % 2 === 0 ? " tile-dark" : " tile-light")
        return c;
    }
    const ranks = Array(8).fill().map( (x, i ) => 8-i);
    const files = Array(8).fill().map( (x,i) => 97+i).map( (x) => String.fromCharCode(x) );
    const board = Array(8).fill(null).map( () => Array(8).fill(null))


    board.forEach( ( (array,indexArray) => {
        array.forEach( (item, indexItem) => {
            
            board[indexArray][indexItem] = (files[indexItem] + ranks[indexArray]);
        })
    }))

    return (
        <div className="board"> 

        <Ranks ranks={ranks}/>
            <div className="tiles"> 
            {board.map ( (array,indexArray) => {
                return array.map( (tile, indexItem) => {
                    return <Tile className={
                        getClassName(indexArray,indexItem)} 
                        tile={tile} 
                        piece={pieces[indexArray][indexItem]}
                        
                        />
            })
            })}
            </div>
        <Files files={files}/>
        
        </div>
    );
}

export default Board;