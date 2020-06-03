import model from "../models";
import { comparePassword, generateToken } from "../helpers/helpers";

const { user: UserModel } = model;

export default class User {
  login = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ where: { email } });
    if (user && comparePassword(password, user.password)) {
      const token = generateToken(user);

      return res.status(200).json({ token });
    }
    return res.status(400).json({ error: "invalid username or password " });
  };
  signup = async (req, res) => {
    const user = await UserModel.create(req.body);
    return res.status(201).json({ user });
  };

  getUser = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findOne({ where: { id } });

    if (user) {
      delete user.dataValues.password;
      return res.status(200).json({
        user,
      });
    } else {
      return res
        .status(404)
        .json({ error: "User with provided id was not found" });
    }
  };

  addUser = async (req, res) => {
    const user = await UserModel.create(req.body);
    return res
      .status(201)
      .json({ message: "New user profile was successfully created." });
  };

  deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findOne({ where: { id } });

    if (user) {
      User.delete({ id });
      return res
        .status(200)
        .json({ message: "User profile was successfully deleted." });
    } else {
      return res
        .status(404)
        .json({ message: "We could not find user with specified id " });
    }
  };

  updateUser = async (req, res) => {
    const { id } = req.params;
    await UserModel.update(req.body, { where: { id } });
    const user = await UserModel.findOne({ where: { id } });
    delete user.dataValues.password;

    return res
      .status(200)
      .json({ message: "User profile has been successfully  updated.", user });
  };
}
