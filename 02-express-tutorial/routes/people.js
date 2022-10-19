const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

router.get("/", getPeople);

router.post("/");

router.post("/postman");

router.put("/:id");

router.delete("/:id");

module.exports = router;
