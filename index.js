import cors from "cors";
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
app.use(cors());

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("play", () => {
    console.log("play");
    socket.broadcast.emit("play");
  });
  socket.on("play_1", () => {
    console.log("play_1");
    socket.broadcast.emit("play_1");
  });
  socket.on("play_2", () => {
    console.log("play_2");
    socket.broadcast.emit("play_2");
  });
  socket.on("play_3", () => {
    console.log("play_3");
    socket.broadcast.emit("play_3");
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(5050, () => console.log("server is running on port 5050"));
