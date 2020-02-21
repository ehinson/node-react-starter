import express from 'express'

const app = express();
const PORT = 5000;

app.get('/', (req, res) => res.send(`Node application is running on port ${PORT}`))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

