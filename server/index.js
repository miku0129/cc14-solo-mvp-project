console.log("hello I'm index.js!");
const { setupServer } = require("./app");
const app = setupServer();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
