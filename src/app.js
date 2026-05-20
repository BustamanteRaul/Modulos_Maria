require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const routes = require("./routes");

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"], // múltiples orígenes permitidos
    credentials: true,
  }),
);

app.use(
  session({
    secret: "secretkey123",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 48,
      sameSite: "lax",
    },
  }),
);

app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
