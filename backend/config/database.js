const mongoose = require("mongoose");

db_url="mongodb+srv://justinajodis:justinajodis@cluster0.yiu8tfg.mongodb.net/MIU?retryWrites=true&w=majority"
const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://justinajodis:Ii4XwULXzO2FDpBU@cluster0.yiu8tfg.mongodb.net/MIU?retryWrites=true&w=majority")
    .then((data) => {
      console.log(`MONGO CONNECTED :\n${data.connection.host}`);
    });
};

module.exports = connectDatabase;


    
       