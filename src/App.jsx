import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongMapper from './Components/DIsplayMusic/DisplayMusic';
import SearchBar from './Components/AddSongs/AddSong';

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

  function addNewSong(entry){
    let tempEntries = [...songs, entry];
    setSongs(tempEntries);
  }

  return (
    <div>
      <SongMapper parentEntries={songs} />
      <SearchBar addSongProperties={addNewSong} />
    
      <div>
        <button onClick={() => getAllSongs()}>Get All Songs</button>
      </div>
    </div>  
  );
}

export default App;
