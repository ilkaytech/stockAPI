"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Stock Management API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/Token:

const Token = require("../controllers/token");

// URL: /Tokens

router.route("/").get(Token.list).post(Token.create);

router
  .route("/:id")
  .get(Token.read)
  .put(Token.update)
  .patch(Token.update)
  .delete(Token.delete);

/* ------------------------------------------------------- */
module.exports = router;
