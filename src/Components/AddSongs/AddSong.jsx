import React, { useState } from 'react';


const AddSong = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        };
        console.log(newEntry)
        props.addSongProperties(newEntry)
    }

    return (
        <form className='addSongForm' onSubmit={handleSubmit}>
            <label className='titleLabel'>Title</label>
            <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} />
            <br />
            <label className='artistLabel'>Artist</label>
            <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)} />
            <br />
            <label className='albumLabel'>Album</label>
            <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)} />
            <br />
            <label className='releaseDateLabel'>Release Date</label>
            <input type='text' value={release_date} onChange={(event) => setReleaseDate(event.target.value)} />
            <br />
            <label className='genreLabel'>Genre</label>
            <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)} />
            <br />
            <button type='submit'>Post New Song</button>
        </form>
     );
}
 
export default AddSong;