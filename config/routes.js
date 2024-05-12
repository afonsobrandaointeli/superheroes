module.exports.routes = {
  // Views
  "/": { view: "pages/homepage" },
  "GET /addhero": { view: "pages/addhero" },
  "GET /addgun": { view: "pages/addgun" },
  "GET /herogun": { view: "pages/herogun" },

  // API
  "GET /heroes": "HeroesController.list",
  "GET /heroesandguns": "HeroesController.listwithgun",
  "POST /heroes": "HeroesController.create",
  "POST /gun": "GunsController.create",
};
