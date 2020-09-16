const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const express = require('express');
// var bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

const YOUR_DOMAIN = 'http://localhost:4242';

app.use(express.static('.'));
app.use(cors());
app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true}));

app.post('/create-session', async (req, res) => {
    console.log(req.body)
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: req.body.productName,
                        // images: ['https://i.imgur.com/EHyR2nP.png'],
                    },
                    unit_amount: parseInt(req.body.payableAmount) * 100,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: "https://thegeekylad.github.io/ecocart/#/success",
        cancel_url: "https://thegeekylad.github.io/ecocart/#/failure",
    });
    res.json({ id: session.id });
});
app.listen(4242, () => console.log('Running on port 4242'));