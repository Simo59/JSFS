
const options = {root:"public"}

module.exports.home =
(req, res) => res.sendFile('user/html',options);

module.exports.about =
  (req, res) => res.render('about');

module.exports.adminonly =
  (req, res) => res.render('adminonly');