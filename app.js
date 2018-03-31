var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();
const port = 3000;
const route = require('./routes/route');
app.get('/',(req, res)=>{
    res.send('foobar');
})
//adding middleware
app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')))


//connect to mongodb
mongoose.connect('mongodb://localhost:27017/meanproject');
mongoose.connection.on('connected', (err)=>{
    if(err){
        console.log("Error in database connection  "+err);
    }
    console.log('Connected to Database with port no 27017');
    //console.log(mongoose.connection.collections());
})
app.use('/api', route);

app.listen(port, (req, res)=>{
    console.log('Server started at port: '+port);
})
