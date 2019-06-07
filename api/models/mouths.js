const Sequelize = require('sequelize');
const Connect = require('../../config/sequelizeConf').getConnection();

const Mouths = Connect.define('mouths', {
    graphic: {
        type: Sequelize.STRING(200)
    },
    zindex: {
        type: Sequelize.INTEGER(4)
    }
});

module.exports = Mouths;