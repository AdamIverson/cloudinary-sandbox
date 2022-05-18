import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function App() {
  const [test, setTest] = useState([]);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setTest(data.message));
  // }, []);

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
      <header className="App-header">
        <ul>
          {test.map((item) => {
            return (<li key={item.id}>{`${item.testData}`}</li>)
          })}
        </ul>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
