const Sequelize = require('sequelize');
const Connect = require('../../config/sequelizeConf').getConnection();

const Noses = Connect.define('noses', {
    graphic: {
        type: Sequelize.STRING(200)
    },
    zindex: {
        type: Sequelize.INTEGER(1)
    }
});

module.exports = Noses;