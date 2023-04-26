import { Schema, model, models } from 'mongoose';

const projectSchema = new Schema({
    type: String,
    projects: {
        type: [
            {
                title: String,
                summary: String,
                img: String,
                link: String,
                githubClient: String,
                githubServer: String
            }
        ]
    }
});

const Projects = models?.Projects || model('Projects', projectSchema);

export default Projects;