import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongMapper from './Components/DIsplayMusic/DisplayMusic';
import AddSong from './Components/AddSongs/AddSong';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
    console.log('Songs Retrieved');
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data)
  }

  async function postNewSong(songs){
    const response = await axios.post('http://127.0.0.1:8000/api/music/',  songs);
    console.log(response.data)
    // setSongs(response.data);
    getAllSongs()
  };

  return (
    <div className='flex-container'>
      <header>
        <h1>Music Library</h1>
        </header>

      <nav>
        <div className='searchBarContainer'><SearchBar songs={songs} setSongs={setSongs}/></div>
        <div className='getButton'><button onClick={() => getAllSongs()}>Get All Songs</button></div>
        <div className='addSongContainer'><AddSong addSongProperties={postNewSong}/></div>
      </nav>

      <body>
        <div><SongMapper parentEntries={songs} /></div>
      </body>
    </div>
  );
}

export default App;
