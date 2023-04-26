import { Schema, model, models } from 'mongoose';

const educationSchema = new Schema({
    certificate: {
        type: String,
        time: String,
        place: String,
        info: String
    }
});

const Certificate = models?.Certificate || model('Certificate', educationSchema);

export default Certificate;