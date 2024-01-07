import express from 'express';

const app = express();
app.use(express.static('website'));
console.log("live");

app.listen(8080);