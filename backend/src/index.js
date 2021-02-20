const express = require ('express')
const mongoose = require ('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://Senha123:Senha123@omnistack10.b8vto.mongodb.net/Omnistack10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 

app.use(express.json());
app.use(routes);

app.listen(3333, console.log('rodando'));