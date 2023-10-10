const User = require('../models/user.model').model;

module.exports.home = (_, res) => res.redirect('/user.html');

module.exports.me = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.status(200).json({ name: user.name, id: user.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur lors de la récupération de l\'utilisateur' });
  }
}

module.exports.update = async (req, res) => {
  try {
    const updatedData = { ...req.body };
    const user = await User.findByIdAndUpdate(req.userId, updatedData, { new: true });
    res.status(200).json({ name: user.name, message: 'succes' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur lors de la mise à jour de l\'utilisateur' });
  }
}
