import express from 'express';

const PORT = 5000;
const app = express();

app.get('/', (req, res) => {
    res.json({
        "Hello": "From Ankit"
    });
});

app.listen(PORT, () => {
    console.log(`Application is running on the port: ${PORT}`);
});