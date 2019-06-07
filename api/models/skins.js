const Sequelize = require('sequelize');
const Connect = require('../../config/sequelizeConf').getConnection();

const Skins = Connect.define('skins', {
    graphic: {
        type: Sequelize.STRING(200)
    },
    zindex: {
        type: Sequelize.INTEGER(4)
    }
});

module.exports = Skins;