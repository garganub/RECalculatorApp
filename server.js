const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname));  // Serve static files

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
  const propertyType = req.body['property-type'];
  const propertySize = req.body['property-size'];
  const propertyPrice = req.body['property-price'];
  const downPayment = req.body['down-payment'];
  const interestRate = req.body['interest-rate'];
  const closingCosts = req.body['closing-costs'];
  const insurance = req.body['insurance'];
  const taxes = req.body['taxes'];
  const maintenanceCosts = req.body['maintenance-costs'];
  const propertyManagementFee = req.body['property-management-fee'];
  const hoaDues = req.body['hoa-dues'];
  const realtorFee = req.body['realtor-fee'];
  const otherFees = req.body['other-fees'];
  const expectedReturn = req.body['expected-return'];
  const riskTolerance = req.body['risk-tolerance'];
  const timeHorizon = req.body['time-horizon'];
  const regulatoryRequirements = req.body['regulatory-requirements'];
  const fundingSource = req.body['funding-source'];

  // Calculate returns based on input fields
  const monthlyInvestment = propertyPrice - downPayment;
  const monthlyReturn = (monthlyInvestment * (interestRate / 12)) / 100;
  const totalReturn = monthlyReturn * 12;
  const annualReturn = totalReturn + (totalReturn * (closingCosts / 12));

  // Return results as JSON
  res.json({
    propertyType,
    propertySize,
    propertyPrice,
    downPayment,
    interestRate,
    closingCosts,
    insurance,
    taxes,
    maintenanceCosts,
    propertyManagementFee,
    hoaDues,
    realtorFee,
    otherFees,
    expectedReturn,
    riskTolerance,
    timeHorizon,
    regulatoryRequirements,
    fundingSource,
    monthlyInvestment,
    monthlyReturn,
    totalReturn,
    annualReturn
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});