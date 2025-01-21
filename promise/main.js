const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
	response.send("안녕하세요.");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
