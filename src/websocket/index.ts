import { Server } from "socket.io";

const io = new Server(9001, {});
if (io) {
  console.log("[*] Socket.io started at: http://localhost:9001");
}
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
