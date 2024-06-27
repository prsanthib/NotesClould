const connectToMongo = require('./db');
const express = require('express')
const path = require('path');

const cors = require('cors');


connectToMongo();
const app = express()
const port = 2000

app.use(express.json())
app.use(cors())


// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// Serve static files from the React app

app.use(express.static(path.join(__dirname, '../build')));

// Serve the React app for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`iNotebook app listening at http://localhost:${port}`)
})