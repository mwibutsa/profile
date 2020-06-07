const SkillsModel = (sequelize, DataTypes) => {
  const Skills = sequelize.define('skills', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: DataTypes.INTEGER,
    skillName: {
      type: DataTypes.TEXT,
    },
  });
  Skills.associate = (models) => {
    Skills.belongsTo(models.user, {
      foreignKey: 'userId'
    })
  }
  return Skills;
};

export default SkillsModel;