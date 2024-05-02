import express from "express";
import { fileURLToPath } from 'url';
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the directory for your views
app.set("views", path.join(__dirname, "views"));

// Middleware setup
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000;

// Start server
app.listen(PORT, () => {
    console.log('Server is running at', PORT);
});

// Example route rendering index.ejs
app.get('/', (req, res) => {
    res.render('index');
});


app.get('/about', (req, res) => {
    res.render('about');
});
