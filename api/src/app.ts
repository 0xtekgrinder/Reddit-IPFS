import express from 'express';
import * as fs from "fs";
import swaggerUi from 'swagger-ui-express';
import subsRouter from './routes/subs.routes.js';
import postRouter from './routes/post.routes.js';
import commentRouter from './routes/comment.routes.js';

const swaggerDocument = JSON.parse(fs.readFileSync('./docs.json', 'utf8'));
const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(subsRouter);

app.use(postRouter);

app.use(commentRouter);

export default app;