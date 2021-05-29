import express from "express";
import cors from "cors";
const app = express();

app.use(
    cors({
        origin: "http://localhost:8080"
    })
)

app.get("/message", (req, res) => {
    res.status(200).json({
        message: "Bryan"
    });
});

app.listen(3000, () => {
    console.log("Server is running on port: 3000");
});