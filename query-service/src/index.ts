import express, {Request, Response} from "express"
import bodyParser from "body-parser"
import axios from "axios"
import cors from "cors"

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/posts', (req, res) => {
    return res.send([]);
});

app.post('/events', (req, res) => {;
    return res.send({});
});

app.listen(4002, async () => {
    console.log('Listening on 4002');

    const res = await axios.get('http://localhost:4005/events');

    for (let event of res.data) {
        console.log('Processing event:', event.type);
    }
});