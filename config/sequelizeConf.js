const Sequelize = require('sequelize');
const ConnConfig = require('../config');

/**
 * Configuración de BD con sequelize
 */
class SequelizeConf{
    // Static ->  no hay que instanciar el objeto
    static getConnection(){
        return new Sequelize(ConnConfig.configBD.database, ConnConfig.configBD.user, ConnConfig.configBD.password, {
            host: ConnConfig.configBD.host,
            dialect: ConnConfig.configBD.dialect,
            port: ConnConfig.configBD.port,
            pool: {
                max: 5,
                min: 1,
                idle: 10000
            }
        });
    }
}

module.exports = SequelizeConf;