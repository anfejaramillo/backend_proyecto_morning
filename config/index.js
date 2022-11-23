// let dbUrl = "mongodb://localhost:27017/";
// let PORT = process.env.PORT || 8080;
// let dbName = "dbtest_morning";
// let dbFullPath = dbUrl + dbName;
let dbUrl =
    "mongodb+srv://admin:admin123@micluster.hesmqcy.mongodb.net/?retryWrites=true&w=majority";
let PORT = process.env.PORT || 8080;
let dbName = "midbtest_morning";
let dbFullPath =
    "mongodb+srv://admin:admin123@micluster.hesmqcy.mongodb.net/" +
    dbName +
    "?retryWrites=true&w=majority";
module.exports = {
    dbUrl,
    PORT,
    dbName,
    dbFullPath,
};
