import express from 'express';
import cors from 'cors';
import router from './Router';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router)

const porta = process.env.PORT || 3005;
app.listen(porta, () => console.log('Server is running'));