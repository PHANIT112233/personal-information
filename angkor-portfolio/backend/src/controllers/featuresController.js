const db = require('../db');

exports.getFeatures = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM features ORDER BY order_index ASC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addFeature = async (req, res) => {
  try {
    const { title, description, icon, order_index } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });
    const [result] = await db.execute(
      'INSERT INTO features (title, description, icon, order_index) VALUES (?,?,?,?)',
      [title, description || '', icon || '⭐', order_index || 0]
    );
    res.status(201).json({ id: result.insertId, title, description, icon, order_index });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateFeature = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, icon, order_index } = req.body;
    await db.execute(
      'UPDATE features SET title=?, description=?, icon=?, order_index=? WHERE id=?',
      [title, description, icon, order_index, id]
    );
    res.json({ id, title, description, icon, order_index });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteFeature = async (req, res) => {
  try {
    await db.execute('DELETE FROM features WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
