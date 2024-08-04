const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect('mongodb+srv://ArwinRolant:Godfather514@cluster0.daxgwvt.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
