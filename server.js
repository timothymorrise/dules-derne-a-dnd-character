/// SERVER FILE

// IMPORT FROM PACKAGES
const express = require("express")
const app = express();

// PORT VALUE
const port = 8080;

// .get AND .listen
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})