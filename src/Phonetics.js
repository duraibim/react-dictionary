import React from "react";
import "./Phonetics.css"



export default function Phonetics(props){
        const audio = new Audio(props.phonetic.audio)

        function playSound() {
            audio.play();
        }

        return(
    
        <div className="Phonetics">
            <span onClick={playSound} >
                Listen  
            </span> 
            {props.phonetic.text} 


        </div>
    );
}