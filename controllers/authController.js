const pool = require('../models/database');
const bcrypt = require('bcrypt');

exports.registrar = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const senhaHash = await bcrypt.hash(senha, 10);

        await pool.query(
            'INSERT INTO usuarios (nome, email, senha_hash) VALUES ($1, $2, $3)',
            [nome, email, senhaHash]
        );
        res.status(201).send('Usuário registrado com sucesso');
    } catch {
        res.status(500).send('Falha ao registrar usuário');
    }
}