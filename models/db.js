
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mranal2906:mranal123456@cluster0.ivgtt9a.mongodb.net/DYNMIC?retryWrites=true&w=majority")
.then(function(){
    console.log("database connected!")
})
.catch(function(error) {
    console.log(error.message)
});
