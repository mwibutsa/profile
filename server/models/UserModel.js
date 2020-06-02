import { hashPassword, validatePassword } from "../helpers/helpers";

const passwordValidator = (obj) => {
  if (!obj.validatePassword(obj.password)) {
    throw new Error(
      "Please provide a strong password with each of small letters, uppercase letters and numbers"
    );
    obj.password = hashPassword(password);
  } else {
  }
};

const emailValidator = (obj) => {
  if (!this.email.match(/(^[a-zA-Z0-9_.])(@)(\w){2,}(\.)(\w){2,}/)) {
    throw new Error("Please use a valid email address.");
  }
};

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          validation: emailValidator(obj),
        },
      },
      professionalSummary: {
        type: DataTypes.TEXT,
        trim: true,
      },
      location: DataTypes.STRING,
      title: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        validate: {
          validation: passwordValidator(this),
        },
      },
    },
    {}
  );

  User.createUser = () => {
    User.create({
      firstName,
      lastName,
      email,
      professionalSummary,
      location,
      title,
    });
  };

  User.associate = (models) => {
    User.hasMany(models.workExperience, {
      foreignKey: "user",
      onDelete: "CASCADE",
    });

    User.hasMany(models.Project, {
      foreignKey: "user",
      onDelete: "CASCADE",
    });

    User.hasMany(models.Job, {
      foreignKey: "user",
      onDelete: "CASCADE",
    });

    User.hasMany(models.Education, {
      foreignKey: "user",
      onDelete: "CASCADE",
    });
  };

  return User;
};

export default UserModel;
