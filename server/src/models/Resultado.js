import mongoose from "mongoose";

const resultadoSchema = new mongoose.Schema(
    {
        number: {
            type: Number,
            required: [true, "Invalid number, the number doesn't match"]
        },
        name: {
            type: String,
            trim: true
        },
        route: {
            type: String,
            enum: ['25km', '40km'],
            trim: true
        },
        age: {
            type: Number
        },
        time: {
            type: String,
            required: [true, 'The time string is require'],
            trim: true
        },
        position: {
            type: Number,
            required: [true, 'The race position is required']
        },
        edition: {
            type: Number,
            default: new Date().getFullYear()
        }
    }, { timestamps: true }
)

const Resultado = mongoose.model("Resultado", resultadoSchema);

export default Resultado;