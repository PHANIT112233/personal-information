require('dotenv').config();

module.exports = {
  port: process.env.PORT || 4000,
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  },
  jwtSecret: process.env.JWT_SECRET,
  uploadsDir: process.env.UPLOADS_DIR || 'uploads'
};
