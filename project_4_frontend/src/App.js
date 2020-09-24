import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RMInfo from './components/RMInfo.js'

function App() {
  const [rm_infos, setInfos] = useState([])

  const getInfos = async () => {
    try {
      const response = await fetch('https://rick-and-mortyapi.herokuapp.com/rm_infos');
      const data = await response.json();
      setInfos(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(
    () => {
      (async function () {
        await getInfos();
      }
      )()
    },[])

  return (
    <div className="App">
      <header className="App-header">
        <RMInfo rm_infos={rm_infos} />
      </header>
    </div>
  );
}

export default App
