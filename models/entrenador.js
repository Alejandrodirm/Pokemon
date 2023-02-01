const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    nombre: String,
    tipo: String,
    ruta: String
})

//Creamos el modelo
const Entrenador = mongoose.model('entrenador', pokemonSchema, "entrenador");

module.exports = Entrenador;
