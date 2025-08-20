const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51RxiUA2Om1YmuXswgIohzsbAHmNEUewZs2YcgUSLRo1rXLoFuHIyfLDA4HuGb8nvQ098Zamn7H08QJ3WbaxOTjj900oBVeNTQ9");

// - API

// - APP Configurations
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API Routes
app.get('/', (req, res) => res.status(200).send("Hello World"));

// - Listen Commands
exports.api = functions.https.onRequest(app);