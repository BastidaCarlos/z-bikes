import mongoose from "mongoose";

const staffSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'The name is required'],
            trim: true
        },
        image: {
            url: {
                type: String,
                required: [true, 'The image is required'],
                trim: true
            },
            public_id: { 
                type: String, 
                required: true,
                trim: true 
            }
        },
        nickname: {
            type: String,
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