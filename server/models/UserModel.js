import {
  hashPassword,
  validatePassword,
  validateEmail,
} from "../helpers/helpers";

const emailValidator = (email) => {
  if (!validateEmail(email)) {
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
        autoIncrement: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          validation: emailValidator.bind(this),
        },
      },
      profileImage: {
        type: DataTypes.TEXT,
        defaultValue:
          "https://w7.pngwing.com/pngs/304/305/png-transparent-man-with-formal-suit-illustration-web-development-computer-icons-avatar-business-user-profile-child-face-web-design.png",
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
          validation() {
            if (!validatePassword(this.password)) {
              throw new Error(
                "Please provide a strong password with each of small letters, uppercase letters and numbers"
              );
            }
            this.password = hashPassword(this.password);
          },
        },
      },
    },
    {}
  );

  User.createUser = (
    firstName,
    lastName,
    email,
    professionalSummary,
    location,
    title
  ) => {
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
    User.hasMany(models.project, {
      foreignKey: "userId",
      sourceKey: "id",
      onDelete: "CASCADE",
    });

    User.hasMany(models.job, {
      foreignKey: "userId",
      sourceKey: "id",
      onDelete: "CASCADE",
    });

    User.hasMany(models.education, {
      foreignKey: "userId",
      onDelete: "CASCADE",
      sourceKey: "id",
    });
  };

  return User;
};

export default UserModel;
