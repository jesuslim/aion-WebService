import dotenv from "dotenv";
import Server from "./models/server";

// configuramos dotenv
dotenv.config();
// inicializamos el servidor
const server = new Server();
// iniciamos el servidor
server.listen();
