const ProjectStacksModel = (sequelize, DataTypes) => {
  const ProjectStack = sequelize.define("projectStack", {
    id: { type: DataTypes, autoIncrement: true, primaryKey: true },
    projectId: { type: DataTypes.INTEGER },
    stackName: { type: DataTypes.STRING },
  });

  ProjectStack.associate = (models) => {
    ProjectStack.belongsTo(models.project, { foreignKey: "projectId" });
  };

  return ProjectStack;
};

export default ProjectStacksModel;
