const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const num1 = Number(req.body.num1);
const num2 = Number(req.body.num2);
const myOBJ = {
  status: "",
  message: "",
};

if (isNaN(num1) || isNaN(num2)) {
  myOBJ.status = "error";
  myOBJ.message = "Invalid data types";
} else {
  app.post("/add", (req, res) => {
    // const myOBJ = {
    //   status: "",
    //   message: "",
    //   sum: 0,
    // };
    // const num1 = Number(req.body.num1);
    // const num2 = Number(req.body.num2);

    // if (isNaN(num1) || isNaN(num2)) {
    //   myOBJ.status = "error";
    //   myOBJ.message = "Invalid data types";
    // } else {
    const result = num1 + num2;
    if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
      myOBJ.status = "error";
      myOBJ.message = "Underflow";
    } else if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
      myOBJ.status = "error";
      myOBJ.message = "Overflow";
    } else {
      myOBJ.status = "success";
      myOBJ.message = "the sum of given two numbers";
      myOBJ.sum = result;
    }
    // }
    // res.send(myOBJ);
  });

  app.post("/sub", (req, res) => {
    // const myOBJ = {
    //   status: "",
    //   message: "",
    //   difference: 0,
    // };
    // const num1 = Number(req.body.num1);
    // const num2 = Number(req.body.num2);

    // if (isNaN(num1) || isNaN(num2)) {
    //   myOBJ.status = "error";
    //   myOBJ.message = "Invalid data types";
    // } else {
    const result = num1 - num2;
    if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
      myOBJ.status = "error";
      myOBJ.message = "Underflow";
    } else if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
      myOBJ.status = "error";
      myOBJ.message = "Overflow";
    } else {
      myOBJ.status = "success";
      myOBJ.message = "the difference of given two numbers";
      myOBJ.difference = result;
    }
    // }
    // res.send(myOBJ);
  });

  app.post("/multiply", (req, res) => {
    // const myOBJ = {
    //   status: "",
    //   message: "",
    //   result: 0,
    // };

    // const num1 = Number(req.body.num1);
    // const num2 = Number(req.body.num2);

    // if (isNaN(num1) || isNaN(num2)) {
    //   myOBJ.status = "error";
    //   myOBJ.message = "Invalid data types";
    // } else {
    const result = num1 * num2;
    if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
      myOBJ.status = "error";
      myOBJ.message = "Underflow";
    } else if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
      myOBJ.status = "error";
      myOBJ.message = "Overflow";
    } else {
      myOBJ.status = "success";
      myOBJ.message = "The product of given numbers";
      myOBJ.result = result;
    }
    // }
    // res.send(myOBJ);
  });

  app.post("/divide", (req, res) => {
    // const myOBJ = {
    //   status: "",
    //   message: "",
    //   result: 0,
    // };

    // const num1 = Number(req.body.num1);
    // const num2 = Number(req.body.num2);

    // if (isNaN(num1) || isNaN(num2)) {
    //   myOBJ.status = "error";
    //   myOBJ.message = "Invalid data types";
    // } else {
    if (num2 === 0) {
      myOBJ.status = "error";
      myOBJ.message = "Cannot divide by zero";
    } else {
      const result = num1 / num2;
      if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
        myOBJ.status = "error";
        myOBJ.message = "Underflow";
      } else if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
        myOBJ.status = "error";
        myOBJ.message = "Overflow";
      } else {
        myOBJ.status = "success";
        myOBJ.message = "The division of given numbers";
        myOBJ.result = result;
      }
    }
    // }
    // res.send(myOBJ);
  });
}
res.send(myOBJ);

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
