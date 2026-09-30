import mongoose from "mongoose";

const staffSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'The name is required'],
            trim: true
        },
        image: {
            type: String,
            required: [true, 'The image is required'],
            trim: true
        },
        rol: {
            type: String,
            required: [true, 'The rol is required'],
            trim: true
        },
        isActive: {
            type: Boolean,
            default: true
        }
    }
)

const Staff = mongoose.model('Staff', staffSchema);

export default Staff;