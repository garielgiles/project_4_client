import React, { useState, useEffect } from "react";
import axios from "axios";
import RMInfo from "./components/RMInfo.js";

function App() {
  const [rm_infos, setInfos] = useState([]);
  const [formInputs, updateFormInputs] = useState({
    name: "",
    dimension: "",
    content: "",
  });

  const getInfos = async () => {
    try {
      const response = await fetch(
        "https://rick-and-mortyapi.herokuapp.com/rm_infos"
      );
      const data = await response.json();
      setInfos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async function () {
      await getInfos();
    })();
  }, []);

  const handleChange = (event) => {
    const updatedFormInputs = Object.assign({}, formInputs, {
      [event.target.id]: event.target.value,
    });
    updateFormInputs(updatedFormInputs);
  };

  const handleSubmit = async (event) => {
    
    try {
      const response = await axios.post(
        "https://rick-and-mortyapi.herokuapp.com/rm_infos",
        formInputs
      );
      const createdInfo = response.data;
      await updateFormInputs({
        name: "",
        dimension: "",
        content: "",
      });
      await setInfos([createdInfo, ...rm_infos]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <h4>Post a New Character</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Character</label>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              value={formInputs.name}
            />
            <label htmlFor="dimension">Dimension</label>
            <input
              type="text"
              id="dimension"
              onChange={handleChange}
              value={formInputs.dimension}
            />
            <label htmlFor="content">Content</label>
            <input
              type="text"
              id="content"
              onChange={handleChange}
              value={formInputs.content}
            />
            <input type="submit" className="submit" />
          </form>
        </nav>
        <main>
          <RMInfo rm_infos={rm_infos} />
        </main>
      </header>
    </div>
  );
}

export default App;
