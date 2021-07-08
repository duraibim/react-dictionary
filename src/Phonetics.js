import React from "react";
import "./Phonetics.css"



export default function Phonetics(props){
        const audio = new Audio(props.phonetic.audio)

        function playSound() {
            audio.play();
        }

        return(
    
        <div className="Phonetics">
            <a href="#" onClick={playSound} >
                Listen
            </a> 
            {props.phonetic.text}


        </div>
    );
}