/* eslint-disable no-undef */
//this is for server testing
const button = document.getElementById("testButtonForServer");
button.addEventListener("click", allRestaurants);

async function allRestaurants() {
  console.log("I'm in allRestaurants func!");
  let req = axios.get("http://localhost:9000/api/restaurants");
  let res = await req;
  let data = res.data;
  console.log(data);

  const stage = document.getElementById("testForServer");
  stage.innerText = data[0].name;
}
