const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

// GET: List all persons
router.get("/", async (req, res) => {
  const people = await Person.find();
  res.render("index", { people });
});

// GET: Form to create a person
router.get("/new", (req, res) => {
  res.render("create");
});

// POST: Add new person
router.post("/", async (req, res) => {
  const { name, age, gender, mobile } = req.body;
  await Person.create({ name, age, gender, mobile });
  res.redirect("/person");
});

// GET: Edit form
router.get("/edit/:id", async (req, res) => {
  const person = await Person.findById(req.params.id);
  res.render("edit", { person });
});

// PUT: Update person
router.put("/:id", async (req, res) => {
  const { name, age, gender, mobile } = req.body;
  await Person.findByIdAndUpdate(req.params.id, { name, age, gender, mobile });
  res.redirect("/person");
});

// GET: Confirm delete
router.get("/delete/:id", async (req, res) => {
  const person = await Person.findById(req.params.id);
  res.render("delete", { person });
});

// DELETE: Delete person
router.delete("/:id", async (req, res) => {
  await Person.findByIdAndDelete(req.params.id);
  res.redirect("/person");
});

module.exports = router;
