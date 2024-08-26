import React, {useRef} from "react";
import { faChessRook as rook} from '@fortawesome/free-solid-svg-icons'
import { faChessPawn as pawn} from '@fortawesome/free-solid-svg-icons'
import { faChessKnight as knight} from '@fortawesome/free-solid-svg-icons'
import { faChessQueen as queen} from '@fortawesome/free-solid-svg-icons'
import { faChessBishop as bishop} from '@fortawesome/free-solid-svg-icons'
import { faChessKing as king} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Piece.css";



function Piece(props){
    const pieceMap = {
        "rook": rook,
        "pawn": pawn,
        "bishop": bishop,
        "queen" : queen,
        "king" : king,
        "knight" : knight
      };

    const pieceRef = useRef(null); 



    function handleDragStart(e){
        setTimeout( () => {
            e.target.style.display="none"
        },0)
        const data = JSON.stringify({ id: e.target.id, color: e.target.dataset.color, droppedPiece: e.target.dataset.piece});
        e.dataTransfer.setData('text/plain', data);
    }

    function handleDragEnd(e){
        console.log("completed")
        pieceRef.current.style.display = "blocked";

    }

    function handleDragOver(e){
        e.preventDefault();
    }

    function handleDrop(e){
        e.preventDefault();

    }

    return (
    <div 
    className="piece" 
    key={props.tile} 
    id={props.tile}
    data-color={props.color}
    data-piece={props.piece}
    draggable={true}
    onDragStart={handleDragStart}
    onDragOver={handleDragOver}
    onDrop={handleDrop}
    onDragEnd={handleDragEnd}

    >
        <div style={{   pointerEvents: 'none'}}>
        {props.piece !== null &&<FontAwesomeIcon icon={pieceMap[props.piece]} style={{ zIndex: -2 }}size="3x" className={props.color}/> }
        </div>
        </div>
    );
}

export default Piece;