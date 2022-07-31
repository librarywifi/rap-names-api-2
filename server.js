const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "tobi lou": {
    age: 33,
    birthName: "Tobi Adeyemi",
    birthLocation: "Lagos, Nigeria",
  },
  "gloc 9": {
    age: 44,
    birthName: "Aristotle Pollisco",
    birthLocation: "Binangonan, Philippines",
  },
  "mac miller": {
    age: 26,
    birthName: "Malcolm James McCormick",
    birthLocation: "Pittsburgh, PA",
  },
  dylan: {
    age: "young",
    birthName: "dylan",
    birthLocation: "mars",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (req, res) => {
  const rappersName = req.params.rapperName.toLowerCase();
  //   res.json(rappers);

  if (rappers[rappersName]) {
    res.json(rappers[rappersName]);
  } else {
    res.json(rappers["dylan"]);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
