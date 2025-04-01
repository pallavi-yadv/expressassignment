const express = require("express");
const app = express();
const port = 3000;

//routes
//root url
app.get("/", (req, res) => {
    res.send(`Welcome to the Express.js Server!`)
})

//about
app.get('/about', (req, res) => {
    res.send("This is a simple web server built using Express.js.");
});

//contact
app.get('/contact', (req, res) => {
    res.send(`
{
"email": "student@example.com",
"phone": "123-456-7890"
}
`);
});


// Random number route
app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.send(`Random Number: ${randomNumber}`);
});

// 404 Error Handler - Default Route for Undefined Paths
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});


app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port} `)
})