const db = require('../config/db');

class Product {
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM products ORDER BY created_at DESC');
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(productData) {
    const { name, price, description } = productData;
    const [result] = await db.query(
      'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
      [name, price, description]
    );
    return result.insertId;
  }

  static async update(id, productData) {
    const { name, price, description } = productData;
    const [result] = await db.query(
      'UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?',
      [name, price, description, id]
    );
    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM products WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = Product;