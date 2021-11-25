import { TextField, Button } from "@mui/material";
import { useState } from "react";
import styles from './search.module.css';
import axios from 'axios';

function Search({handleSearch}) {
    const [user, setUser] = useState("");

    const searchUser = (e) => {
        e.preventDefault();

        let items = [];

        console.log(user);

        axios({
            url: `https://api.github.com/search/users?q=${user}&per_page=20`,
            method: 'get'
        })
        .then(res => {
            let temp = res.data;
            items = temp.items;
            console.log(items);
            handleSearch([...items]);
        })
        .catch(err => {
            console.log("Error:", err);
        })
    }
    return (
        <div className = {styles.search}>
            <form onSubmit = {searchUser}>
                <div  className = {styles.searchForm}>
                <TextField onChange = {(e) => {setUser(e.target.value)}}  sx = {{color: 'white'}} variant = "outlined" placeholder = "Enter GitHub Username..."/>
                <Button type = "submit" variant = "contained" disableElevation>Search</Button>
                </div>
            </form>
        </div>
    )
}

export default Search;