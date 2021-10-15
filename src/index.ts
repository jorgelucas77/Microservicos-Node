
import express, { Request, Response, NextFunction} from 'express';

const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Sucesso! Vocês são de mais!!'});
});

app.listen(3000, () => {
    console.log('Aplicação a correr na porta 3000!');
});