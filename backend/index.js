const express = require("express");
const app = express();
const PORT = 4000;

// 拦截器
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const http = require("http").Server(app);
// const cors = require("cors"); // 不要跨域会怎么样？
// app.use(cors());

const socket = require("socket.io");
const socketIO = socket(http, {
//   cors: {
//     origin: "http://localhost:3000",
//   },
});

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on("disconnect", () => {
    socket.disconnect();
    console.log("🔥: A user disconnected");
  });

  socket.on("message", (data) => {
    console.log("🚀: data", data);
  });
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

http.listen(PORT, () => {
  console.log(`listening on *: ${PORT}`);
});
