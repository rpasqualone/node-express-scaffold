import express from 'express';
import http from 'http';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
});

http.createServer(app).listen(3000, (err) => { if (err) throw err; });
