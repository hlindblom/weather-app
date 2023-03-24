import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';
import router from './routes/index.js';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3000;

app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', router);

app.get('/', (req, res) => {
    res.redirect('/api');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(PORT, () => {
    console.log(
        '\n\n',
        chalk.bgBlue('SERVER STATUS:'),
        chalk.green(` we're up and running!\n`),
        chalk.bgGreen(`PORT:`),
        chalk.cyan(' ', PORT)
    );
});
