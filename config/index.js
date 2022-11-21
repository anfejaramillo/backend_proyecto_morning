let dbUrl = "mongodb://localhost:27017/";
let PORT = process.env.PORT || 8080;
let dbName = "dbtest_morning";
let dbFullPath = dbUrl + dbName;
module.exports = {
    dbUrl,
    PORT,
    dbName,
    dbFullPath,
};
