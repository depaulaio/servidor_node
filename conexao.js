const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('teste_sequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'usuario', // Nome da tabela no banco
    timestamps: false // Se não usar timestamps, pode definir como false
});

async function criarUsuario() {
    try {
        await Usuario.create({
            nome: 'Caio',
            email: 'caio@mail.com',
            senha: '1234'
        });
        console.log('Usuário criado com sucesso!');
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
    }
}

criarUsuario();
