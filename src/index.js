import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import db from './db';
import configuration from './config';
import routes from './routes';

//Init the app server
const app = express();



//MIDLEWARES
app.use(bodyParser());
app.use(cors());

app.use('/', routes())
//CONFIG ---------------
const config = configuration(app);

//DATABASE CONNECTION
db.connect(config);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = Error('Not Found');
    err.status = 404;
    next(err);
});

// catch 500 internal sever error
app.use((err, req, res, next) => {
    res.status(err.status || 500).json(err);
});

app.listen(process.env.PORT || config.port, () => {
    const listeningPort = process.env.PORT || config.port;
    console.log('Server listening on port ' + listeningPort);
});

export {app}