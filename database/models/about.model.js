import { Schema, model, models } from 'mongoose';

const aboutSchema = new Schema({
    title: String,
    satisfiedClients: String,
    projectsCompleted: String,
    yearsOfExperience: String,
    biography: {
        type: Array
    },
    skills: {
        type: [
            {
                name: String,
                x: String,
                y: String
            }
        ]
    },
    experiences: {
        type: [
            {
                position: String,
                company: String,
                companyLink: String,
                time: String,
                address: String,
                work: String,
            }
        ]
    },
    educations: {
        type: [
            {
                type: String,
                time: String,
                place: String,
                info: String
            }
        ]
    }
});

const About = models.About || model('About', aboutSchema);

export default About;