const express = require("express");
const app = express();

const server = require("http").createServer(app);

const path = require("path");

// Set static folder
app.use(express.static("client/dist"));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
);

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
