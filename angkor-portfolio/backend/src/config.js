require('dotenv').config();
const path = require('path');

const backendRoot = path.resolve(__dirname, '..');
const appRoot = path.resolve(backendRoot, '..');

function resolveFromBackend(value, fallback) {
  const target = value || fallback;
  return path.isAbsolute(target) ? target : path.join(backendRoot, target);
}

module.exports = {
  port: process.env.PORT || 4000,
  backendRoot,
  appRoot,
  frontendDist: path.join(appRoot, 'frontend', 'dist'),
  db: {
    client: process.env.DB_CLIENT || '',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ssl: process.env.DB_SSL === 'true'
  },
  jwtSecret: process.env.JWT_SECRET || 'local-development-secret',
  uploadsDir: process.env.UPLOADS_DIR || 'uploads',
  uploadsPath: resolveFromBackend(process.env.UPLOADS_DIR, 'uploads')
};
