const express = require('express');
const cors    = require('cors');
const app = express();

const authRoutes = require('./routes/auth');

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log('BE rodando na porta 3000');
})