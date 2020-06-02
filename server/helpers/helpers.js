import bcrypt from "bcryptjs";

export const hashPassword = (password) => {
  const salt = bcrypt.genSalt(12);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

export const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

export const validatePassword = (password) => {
  return password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}/);
};
