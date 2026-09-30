import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const adminSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'The email is required'],
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, 'The password is required']
        }
    }
) 

adminSchema.pre('save', async function(next) {
   if (!this.isModified('password')) return next(); 

   try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();

   } catch (error) {
    next(error);
   }
})

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;