import axios from "axios";
import React, { useState } from "react";

function Header() {
  const [world, setWorld] = useState([]);

  function getWorld() {
    axios({
      method: "GET",
      url: "/api/upload",
    })
      .then((response) => {
        console.log("response.data:", response.data);
        setWorld(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>adam iverson photography</h1>
      <button onClick={getWorld}>UPLOAD BUTTON</button>
      <div>{`${world}`}</div>
    </div>
  );
}

export default Header;
