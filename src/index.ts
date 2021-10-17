
import express from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//configurações de Rotas
app.use(usersRoute);
app.use(statusRoute);

//configurações dos Handlers
app.use(errorHandler);

//Inicialização do Servidor
app.listen(3000, () => {
    console.log('Aplicação a correr na porta 3000!');
});