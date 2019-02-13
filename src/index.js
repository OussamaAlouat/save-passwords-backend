import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

//Init the app server
const app = express();

//MIDDLEWARES
app.use(bodyParser());
app.use(cors());


app.listen(process.env.PORT || 3000, () => {
    const listeningPort = process.env.PORT || 3000;
    console.log('Server listening on port ' + listeningPort);
});

export {app}