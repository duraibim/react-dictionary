import React, {useState} from "react";
import Results from "./Results";
import axios from "axios";
import './Dictionary.css';




export default function Dictionary(){
    let [keyword, setKeyword] = useState("moon");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response){
        setResults(response.data[0]);
    }
    
    function search(){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }


    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();
    }
    
    if (loaded){
        return (
            <div className="Dictionary"> 
            <section>
                <h1>What word do you want to look up?</h1>
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeywordChange}
                    defaultValue={keyword}
                    />
                </form>
            </section>
            <Results results={results}/>
            </div>
            );
    } else {
        load();
        return "Loading.."
    }
   
}