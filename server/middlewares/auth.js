import {
  decodeToken
} from "../helpers/helpers";

export const isLoggedIn = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const user = decodeToken(token);
    req.user = user.id;
    next();
  } catch (error) {
    return res.status(401).json({
      error: "Please log into your account first",
    });
  }
};