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
        <ul>
          {test.data?.map((item) => {
            return (<li key={item.id}></li>)
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
