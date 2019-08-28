// SPELLS ROUTER
// ==============================

// IMPORT FROM MODULES
const express = require("express")
const spellModel = require("../models/spells-model")

// ROUTE METHEODS
const spellRouter = express.Router()

spellRouter.route("/")
    .get((req, res) => {
        spellModel.find(req.query, (err, foundSpell) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            return res.send(foundSpell);
        })
    })
    .post((req, res) => {
        let spell = new spellModel(req.body)
        spell.save((err, savedSpell) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            } else {
                console.log("Spell successfully added to the database");
                return res.send(savedSpell);
            }
        })
    })

// EXPORT MODULE
module.exports = spellRouter 
