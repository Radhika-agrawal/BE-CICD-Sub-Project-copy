import express from "express"
import sub from "./sub.js"

function handleRequest(req, res){
  const {a, b} = req.body
  res.json({result: sub(a, b)});
}

const server = express();

server.use(express.json());

server.use(express.static('public'));

server.post("/sub", handleRequest)

function listenServer()  {
  console.log("Server running at PORT: 4000");
}

server.listen(4000, listenServer);