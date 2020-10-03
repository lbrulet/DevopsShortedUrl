const { Sequelize, sequelize } = require('./index');

class ShortUrl extends Sequelize.Model {}

ShortUrl.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    created_at: {
        type: Sequelize.DATE(),
    },
    alias: {
        type: Sequelize.STRING(50),
    },
    url: {
        type: Sequelize.STRING(1000),
    }
}, {
    sequelize,
    schema: sequelize.options.schema,
    tableName: 'short_url',
    createdAt: 'created_at',
    updatedAt: false,
});

module.exports = ShortUrl;
