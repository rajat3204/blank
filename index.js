const mongoose = require("mongoose");
const express = require("express");

const app = express();
let PORT = 8080;
let dbconnect;
async function dbConnect() {
  try {
    let dnconn = await mongoose.connect(
      "mongodb://admin:pass@82.197.162.53:27017/rajat?authSource=admin",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    console.log("Database connected");
    dbconnect = true;
  } catch (err) {
    console.log("error", err);
    dbconnect = false;
  }
}

app.get("/", (req, res) => {
  res.status(200).json({
    message: dbconnect,
  });
});

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`sever is running on the port:${PORT}`);
});
