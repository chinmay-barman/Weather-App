import { useState } from "react";

export default function SearchBar({setCity}){
    const [inputField, setInputField] = useState("");
    function inputHandler(e){
        setInputField(e.target.value);
    }
    function search(e){
        e.preventDefault();
        setCity(inputField);
        setInputField("");
    }
    return(
        <form onSubmit={search}>
            <input type="text" value={inputField} onChange={inputHandler} />
            <button type="submit">Search</button>
        </form>
    )
}