import { useState } from "react";
import styles from './SearchBar.module.css'
import { CgSearch } from "react-icons/cg";

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
                <input type="text" placeholder="Enter City" value={inputField} onChange={inputHandler} />
                <button type="submit"><CgSearch className={styles.searchIcon} /></button>
            </form>
        </div>
    )
}
