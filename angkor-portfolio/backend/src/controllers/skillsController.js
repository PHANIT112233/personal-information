const db = require('../db');

exports.getSkills = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM skills ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addSkill = async (req, res) => {
  try {
    const { name, category, level } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });
    const [result] = await db.execute('INSERT INTO skills (name, category, level) VALUES (?,?,?)', [name, category || 'General', level || 50]);
    res.status(201).json({ id: result.insertId, name, category, level });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    await db.execute('DELETE FROM skills WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
