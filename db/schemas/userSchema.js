//cargar mongoose
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let model = mongoose.model;
//Definition of schema
let schemaDefinition = {
    firstName: {
        type: String,
        required: true,
    },
    email: String,
    username: String,
    password: String,
    address: {
        calle: String,
        carrera: String,
        codigoPostal: Number,
        pais: {
            codigo: String,
            nombre: String,
        },
    },
};
// Object of schema
const userSchema = new Schema(schemaDefinition);
// Model creation
let UserModel = mongoose.model("usuario", userSchema);

async function createUser(user) {
    try {
        //definicion de modelo
        let newUser = new UserModel();
        //llenado del modelo
        newUser.firstName = user.firstName;
        newUser.email = user.email;
        newUser.password = user.password;
        newUser.username = user.username;
        //guardado del modelo
        let result = await newUser.save();
        return result;
    } catch (ex) {
        console.log(ex);
        return {};
    }
}
async function findUserById(id) {
    try {
        let cursor = UserModel.findById(id).cursor();
        let user = await cursor.next();
        return user;
    } catch (ex) {
        console.log(ex);
        return {};
    }
}
async function deleteUser(id) {
    try {
        let result = await UserModel.findByIdAndRemove(id).exec();
        return result;
    } catch (ex) {
        console.log(ex);
        return {};
    }
}
async function getAllUsers() {
    try {
        //definicion de modelo
        let filter = {};
        let cursor = UserModel.find(filter).cursor();
        let result = [];
        let currentUser = await cursor.next();
        while (currentUser != null) {
            result.push(currentUser);
            currentUser = await cursor.next();
        }
        return result;
    } catch (ex) {
        console.log(ex);
        return {};
    }
}

module.exports = {
    userSchema,
    UserModel,
    createUser,
    findUserById,
    deleteUser,
    getAllUsers,
};
