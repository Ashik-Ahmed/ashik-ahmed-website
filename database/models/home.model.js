import { Schema, model, models } from 'mongoose';

const homepageSchema = new Schema({
    title: String,
    description: String,
    resumeLink: String
});

const Homepage = models.Homepage || model('Homepage', homepageSchema);

export default Homepage;