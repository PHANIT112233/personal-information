CREATE TABLE IF NOT EXISTS profile (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) DEFAULT 'Huot Phanit',
  position VARCHAR(255) DEFAULT 'Full Stack Developer',
  email VARCHAR(255) DEFAULT 'phanit@example.com',
  phone VARCHAR(50) DEFAULT '+855 123 456 789',
  location VARCHAR(255) DEFAULT 'Phnom Penh, Cambodia',
  company VARCHAR(255) DEFAULT 'Angkor Tech',
  bio TEXT DEFAULT 'Passionate developer inspired by the ancient engineering of Angkor Wat.',
  avatar VARCHAR(255) DEFAULT '/uploads/default-avatar.png',
  cv VARCHAR(255) DEFAULT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) DEFAULT 'General',
  level INT DEFAULT 50,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS experiences (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  company VARCHAR(255) DEFAULT '',
  period VARCHAR(100) DEFAULT '',
  color VARCHAR(50) DEFAULT '#CD7F32',
  badge VARCHAR(100) DEFAULT '',
  items TEXT DEFAULT '[]',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  tags TEXT DEFAULT '[]',
  description TEXT DEFAULT '',
  image VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS admin (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

INSERT INTO profile (name, position, email, bio) VALUES ('Huot Phanit', 'Full Stack Developer', 'phanit@example.com', 'Building the future with Khmer heritage in mind.');
INSERT INTO skills (name, category, level) VALUES ('Node.js', 'Backend', 90), ('MySQL', 'Database', 85), ('Tailwind CSS', 'Frontend', 95);
INSERT INTO experiences (title, company, period, color, badge, items) VALUES ('Senior Developer', 'Angkor Digital', '2020-Present', '#CD7F32', 'Full-time', '["Built REST APIs", "Managed MySQL databases"]');
INSERT INTO projects (title, tags, description, image) VALUES ('Khmer Portfolio', '["Node.js","Express","MySQL"]', 'A full-stack portfolio inspired by Angkor architecture.', NULL);

-- Default admin password: admin123
INSERT INTO admin (username, password) VALUES ('admin', '$2b$10$Vw6b8X9iL1mN2oP3qR4sT5uV6wX7yZ8aB9cD0eF1gH2iJ3kL4mN5o');
