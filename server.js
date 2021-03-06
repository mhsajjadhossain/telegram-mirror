const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5080;
// custom modules
const channels = require('./routes/api/channels');
const db = require('./config/keys').mongoURI;
// DB Config
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('Database is connected');
})
.catch(err=>console.log(err));


// body parser middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// use routes
app.use('/api/channels',channels)




app.listen(port,()=> console.log(`Server is running on https://127.0.0.1:${port}`))
