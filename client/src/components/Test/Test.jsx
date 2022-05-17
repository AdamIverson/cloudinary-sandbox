import React, { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [test, setTest] = useState([]);

//   useEffect(() => {
//     console.log('in useEffect')
//     call();
// }, []);

  function call() {
    axios({
      method: "GET",
      url: "/api",
    })
      .then((response) => {
        setTest(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <button onClick={call}>Button</button>
      <ul>
        {test?.map((item) => {
          return (<li>item.testData</li>);
        })}
      </ul>
    </div>
  );
}

export default Test;