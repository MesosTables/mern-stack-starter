import express from 'express';
import bodyParser from 'body-parser';

var app = express();
app.use(bodyParser.json());
const root = `${__dirname}/public`;
app.use(express.static(root));

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
