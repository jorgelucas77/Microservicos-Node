
import express from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//configurações de Rotas
app.use(usersRoute);
app.use(statusRoute);

//Inicialização do Servidor
app.listen(3000, () => {
    console.log('Aplicação a correr na porta 3000!');
});