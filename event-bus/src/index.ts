import express, {Request, Response} from "express"
import {randomBytes} from "crypto"
import bodyParser from "body-parser"
import axios from "axios"

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
    const event = req.body;

    axios.post('http://localhost:4000/events', event);
    axios.post('http://localhost:4001/events', event);
    axios.post('http://localhost:4002/events', event);
    axios.post('http://localhost:4003/events', event);

    return res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
    res.send([]);
});

app.listen(4005, () => {
    console.log('Event bus is running on port: 4005');
});