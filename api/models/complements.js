const Sequelize = require('sequelize');
const Connect = require('../../config/sequelizeConf').getConnection();

const Complements = Connect.define('complements', {
    graphic: {
        type: Sequelize.STRING(200)
    },
    zindex: {
        type: Sequelize.INTEGER(4)
    }
});

module.exports = Complements;