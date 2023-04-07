import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());


const porta = process.env.PORT || 3005;
app.listen(porta, () => console.log('Server is running'));