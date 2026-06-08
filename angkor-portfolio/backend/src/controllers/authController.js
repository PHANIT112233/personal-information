const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');
const config = require('../config');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const [rows] = await db.execute('SELECT * FROM admin WHERE username = ?', [username]);
    
    if (rows.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

    const validPass = await bcrypt.compare(password, rows[0].password);
    if (!validPass) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: rows[0].id, username: rows[0].username }, config.jwtSecret, { expiresIn: '2h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
