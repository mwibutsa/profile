const ProjectModel = (sequelize, DataTypes) => {
  const Project = sequelize.define("projects", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user: { type: DataTypes.INTEGER },
    projectUrl: {
      type: DataTypes.TEXT,
    },
    projectVideoUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    thumbnailImageUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    startDate: { type: DataTypes.DATE },
    endDate: { type: DataTypes.DATE, allowNull: true },
    inProgress: { type: DataTypes.BOOLEAN, defaultValue: false },
    projectOwner: { type: DataTypes.TEXT },
  });

  Project.associate = (models) => {
    Project.hasMany(models.Stack, {
      foreignKey: "project",
      onDelete: "CASCADE",
    });

    Project.belongsTo(models.User, { foreignKey: "user" });
  };

  Project.addProject = () => {};

  return Project;
};

export default Project;
