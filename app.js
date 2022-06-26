const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 80;

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5500'
}));


const studentRouter = require('./students.js');
app.use('/students', studentRouter);



app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).send(err.message)
});

app.listen(PORT, () => {
    console.log(`Server is now listening on port ${PORT}`);
});