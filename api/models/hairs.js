const Sequelize = require('sequelize');
const Connect = require('../../config/sequelizeConf').getConnection();

const Hairs = Connect.define('hairs', {
    graphic: {
        type: Sequelize.STRING(200)
    },
    zindex: {
        type: Sequelize.INTEGER(1)
    }
});

module.exports = Hairs;