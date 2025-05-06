const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database'); // conexão com o banco
const pessoaRoutes = require('./routes/pessoas'); // rotas

// 🔧 Inicializar o app EXPRESS
const app = express();

// 🧩 Middlewares
app.use(cors());
app.use(express.json());

// 📦 Rotas
app.use('/pessoas', pessoaRoutes);

// 🔄 Sincronizar banco e iniciar servidor
sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado!');
    app.listen(3001, () => {
      console.log('Servidor rodando na porta 3001');
    });
  })
  .catch(err => {
    console.error('Erro ao conectar no banco de dados:', err);
  });
