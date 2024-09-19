const express = require('express');
const app = express();
const tasks = require('./routes/task');
const PORT = 3000 ;

//middleware
app.use(express.json());

//routes
app.get('/hello', (req,res) => {
    res.send('Task Manager App');
})

app.use('/api/v1/tasks', tasks);

app.listen(PORT, console.log(`Server is listening on ${PORT}`));