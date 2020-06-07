export const tryCatchHandler = (callBackFunction) => async (req, res, next) => {
  try {
    await callBackFunction(req, res, next);
  } catch (err) {
    console.log(err);
    return res
      .status(err.name === 'SequelizeValidationError' ? 400 : 500)
      .json({
        error: err.message || err,
      });
  }
};

export const methodNotAllowed = (req, res, next) => {
  return res.status(405).json({
    err: 'Method not allowed on this route.',
  });
};

export const hasRequestBody = (req, res, next) => {
  const bodyData = Object.keys(req.body);
  if (bodyData.length) {
    next();
  }
  return res.status(400).json({
    error: 'The request body can not be empty.',
  });
};
