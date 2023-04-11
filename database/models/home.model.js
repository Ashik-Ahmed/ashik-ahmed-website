import { Schema, model, models } from 'mongoose';

const homeSchema = new Schema({
    title: String,
    description: String,
    resumeLink: String
});

const Home = models.Home || model('Home', homeSchema);

export default Home;