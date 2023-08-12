
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = ['https://final-fullstackproject.onrender.com/'];

app.use(cors({
  origin: allowedOrigins,
}));
app.use(express.json());

// const uri = process.env.ATLAS_URI;
const uri = "mongodb+srv://tannazetminan:te123456@cluster0.cyebpcn.mongodb.net/Booklist";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true   }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


// import routes
const bookRouter = require('./routes/activities');

// adding /books to before all routes
app.use('/activity', bookRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
