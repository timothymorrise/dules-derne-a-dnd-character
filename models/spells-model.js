// SPELLS MODEL
// ======================-=======

// IMPORT FROM MODULES
const mongoose = require("mongoose")

// SCHEMA
const spellSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        level: {
            type: Number,
            required: true
        },
        school: {
            type: String,
            required: true
        },
        castingTime: {
            type: String, 
            required: true
        },
        range: {
            type: String,
            required: true
        },
        components: {
             somatic: Boolean,
             verbal: Boolean,
             material: Boolean,
             listedMaterialComponents: String
        },
        duration: {
            type: String,
            required: true
        },
        attackSave: {
            type: String
        }
})

// EXPORTS
module.exports = mongoose.Model("Spell", spellSchema)