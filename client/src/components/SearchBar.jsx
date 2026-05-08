import { useState } from "react";
import styles from './SearchBar.module.css'
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
        <div className={styles.searchBar}>
            <form onSubmit={search}>
                <input type="text" value={inputField} onChange={inputHandler} />
                <button type="submit">S</button>
            </form>
        </div>
    )
}