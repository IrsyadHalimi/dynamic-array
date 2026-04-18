/** Express application setup */
import express from 'express';
import arrayRoutes from './routes/array.route';

const app = express();
app.use(express.json());

app.use('/api/array', arrayRoutes);

export default app;