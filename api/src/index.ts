import app from "./app.js";
const port = 3000;

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});