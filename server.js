const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3500;

app.get(["/", "/index{.html}"], (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page{.html}", (req, res) => {
    res.redirect(301, "/new-page.html");
});

const one = (req, res, next) => {
    console.log("One then ...");
    next();
};

const two = (req, res, next) => {
    console.log("Two then ...");
    next();
};

const three = (req, res, next) => {
    console.log("Three!");
    next();
};

app.get("/chain{.html}", [one, two, three], (req, res) => {
    res.send("Chaining done.");
});

app.get("/{*splat}", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
