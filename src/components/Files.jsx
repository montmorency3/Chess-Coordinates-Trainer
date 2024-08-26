import React from "react";
import './Files.css';

function Files(props){
    function numToChar(num){
        return String.fromCharCode(num + 97);
    }
    return (
        <div className="files"> 
            {props.files.map( (rank => {
                return <span key={numToChar(rank)}> {numToChar(rank)} </span>
            }))}
        </div>
    )
}
export default Files