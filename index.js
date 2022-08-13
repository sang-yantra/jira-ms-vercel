import path from "path"
import express from "express"
import app from "./src/api/api.js"

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log("Server is running...", PORT));
app.use('/static', express.static('public'));