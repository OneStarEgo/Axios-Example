import React from 'react';
import { useState } from 'react';

const SearchBar = (props) => {


    const [searchTerm, setSearchTerm] = useState('');


function searchMusic(event) {
    event.preventDefault();
    let response = props.songs.filter((song) => {
        if (song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.release_date.includes(searchTerm) ||
        song.genre.toLowerCase().includes(searchTerm.toLowerCase())){
            return true;
        }
    });
    props.setSongs(response)
}


    return (
        <form onSubmit={searchMusic}>
            <input type='text' placeholder="search music library" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchBar;