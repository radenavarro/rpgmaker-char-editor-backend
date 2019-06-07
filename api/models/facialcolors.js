const Sequelize = require('sequelize');
const Connect = require('../../config/sequelizeConf').getConnection();

const FacialColors = Connect.define('facialcolors', {
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

module.exports = FacialColors;