import express, { Request, Response } from 'express';
import config from './config';

const app = express();

app.use(express.static('dist'));

app.get('*', (req: Request, res: Response) => {
    res.sendFile('/index.html');
});

app.listen(config.port, () => {
    console.log(`App is listneing on port ${config.port}`);
});