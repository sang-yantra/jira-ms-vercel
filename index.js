import app from "./src/api/api.js"

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log("Server is running...", PORT));