const express = requrie("express");
const PORT = process.env.PORT || 9000;
const app = express();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
