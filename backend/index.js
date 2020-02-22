import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes/testRoutes';

const app = express();
const PORT = 5000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/testDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// body-parser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// cors setup
app.use(cors());

routes(app);

app.get('/', (req, res) => res.send(`Node application is running on port ${PORT}`))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

