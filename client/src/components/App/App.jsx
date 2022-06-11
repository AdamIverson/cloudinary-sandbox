import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "../Header/Header";
import Image from "../Image/Image";
import Sidenav from "../Sidenav/Sidenav";
import Test from "../Test/Test";
import 'dotenv/config';

function App() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);

  function callAPI() {
    console.log("in callAPI()");
    axios({
      method: "GET",
      url: "/api/test",
    })
      .then((response) => {
        console.log("response.data:", response.data);
        setTest(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <Test />      <Header />
      <Sidenav />
      <div className="imageComponent">
        <Image />
      </div>
    </div>
  );
}

export default App;
