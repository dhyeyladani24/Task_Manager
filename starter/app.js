const express = require('express');
const app = express();
const tasks = require('./routes/task');
const PORT = 3000 ;
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.json());

//routes
app.get('/hello', (req,res) => {
    res.send('Task Manager App');
})

app.use('/api/v1/tasks', tasks);

const start = async ()=> {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT, console.log(`Server is listening on ${PORT}`));
    } catch (error) {
        console.log(err)
    }
}

start()