const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan"); // Importez Morgan
const pkmRouter = require("./router/PkmRouter");
const userRouter = require("./router/UserRouter");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;
const key = "mongodb+srv://Coco:DBKey@cluster0.expza.mongodb.net/?retryWrites=true&w=majority";

const mongoose = require('mongoose');
mongoose.connect(key, { useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());

// Utilisez Morgan pour la journalisation des requêtes HTTP
app.use(morgan("combined")); // Vous pouvez spécifier le format de journal souhaité

// Utilise Helmet pour sécuriser les en-têtes HTTP
app.use(helmet());

app.use("/pkm", pkmRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});
