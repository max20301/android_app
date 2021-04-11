const express = require("express");
const app = express();
const port = 8888;

app.get("/", (req, res) => {
	res.json({"body":"Hello World!"});
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
