export const tryCatchHandler = (callBackFunction) => async (req, res, next) => {
  try {
    await callBackFunction(req, res, next);
  } catch (err) {
    return res
      .status(err.name === "SequelizeValidationError" ? 400 : 500)
      .json({
        error: err,
      });
  }
};
