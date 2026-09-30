import mongoose from "mongoose";

const participanteSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'The name is required'],
            trim: true
        },
        alias: {
            type: String,
            trim: true
        },
        age: {
            type: Number,
            required: [true, 'The age is required']
        },
        phoneNumber: {
            type: String,
            required: [true, 'The phone number is required'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'The email is required'],
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please provide a valid email address']
        },
        route: {
            type: String,
            required: [true, 'The route is required'],
            enum: ['25km', '40km'],
            trim: true
        },
        image: {
            type: String,
            trim: true
        },
        number: {
            type: Number,
            unique: true
        },
        paymentStatus: {
            type: String,
            required: true,
            enum: ['pendiente', 'aprobado', 'rechazado'],
            default: 'pendiente',
            trim: true
        },
        mpPreferenceId: {
            type: String,
            trim: true
        },
        mpPagoId: {
            type: String,
            trim: true
        },
        inscritoDia: {
            type: Boolean,
            default: false
        }
    }, { timestamps: true }
);

const Participante = mongoose.model("Participante", participanteSchema);

export default Participante;