import path from "path"
import express from "express"
import app from "./src/api/api.js"



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at http://localhost:${5000}`));
app.use('/static', express.static('public'));