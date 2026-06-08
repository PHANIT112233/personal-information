const db = require('../db');

exports.getExperiences = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM experiences ORDER BY created_at DESC');
    rows.forEach(r => r.items = JSON.parse(r.items));
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addExperience = async (req, res) => {
  try {
    const { title, company, period, color, badge, items } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });
    const itemsJson = JSON.stringify(items || []);
    const [result] = await db.execute('INSERT INTO experiences (title, company, period, color, badge, items) VALUES (?,?,?,?,?,?)', 
      [title, company || '', period || '', color || '#CD7F32', badge || '', itemsJson]);
    res.status(201).json({ id: result.insertId, title, company, period, color, badge, items });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    await db.execute('DELETE FROM experiences WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
