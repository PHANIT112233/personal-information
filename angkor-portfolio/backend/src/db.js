const config = require('./config');

const useMysql = config.db.client === 'mysql' || Boolean(config.db.host);

module.exports = useMysql ? require('./db-mysql') : require('./db-sqlite');
