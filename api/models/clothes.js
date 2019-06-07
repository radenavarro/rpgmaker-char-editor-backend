const Sequelize = require('sequelize');
const Connect = require('../../config/sequelizeConf').getConnection();

const Clothes = Connect.define('clothes', {
    graphic: {
        type: Sequelize.STRING(200)
    },
    zindex: {
        type: Sequelize.INTEGER(4)
    }
});

module.exports = Clothes;