import express from "express";
import { createServer } from "node:http";
import dotenv from "dotenv";
import { Server } from "socket.io";

dotenv.config();

const app = express();

const server = createServer(app);

const PORT = process.env.PORT || 8000;

const io = new Server(server);

app.get("/test", (req, res) => {
  res.send("this is a test");
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/test`);
});
