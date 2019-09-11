const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const path = require('path');
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use('/view', express.static(path.join(__dirname, 'public')));
app.post('/getMovies', (req, res) => {
    console.log('here');
    console.log(req.body.queryResult.parameters.any);
    let respose = movies[req.body.queryResult.parameters.any];

    if (respose)
        io.emit('message', { movies: respose.join(',') });
    else
        io.emit('message', 'Nothing to respond, try something else');
});

io.on('connection', function (socket) {
    console.log('a user connected');
});

http.listen(process.env.PORT, function () {
    console.log('listening on ',process.env.PORT);
});


var movies = {
    'popular': ['IT chapter 2', 'Around the world in 80 Days', 'Blue is the warmest color', 'Mother', 'Mission Impossible', 'Catch me if you can'],
    'rated': ['Fifty shades of grey', 'Max steel', 'Witcher', 'Jobs', 'X-Men', 'Avengers', 'Iron Man']
}
// app.listen(3000);