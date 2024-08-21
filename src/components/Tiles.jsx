import React, {useState} from "react";
import Piece from "./Piece";
import "./Tiles.css"

function Tiles(props){

const ranks = props.ranks;
const files = props.files;
const board = props.board;


const startingPieces = [
    ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
    ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
    ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"]
]


const [pieces, setPieces] = useState(startingPieces);

function getClassName(indexArray, indexItem){
    let c = "tile";
    c += ((indexArray + indexItem) % 2 === 0 ? " tile-dark" : " tile-light")
    return c;
}

    return (
        <div className="tiles">
            {board.map ( (array,indexArray) => {
                return array.map( (tile, indexItem) => {
                    return <div className = {getClassName(indexArray, indexItem)}> 
                    {tile} <Piece piece="rook" color="white"/>



                    </div>
            })
            })}
        </div>
    )
}

export default Tiles;