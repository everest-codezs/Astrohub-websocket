const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log("Received:", message);
    ws.send("Server says: " + message);
  });

  ws.send("Hello! Welcome to the WebSocket server.");
});

console.log("WebSocket server running on ws://localhost:8080");
