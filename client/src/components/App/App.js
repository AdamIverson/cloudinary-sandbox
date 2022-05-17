import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [test, setTest] = React.useState([]);

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
        console.log('response:', response);
        setTest(response.data[0].testData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{!test ? "Loading..." : test}</p>
      </header>
    </div>
  );
}

export default App;
