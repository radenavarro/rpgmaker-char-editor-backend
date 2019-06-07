const Sequelize = require('sequelize');
const Connect = require('../../config/sequelizeConf').getConnection();

const Eyes = Connect.define('eyes', {
    graphic: {
        type: Sequelize.STRING(200)
    },
    zindex: {
        type: Sequelize.INTEGER(1)
    }
});

module.exports = Eyes;