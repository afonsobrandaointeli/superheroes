module.exports = {
  create: async function (req, res) {
    try {
      const gun = await Gun.create(req.body).fetch();
      return res.json(gun);
    } catch (err) {
      return res.serverError(err);
    }
  },
};
