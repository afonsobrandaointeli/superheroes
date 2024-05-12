module.exports = {
  attributes: {
    name: { type: "string", required: true },
    type: { type: "string", required: true },

    // Add a reference to Hero
    owner: {
      model: "hero",
      required: true,
    },
  },
};
