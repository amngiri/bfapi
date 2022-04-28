const express = require('express')
const app = express()
app.use(express.json());
const port = 3000

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const numbers = []
    const alphabets = []
    if (data && data.length > 0) {
        data.forEach(e => {
            if (isNaN(e)) {
                alphabets.push(e)
            }
            else {
                numbers.push(e)
            }
        });
    }


    const response = {
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers: numbers,
        alphabets: alphabets
    }

    console.log(response)
    res.json(response)
})

app.listen(port, () => {
    console.log(`BFAPI listening on port ${port}`)
})