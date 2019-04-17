const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser'); 
const logger = require('morgan');
const User = require('./Schemas/User');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute = "mongodb://localhost:27017/newdb";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  User.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our get method
// this method fetches all available data in our database
// router.post("/getData", (req, res) => {  
//   const { postemail, postpassword } = req.body;
  
//   User.find({email: postemail, password: postpassword}, (err, data) => { 
//     console.log("server"+data)   
//     // console.log("server res "+res.data)   
//     if (err) return res.json({ success: false, error: err });
//     res.json({ success: true, data: data });  
//     });
//   }); 

// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  const { email, password } = req.body;
  User.findOneAndUpdate(email, password, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { email, password } = req.body;  
  User.findOneAndDelete({email: email}, {password: password}, err => {    
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post("/putData", (req, res) => {
  let user = new User();

  const { postemail, postpassword } = req.body;  
  if (!postemail || !postpassword) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  } 
  user.password = postpassword;
  user.email = postemail;
  user.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use("/", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));