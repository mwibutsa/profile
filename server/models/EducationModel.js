const EducationModel = (sequelize, DataTypes) => {
  const Education = sequelize.define("education", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user: { type: DataTypes.INTEGER },
    schoolName: { type: DataTypes.TEXT },
    courseTaken: {
      type: DataTypes.TEXT,
    },
    startDate: { type: DataTypes.DATE },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    inProgress: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  });

  Education.associate = (models) => {
    Education.belongsTo(models.user, { foreignKey: "user" });
  };
  return Education;
};
