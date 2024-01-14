const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

app.get("/user", (req, res) => {
  res.json({
    user: [
      {
        id: 1,
        nama: "fareladrianp",
        usia: "20",
      },
      {
        id: 2,
        nama: "akennn",
        usia: "23",
      },
      {
        id: 3,
        nama: "panjul",
        usia: "21",
      },
    ],
  });
});

app.listen(8000, () => console.log("server running PORT 8000"));
