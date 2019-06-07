const Sequelize = require('sequelize');
const Connect = require('../../config/sequelizeConf').getConnection();

const Eyebrows = Connect.define('eyebrows', {
    graphic: {
        type: Sequelize.STRING(200)
    },
    zindex: {
        type: Sequelize.INTEGER(4)
    }
});

module.exports = Eyebrows;