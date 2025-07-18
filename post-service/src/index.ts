import express, {Request, Response} from "express"
import {randomBytes} from "crypto"
import bodyParser from "body-parser"
import cors from "cors"
import axios from "axios"

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {};

app.get('/posts', (req, res) => {
    return res.send(posts);
});

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    const post = {id, title};

    await axios.post('http://localhost:4005/events', {
        type: 'PostCreated',
        data: {id, title},
    });

    return res.status(201).send(post);
});

app.post('/events', (req, res) => {
    console.log('Event Received', req.body.type);

    return res.send({});
});

app.listen(4000, () => {
    console.log("Post service is running on port: 4000")
})