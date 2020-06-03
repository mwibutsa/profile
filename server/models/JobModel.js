const JobModel = (sequelize, DataTypes) => {
  const Job = sequelize.define("job", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER },
    employer: { type: DataTypes.TEXT },
    jobTitle: { type: DataTypes.TEXT },
    jobDescription: { type: DataTypes.TEXT, allowNull: true },
    startDate: { type: DataTypes.DATE },
    endDate: { type: DataTypes.DATE, allowNull: true },
    inProgress: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Job.associate = (models) => {
    Job.belongsTo(models.user, {
      foreignKey: "userId",
    });
  };
  return Job;
};

export default JobModel;
