
import express from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//configurações de Rotas
app.use(statusRoute);
app.use(authorizationRoute);

app.use(jwtAuthenticationMiddleware);
app.use(usersRoute);

//configurações dos Handlers
app.use(errorHandler);

//Inicialização do Servidor
app.listen(3000, () => {
    console.log('Aplicação a correr na porta 3000!');
});