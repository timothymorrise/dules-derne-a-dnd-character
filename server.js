/// SERVER FILE
//===============================

/////////////////////////
// IMPORT FROM MODULES //
/////////////////////////
// NODE PACKAGES
const express = require("express")
const app = express();
const mongoose = require("mongoose")
//// ROUTES
const spellRouter = require("./routes/spells-router")    

/////////////////////////
// CONNECT-TO-DATABASE //
/////////////////////////
mongoose.connect("mongodb://localhost:27017/dules-derne", (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
})

////////////////////////////////////
// APPLY MIDDLEWARE AND/OR ROUTES //
////////////////////////////////////
app.use("/spells", spellsRouter) 

////////////////
// PORT VALUE //
////////////////
const port = 8080;

/////////////////////
// CONNECT TO PORT //
/////////////////////
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})