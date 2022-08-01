const express = require(`express`);   
const cors = require(`cors`);      
const allroutes = require('./routes/ContactRoute');
const morganMonitor = require('morgan');
const user = require('./routes/accountRoutes');
const bodyParser = require('body-parser'); 
const login = require('./routes/newloginroutes');
const API_PORT = process.env.PORT || 5000;  
const app = express();   

app.use(cors());                         


app.use(morganMonitor('tiny'));

app.use(bodyParser.urlencoded({ extended: true,}) ); 
app.use(bodyParser.json());

app.use(allroutes);
app.use('/user',user)
app.use('/usernew',login);

app.listen(API_PORT, ()=> { console.log(`LISTENING on port ${API_PORT}`) });
