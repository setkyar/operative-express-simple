const express = require("express");
const app = express();
const port = 3000;

// Handle GET request at the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});