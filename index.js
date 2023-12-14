const express = require('express');
const path = require('path');
const app = express();
const { Pool } = require('pg');

require('dotenv').config();

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.set('view engine', 'ejs');

// reuse the same database pool for connection pooling
// configuration is supplied in .env file
const db = new Pool(); 

app.get('/', async (_req, res) => {
	try {
		await db.connect();
		let values = await client.query("SELECT * FROM products;");
		res.render('index', values);
		await db.disconnect();
	} catch(e) {
		res.status(500).send(e);
	}
});

app.listen(3000, () => {
	console.log('running on port 3000');
});


