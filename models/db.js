
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Abhishekjoshi:Abhi-joshi@cluster0.nigye1j.mongodb.net/dynamic-web?retryWrites=true&w=majority")
.then(function(){
    console.log("database connected!")
})
.catch(function(error) {
    console.log(error.message)
});
