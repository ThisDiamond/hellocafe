import express, { Express } from "express";

const app: Express = express();








const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server ${PORT} da ishga tushdi `))