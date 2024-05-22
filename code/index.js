import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Convert the URL to a path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the static files from the Vite build directory
app.use(express.static(path.join(__dirname, "dist")));

// Handle SPA routing by returning the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

// Heroku dynamically assigns a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
