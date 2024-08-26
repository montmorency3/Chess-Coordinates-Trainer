import React, {useState} from "react";
import Piece from "./Piece";
import "./Tiles.css"

function Tiles(props){

const board = props.board;

const startingPieces = [
    ["b rook", "b knight", "b bishop", "b queen", "b king", "b bishop", "b knight", "b rook"],
    ["b pawn", "b pawn", "b pawn", "b pawn", "b pawn", "b pawn", "b pawn", "b pawn"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["w pawn", "w pawn", "w pawn", "w pawn", "w pawn", "w pawn", "w pawn", "w pawn"],
    ["w rook", "w knight", "w bishop", "w queen", "w king", "w bishop", "w knight", "w rook"]
]


const [pieces, setPieces] = useState(startingPieces);
const [coordinate, setCoordinate] = useState(getRandomCoordinate);
const [isClicked, setClick ] = useState(false);

function getRandomCoordinate(){
    return getRandomInt(0,7) + "" + getRandomInt(0,7)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decimalToCoord(decimal){
    const rank = parseInt(decimal[1], 10);
    const file = parseInt(decimal[0], 10); 
    const string = (8 - file).toString()

    return (String.fromCharCode(rank+97) + string)


    //
}

function getClassName(indexArray, indexItem){
    let c = "tile";
    c += ((indexArray + indexItem) % 2 === 0 ? " tile-light" : " tile-dark")
    return c;
}

function handleDragOver(e){
    e.preventDefault();
}

function handleClick(e){


    if (e.target.id.toString() === coordinate){ 
        setCoordinate(getRandomCoordinate());
    }
}

function handleDrop(e){
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const parsedData= JSON.parse(data);
    const startingSquare = parsedData.id
    const indexi = parseInt(startingSquare[0],10);
    const indexy = parseInt(startingSquare[1],10);
    const endSquare = e.target.id
    const iEnd = parseInt(endSquare[0],10);
    const yEnd = parseInt(endSquare[1],10);
    const piece = pieces[indexi][indexy];

    if (startingSquare !== endSquare){
    const updatedPieces = pieces.map( (array, indexArray) => {
        return (
        array.map( (item, indexItem) => {

            if (indexArray === indexi && indexItem === indexy){
                return null;
            }
            else if (indexArray === iEnd && indexItem === yEnd){
                return piece;
            } else {
                return item;
            }
        })
        )
    })
    setPieces(updatedPieces)}
    else {
        setPieces(pieces);
    }
}
    return (
        <div className="tiles">
            {board.map ( (array,indexArray) => {
                return array.map( (tile, indexItem) => {
                    return (
                    <div className = {getClassName(indexArray, indexItem)} 
                    id={tile} 
                    key={tile}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={handleClick}
                    > 
                    
                    {/* {pieces[indexArray][indexItem] !== null &&
                     <Piece 
                     piece={pieces[indexArray][indexItem].split(' ')[1]} 
                     color={pieces[indexArray][indexItem].split(' ')[0]}
                     tile={tile}/>
                    } */}
                    </div>
                    );
            })
            })}

        <div className="coordinate-trainer">
                {decimalToCoord(coordinate)}
            </div>
        </div>
    )
}

export default Tiles;