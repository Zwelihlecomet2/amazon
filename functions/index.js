const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51RxiUA2Om1YmuXswgIohzsbAHmNEUewZs2YcgUSLRo1rXLoFuHIyfLDA4HuGb8nvQ098Zamn7H08QJ3WbaxOTjj900oBVeNTQ9"
);

// - API

// - APP Configurations
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request recieved ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //If Created
  res.status(201).send({clientSecret: paymentIntent.client_secret});

  // if (!total || total < 0) {
  //   return response.status(400).send({ error: "Invalid total amount" });
  // }

  // try {
  //   const paymentIntens = await stripe.paymentIntenss.create({
  //     amount: parseInt(total), // Convert to integer
  //     currency: "usd",
  //   });

  //   response.status(201).send({
  //     clientSecret: paymentIntens.client_secret,
  //   });
  // } catch (error) {
  //   console.error("Stripe Error:", error);
  //   response.status(500).send({ error: error.message });
  // }
});

// - Listen Commands
exports.api = functions.https.onRequest(app);
