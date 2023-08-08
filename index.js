const express = require("express");
const db = require("./connect");
const bookschema = require("./Schema");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to home page");
  
});

app.post("/booksdetails", async (req, res) => {
  console.log(req.body);
  await bookschema.create(req.body);
  res.status(200).send("books details received");
});

app.delete("/booksdetails/delete/:id", async (req, res) => {
    console.log(req.params.id);
    await bookschema.findByIdAndDelete(req.params.id);
    res.status(200).send("books details deleted");
})
app.patch("/booksdetails/update/:id", async (req, res) =>{
    console.log(req.params.id)
    await bookschema.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).send("book details updated")
})

app.listen(8090, () => {
  console.log("listening on port 8090");
  db();
});
