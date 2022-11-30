import ProjectModel from "../models/Project.js";

export const projectCreate = async(req, res) => {
    try {  
        const doc = new ProjectModel({
            title: req.body.title,
            user: req.userId,
            description: req.body.description,
        });
        const project = await doc.save();
        res.json(project);
    } catch (err) {
        console.log(err);
        res.status(500).json({
          message: 'Не удалось создать проект',
        });
      }
    };
export const myProject = async(req, res) => {
    try {
        const projects = await ProjectModel.find().populate('user').exec();
        res.json(projects);
    } catch (error) {
        console.log(err);
        res.status(500).json({
        message: 'Не удалось получить статьи',});
    };
};