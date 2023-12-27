require("dotenv").config();
const express = require("express");
const dbConnection = require("./db/dbConnection");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(express.json());

// method 1
// app.use(cors()); // default value is * means every req can access server

// method 2: Custom Origins
app.use(
  cors({
    origin: "https://book-management-system-dev.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"],
  })
);

// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

dbConnection(() => {
  app.listen(port, () => {
    console.log("Listening to port", port);
  });
});

app.get("/", (req, res) => {
  res.send("Welcome");
});

// routes
app.use("/api/books", require("./routes/books"));
