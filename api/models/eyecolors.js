const Sequelize = require('sequelize');
const Connect = require('../../config/sequelizeConf').getConnection();

const EyeColors = Connect.define('eyecolors', {
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

module.exports = EyeColors;