import React, { useState } from "react";
import axios from "axios";

function List() {
  //state for all restaurant data
  const [allRestaurants, setState] = useState("");

  //get all data
  async function getAllData() {
    console.log("getAllData here!");

    const req = axios.get("http://localhost:9000/api/restaurants");

    const res = await req;
    const data = res.data;
    console.log(data);
    setState(data[0].name);
  }

  return (
    <>
      <p>List here!</p>
      <button id="testBtn" onClick={getAllData}>
        click
      </button>
      <p>{allRestaurants}</p>
    </>
  );
}

export default List;
