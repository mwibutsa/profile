import model from "../models";

const { project: ProjectModel, projectStack: ProjectStacksModel } = model;

export default class UserProject {
  getProjectById = async (req, res) => {
    const { id } = req.params;
    const project = await ProjectModel.findOne({
      where: { id },
      include: { model: ProjectStacksModel },
    });

    if (project) {
      return res.status(200).json(project);
    }

    return res.status(404).json({
      error: "No project was found with that id.",
    });
  };
  getProjects = async (req, res) => {
    const projects = await ProjectModel.findAll({
      include: {
        model: ProjectStacksModel,
      },
    });

    if (projects.length) {
      return res.status(200).json({ projects });
    }
    return res.status(404).json({ message: "No projects were found." });
  };

  addProject = async (req, res) => {
    const projectStacks = req.body.stacks;

    delete req.body.stacks;
    const stacks = [];
    const project = await ProjectModel.create(req.body, { returning: true });

    for (let stack of projectStacks) {
      const projectStack = await ProjectStacksModel.create(
        { stackName: stack, projectId: project.id },
        {
          returning: true,
        }
      );

      stacks.push(projectStack);
    }

    const response = { ...project.dataValues, stacks };

    return res.status(201).json({
      response,
      message: "Project was added successfully",
    });
  };

  updateProject = async (req, res) => {
    const { id } = req.params;
    await ProjectModel.update(req.body, { where: { id } });
    const project = await ProjectModel.findOne({ where: { id } });

    return res
      .status(200)
      .json({ project, message: "Project was successfully updated." });
  };
  deleteProject = async (req, res) => {
    const { id } = req.params;
    const project = await ProjectModel.findOne({ where: { id } });
    if (project) {
      await project.destroy();
      return res
        .status(200)
        .json({ message: "Project was successfully deleted." });
    }
    return res
      .status(404)
      .json({ error: "The project you are trying to delete does not exist." });
  };
}
