const baseConfig = {
    host: process.env.AURORA_HOST,
    port: process.env.AURORA_PORT,
    database: process.env.AURORA_DB,
    username: process.env.AURORA_USER,
    password: process.env.AURORA_PASSWORD,
    logging: console.log,
    maxConcurrentQueries: 10,
    dialect: 'postgres',
    pool: { maxConnections: 1, maxIdleTime: 30 },
    language: 'en',
    dialectOptions: {
        connectTimeout: 3000,
    },
};

module.exports = {
    development: {
        schema: 'dev',
        ...baseConfig,
    },
    production: {
        schema: 'prod',
        ...baseConfig,
    },
};
