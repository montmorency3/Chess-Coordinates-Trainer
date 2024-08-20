import React from "react";
import './Files.css';

function Files(props){
    return (
        <div className="files"> 
            {props.files.map( (rank => {
                return <span key={rank}> {rank} </span>
            }))}
        </div>
    )
}

export default Files