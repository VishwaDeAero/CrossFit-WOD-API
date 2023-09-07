const express = require('express')

const app = express()
const port = process.env.PORT || 3000;

// Display
app.get('/', (req, res) => {
    res.send('CrossFit WOD ExpressJs API')
});

// Listen
app.listen(port, () => {
    console.log(`API app listening on port ${port}!`)
});