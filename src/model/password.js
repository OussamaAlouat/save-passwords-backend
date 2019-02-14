import mongoose from 'mongoose';
import {Schema} from 'mongoose';


const PasswordSchema = Schema({

    user: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    updateDate :{
        type: Date,
        default: null
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

});
export default mongoose.model('Password', PasswordSchema);