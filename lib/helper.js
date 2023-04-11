import About from "../database/models/about.model";
import Homepage from "../database/models/home.model"
import Projects from "../database/models/project.model";

export const getHomepageData = async () => {
    const homepageData = await Homepage.find({})
    return homepageData;
}

export const getAboutPageData = async () => {
    const aboutPageData = await About.find({})
    console.log('data:', aboutPageData);
    return aboutPageData;
}

export const getProjectPageData = async () => {
    const projectPageData = await Projects.find({})
    return projectPageData;
}