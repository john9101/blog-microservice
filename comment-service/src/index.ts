import express, {Request, Response} from "express"
import {randomBytes} from "crypto"
import bodyParser from "body-parser"
import axios from "axios"

const app = express()
app.use(bodyParser.json())

app.get('/posts/:id/comments', (req, res) => {
    return res.send([]);
});

app.post('/posts/:id/comments', async (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = [];

    comments.push({
        id: commentId,
        content,
        status: 'pending',
    });

    await axios.post('http://localhost:4005/events', {
        type: 'CommentCreated',
        data: {
            id: commentId,
            content,
            postId: req.params.id,
            status: 'pending',
        },
    });

    return res.status(201).send(comments);
});

app.post('/events', async (req, res) => {
    console.log('Event Received', req.body.type);

    const { type, data } = req.body;

    return res.send({});
});


app.listen(4001, () => {
    console.log("Comment service is running on port: 4001")
})