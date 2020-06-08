const ProjectModel = (sequelize, DataTypes) => {
  const Project = sequelize.define('project', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    projectName: { type: DataTypes.TEXT, defaultValue: 'None' },
    userId: { type: DataTypes.INTEGER },
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
    Project.belongsTo(models.user, { foreignKey: 'userId' });
    Project.hasMany(models.projectStack, {
      foreignKey: 'projectId',
      onDelete: 'CASCADE',
      sourceKey: 'id',
    });
  };

  return Project;
};

export default ProjectModel;
