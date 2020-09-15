import React, { useState } from "react";
import axios from "axios";

function List() {
  //state for all restaurant data
  const [allRestaurants, setState] = useState("");

  //get all data
  async function getAllData() {
    console.log("getAllData here!");

    //開発環境ではlocalURLをfetchしても良い
    // const req = axios.get("https://localhost:9000/api/restaurants");
    //本番環境ではfetchするURL(データ）はインターネットから取る必要がある。
    //URLを手に入れるにはHerokuにてデプロイが完了している必要がある。
    const req = axios.get(
      "https://cc14solomvpproject-app.herokuapp.com/api/restaurants"
    );
    const res = await req;
    const data = res.data;
    console.log(data[0]);
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
