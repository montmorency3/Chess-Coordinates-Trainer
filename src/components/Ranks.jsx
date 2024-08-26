import React from "react";
import './Ranks.css'


function Ranks(props){

    const ranks = [...props.ranks].reverse();

    function numToRank(num){
        return num + 1
    }
    return (
        <div className="ranks"> 
            {ranks.map( (rank) => {
                return <span key={numToRank(rank)}> {numToRank(rank)} </span>
            })
            }
        </div>
    )

}

export default Ranks