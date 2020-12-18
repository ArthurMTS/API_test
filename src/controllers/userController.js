const { destroy } = require('../config/database');
const connection = require('../config/database');

module.exports = {
  async show (req, res) {
    const users = await connection('users').select('*');

    res.json(users);
  },

  async index (req, res) {
    const { id } = req.params;

    const [user] = await connection('users').select('*').where('id', id);

    res.json(user);
  },

  async store (req, res) {
    const data = req.body;

    const [user] = await connection('users').insert(data);

    res.sendStatus(200).json(user);
  },

  async update (req, res) {
    const { id } = req.params;
    const data = req.body;

    await connection('users').update(data).where('id', id);

    res.sendStatus(200).json();
  },

  async destroy (req, res) {
    const { id } = req.params;

    await connection('users').delete().where('id', id);

    res.sendStatus(200).json();
  }
}