import responseHelper from "../libs/responseHelper.js";

const validationHandler = (err, res) => {
  const errors = {};

  Object.keys(err.errors).forEach((key) => {
    errors[key] = err.errors[key].message;
  });

  return responseHelper.throwBadRequestError(
    "Invalid request body",
    res,
    errors
  );
};

const duplicateKeyHandler = (err, res) => {
  const duplicateEntryRegex = /{\s+(.*):\s+["'](.*)['"]\s+}/;
  const [, fieldName, duplicateValue] = err.errmsg.match(duplicateEntryRegex);

  return responseHelper.throwConflictError(
    `The ${fieldName} has already been used`,
    res,
    {
      [fieldName]: `The ${fieldName} '${duplicateValue}' has already been used`,
    }
  );
};

export default (err, req, res, next) => {
  if (err.code === 11000) return duplicateKeyHandler(err, res);
  if (err.name === "ValidationError") return validationHandler(err, res);

  return responseHelper.throwInternalError(
    "Something went wrong, please try again",
    res,
    { stack: process.env.NODE_ENV === "development" ? err.stack : undefined }
  );
};
