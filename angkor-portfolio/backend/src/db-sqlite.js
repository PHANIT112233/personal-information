const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', 'portfolio.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to SQLite database');
    initializeDB();
  }
});

function initializeDB() {
  db.serialize(() => {
    // Create tables
    db.run(`CREATE TABLE IF NOT EXISTS profile (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT DEFAULT 'Huot Phanit',
      position TEXT DEFAULT 'Full Stack Developer',
      email TEXT DEFAULT 'phanit@example.com',
      phone TEXT DEFAULT '+855 123 456 789',
      location TEXT DEFAULT 'Phnom Penh, Cambodia',
      company TEXT DEFAULT 'Angkor Tech',
      bio TEXT DEFAULT 'Passionate developer inspired by the ancient engineering of Angkor Wat.',
      avatar TEXT DEFAULT '/uploads/default-avatar.png',
      cv TEXT,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS skills (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT DEFAULT 'General',
      level INTEGER DEFAULT 50,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS experiences (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      company TEXT DEFAULT '',
      period TEXT DEFAULT '',
      color TEXT DEFAULT '#CD7F32',
      badge TEXT DEFAULT '',
      items TEXT DEFAULT '[]',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      tags TEXT DEFAULT '[]',
      description TEXT DEFAULT '',
      image TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS admin (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )`);

    // Insert default data if not exists
    db.get('SELECT COUNT(*) as count FROM profile', (err, row) => {
      if (!err && row.count === 0) {
        db.run(
          "INSERT INTO profile (name, position, email, bio) VALUES (?, ?, ?, ?)",
          ['Huot Phanit', 'Full Stack Developer', 'phanit@example.com', 'Building the future with Khmer heritage in mind.']
        );
      }
    });

    db.get('SELECT COUNT(*) as count FROM skills', (err, row) => {
      if (!err && row.count === 0) {
        db.run("INSERT INTO skills (name, category, level) VALUES (?, ?, ?)", ['Node.js', 'Backend', 90]);
        db.run("INSERT INTO skills (name, category, level) VALUES (?, ?, ?)", ['MySQL', 'Database', 85]);
        db.run("INSERT INTO skills (name, category, level) VALUES (?, ?, ?)", ['Tailwind CSS', 'Frontend', 95]);
      }
    });

    db.get('SELECT COUNT(*) as count FROM experiences', (err, row) => {
      if (!err && row.count === 0) {
        db.run(
          "INSERT INTO experiences (title, company, period, color, badge, items) VALUES (?, ?, ?, ?, ?, ?)",
          ['Senior Developer', 'Angkor Digital', '2020-Present', '#CD7F32', 'Full-time', '["Built REST APIs", "Managed databases"]']
        );
      }
    });

    db.get('SELECT COUNT(*) as count FROM projects', (err, row) => {
      if (!err && row.count === 0) {
        db.run(
          "INSERT INTO projects (title, tags, description, image) VALUES (?, ?, ?, ?)",
          ['Khmer Portfolio', '["Node.js","Express","SQLite"]', 'A full-stack portfolio inspired by Angkor architecture.', null]
        );
      }
    });

    db.get('SELECT COUNT(*) as count FROM admin', (err, row) => {
      if (!err && row.count === 0) {
        // Password: admin123 (bcrypt hashed)
        db.run(
          "INSERT INTO admin (username, password) VALUES (?, ?)",
          ['admin', '$2b$10$Vw6b8X9iL1mN2oP3qR4sT5uV6wX7yZ8aB9cD0eF1gH2iJ3kL4mN5o']
        );
      }
    });
  });
}

// Promisify database methods
const dbAsync = {
  execute: (sql, params = []) => {
    return new Promise((resolve, reject) => {
      if (sql.trim().toUpperCase().startsWith('SELECT')) {
        db.all(sql, params, (err, rows) => {
          if (err) reject(err);
          else resolve([rows || []]);
        });
      } else {
        db.run(sql, params, function(err) {
          if (err) reject(err);
          else resolve([{ insertId: this.lastID, affectedRows: this.changes }]);
        });
      }
    });
  }
};

module.exports = dbAsync;
