import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Nav from "../Nav/Nav";

function App() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);

  function callAPI() {
    console.log('in callAPI()');
    axios({
      method: "GET",
      url: "/api/test",
    })
      .then((response) => {
        console.log('response.data:', response.data);
        setTest(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
