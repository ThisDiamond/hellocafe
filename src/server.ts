import express, { Express } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import morgan from "morgan";

const app: Express = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req,res) => {
    res.send('hello world')
})


const PORT = process.env.PORT || 8080
httpServer.listen(PORT, () => console.log(`Server ${PORT} da ishga tushdi`))