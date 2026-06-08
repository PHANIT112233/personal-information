const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const config = require('./config');

// Initialize the configured database.
const db = require('./db');

const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const skillsRoutes = require('./routes/skillsRoutes');
const experiencesRoutes = require('./routes/experiencesRoutes');
const projectsRoutes = require('./routes/projectsRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(config.uploadsPath));

app.use('/api/auth', authRoutes);
app.use('/api', profileRoutes);
app.use('/api', skillsRoutes);
app.use('/api', experiencesRoutes);
app.use('/api', projectsRoutes);
app.get('/api/health', async (req, res) => {
  try {
    await db.execute('SELECT 1');
    res.json({ ok: true, database: true });
  } catch (error) {
    res.status(500).json({ ok: false, database: false, error: error.message });
  }
});

if (fs.existsSync(config.frontendDist)) {
  app.use(express.static(config.frontendDist));
  app.get('*', (req, res) => {
    res.sendFile(path.join(config.frontendDist, 'index.html'));
  });
}

if (require.main === module) {
  app.listen(config.port, () => {
    console.log(`Angkor Portfolio API running on port ${config.port}`);
  });
}

module.exports = app;
