const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Configuração do armazenamento de arquivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Definindo uma rota para o upload de imagens
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({ imageUrl: `/uploads/${req.file.filename}` });
});

// Servir arquivos estáticos (como imagens e o frontend)
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// Rodando o servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});