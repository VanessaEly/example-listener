import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import ejs from 'ejs';
import 'dotenv/config';

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.engine('html', ejs.renderFile);
app.set('views', `${__dirname}/../client`);

app.use(express.static(`${__dirname}/client`));

server.listen(port, () => {
  process.stdout.write(`
    Server running on port: ${port}`);
});

app.get('/', (req, res) => res.status(200).render('./src/index.html'));
