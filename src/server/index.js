const express = require('express');
const app = express();

const PORT = process.env.port || 3231;



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
