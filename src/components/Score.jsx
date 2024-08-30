import "./Score.css"


import React from "react";

function Score(props){

    const className = (props.isCorrect ? '' : 'shake wrong-answer') + " score";
    const animationKey = Date.now() 
    console.log(className)


    return (
        <div 
        className={className}
        key={animationKey}
        > 
            {props.score}
        </div>
    );
}

export default Score;