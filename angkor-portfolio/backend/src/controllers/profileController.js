const db = require('../db');

exports.getPublicProfile = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM profile ORDER BY updated_at DESC LIMIT 1');
    if (rows.length === 0) return res.status(404).json({ error: 'Profile not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, position, email, phone, location, company, bio } = req.body;
    const avatar = req.file ? `/uploads/${req.file.filename}` : null;

    const [rows] = await db.execute('SELECT id, avatar FROM profile ORDER BY updated_at DESC LIMIT 1');
    
    if (rows.length === 0) {
      await db.execute(
        'INSERT INTO profile (name, position, email, phone, location, company, bio, avatar) VALUES (?,?,?,?,?,?,?,?)',
        [name, position, email, phone, location, company, bio, avatar || '/uploads/default-avatar.png']
      );
    } else {
      const id = rows[0].id;
      const newAvatar = avatar || rows[0].avatar;
      await db.execute(
        'UPDATE profile SET name=?, position=?, email=?, phone=?, location=?, company=?, bio=?, avatar=? WHERE id=?',
        [name, position, email, phone, location, company, bio, newAvatar, id]
      );
    }
    
    const [updated] = await db.execute('SELECT * FROM profile ORDER BY updated_at DESC LIMIT 1');
    res.json(updated[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.uploadCV = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    const cvUrl = `/uploads/${req.file.filename}`;
    
    const [rows] = await db.execute('SELECT id FROM profile ORDER BY updated_at DESC LIMIT 1');
    if (rows.length > 0) {
      await db.execute('UPDATE profile SET cv=? WHERE id=?', [cvUrl, rows[0].id]);
    }
    res.json({ url: cvUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
