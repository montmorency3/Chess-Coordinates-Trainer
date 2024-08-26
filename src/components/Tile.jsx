import React, {useState} from "react";
import Piece from "./Piece";
import "./Tile.css"

function Tile(props){
    const classes = `${props.className}`;
    const rank = props.tile[1]

    const [isDraggedOver, setIsDraggingOver] = useState(false);
    const [droppedItem, setDroppedItem] = useState(null);


    function handleDragOver(e){
        e.preventDefault(); // Necessary to allow drop
        setIsDraggingOver(true)
        console.log("dragging Over");
    }

    function handleDragLeave(){
        setIsDraggingOver(false);
    };

    function handleDrop(e) {
        e.preventDefault();
        setIsDraggingOver(false);
        // Handle the drop logic here
        const droppedItem = e.dataTransfer.getData("text/plain");
        console.log('Dropped item:', droppedItem);
        console.log('Dropped on tile:', props.tile);
    };

    return (
    <div className ={classes} key={props.tile} draggable 
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
    > 
    { (rank <= 2 || rank >= 7) &&
    <Piece 
    piece={props.piece} 
    id={props.tile}
    color={ rank > 6 ? "black" : "white"}

    /> }
    </div>
    );
}

export default Tile;
