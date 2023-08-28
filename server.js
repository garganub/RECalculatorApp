const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));  // Serve static files

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
    const purchasePrice = parseFloat(req.body.purchase_price);
    const downPayment = parseFloat(req.body.down_payment);
    const monthlyRent = parseFloat(req.body.monthly_rent);
    // ... get other form data ...

    // Validation
    if (isNaN(purchasePrice) || isNaN(downPayment) || isNaN(monthlyRent)) {
        return res.send('Invalid input. Please ensure all fields are filled correctly.');
    }

    const annualRentalIncome = monthlyRent * 12;
    const totalInvestment = purchasePrice + downPayment;
    const roi = (annualRentalIncome / totalInvestment) * 100;

    res.send(`ROI: ${roi.toFixed(2)}%`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
