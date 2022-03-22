const { DataTypes } = require("sequelize");

const { sequelize } = require("../db/connection");



// here we're not defining a schema and then a model
const Movie = sequelize.define(
    "Movie", { 
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }, 
        actor: {
            type: DataTypes.STRING,
            defaultValue: "Not specified",
        },
        director: {
            type: DataTypes.STRING,
            defaultValue: "Not specified",
        },
});



module.exports = Movie;