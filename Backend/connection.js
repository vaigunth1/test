const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect('mongodb+srv://vaigunth1:vaigu1125@cluster0.zedjtrz.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
