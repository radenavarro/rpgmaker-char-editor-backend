const Sequelize = require('sequelize');
const Connect = require('../../config/sequelizeConf').getConnection();

const EyebrowsColors = Connect.define('eyebrowscolors', {
    idHair: {
        type: Sequelize.INTEGER(4)
    },
    name: {
        type: Sequelize.STRING(100)
    },
    graphic: {
        type: Sequelize.STRING(200)
    }
});

module.exports = EyebrowsColors;