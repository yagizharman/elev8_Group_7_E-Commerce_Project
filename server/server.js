const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require ("dotenv"). config();
const bodyParser = require("body-parser");
app.use(bodyParser. json ()) ;
app. use (bodyParser.urlencoded ({ extended: true }));
const port = process. env. PORT;
const Stripe = require("stripe") (process.env. STRIPE_SECRET_KEY);


app.get("/", (reg, res) => {
res. send ("Hello World!");
});

app.post ("/pay", async (reg, res) => {
	console. Log (req. body. token) ;
	await Stripe.charges.create({
	source: req. body. token. id,
	amount: req. body. amount,
	currency: "usd",
	});
	});

app. Listen(port, () => {
console. log(`Server is running on Port ${port}`);
});