import mongoose from "mongoose";

const bicycleSchema = new mongoose.Schema(
    {
        owner: {
            type: String,
            required: [true, "El nombre es requerido"]
        },
        phone: {
            type: String,
            required: [true, "EL número es requerido"]
        },
        brand: {
            type: String,
            required: [true, "La marca es requerida"]
        },
        model: {
            type: String,
            required: [true, "El modelo es requerido"]
        },
        color: {
            type: String,
            required: [true, "El color es requerido"]
        },
        type: {
            type: String,
            enum: ['MTB', 'Ruta', "Gravel"]
        },
        serialNumber: {
            type: String,
            required: [true, "El número de serie es requerido"],
            unique: true
        },
        images: [
            {
                url: {
                    type: String,
                    required: true
                },
                public_id: {
                    type: String,
                    required: true
                }
            }
        ],
        notes: {
            type: String,
            maxLength: 400,
        }
    }, { timestamps: true } 
);

const Bicicleta = mongoose.model("Bicileta", bicycleSchema);

export default Bicicleta;