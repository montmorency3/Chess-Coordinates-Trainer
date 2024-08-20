import React from "react";
import './Ranks.css'


function Ranks(props){
    return (
        <div className="ranks"> 
            {props.ranks.map( (rank) => {
                return <span key={rank}> {rank} </span>
            })
            }
        </div>
    )

}

export default Ranks