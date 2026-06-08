const db = require('../db');

exports.getProjects = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM projects ORDER BY created_at DESC');
    rows.forEach(r => r.tags = JSON.parse(r.tags));
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addProject = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });
    
    let parsedTags = [];
    try { parsedTags = JSON.parse(tags); } catch { parsedTags = tags ? tags.split(',') : []; }
    
    const image = req.file ? `/uploads/${req.file.filename}` : null;
    const tagsJson = JSON.stringify(parsedTags);
    
    const [result] = await db.execute('INSERT INTO projects (title, tags, description, image) VALUES (?,?,?,?)', 
      [title, tagsJson, description || '', image]);
      
    res.status(201).json({ id: result.insertId, title, tags: parsedTags, description, image });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await db.execute('DELETE FROM projects WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
