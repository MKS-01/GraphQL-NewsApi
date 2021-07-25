const mongoose = require("mongoose");
const { Bookmark } = require("./Bookmark");
const { CONNECTIONSTRING } = require("../../../config");

const ConnectDB = async () => {
  
  await mongoose.connect(process.env.CONNECTIONSTRING || CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};

module.exports = {
  Bookmark,
  ConnectDB,
};
