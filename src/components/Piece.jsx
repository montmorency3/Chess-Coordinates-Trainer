import React, {useState} from "react";
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

      const [piece, setPiece] = useState(props.piece);

      const handleDragStart = (e) => {
        console.log("dragging started")
    };

    return (
    <div className="piece" key={props.tile} draggable droppable onDragStart={handleDragStart}>
        {props.piece !== null &&<FontAwesomeIcon icon={pieceMap[props.piece]} size="3x" className={props.color}/> }
        </div>
    );
}

export default Piece;