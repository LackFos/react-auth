import { statusCode } from "../libs/enums.js";

const returnOkResponse = (message, res, payload) => {
  res.status(statusCode.OK).send({
    success: true,
    message,
    payload,
  });
};

const returnCreatedResponse = (message, res, payload) => {
  res.status(statusCode.CREATED).send({
    success: true,
    message,
    payload,
  });
};

const throwError = (statusCode) => {
  return (message, res, errors) => {
    res.status(statusCode).json({
      success: false,
      message,
      errors,
    });
  };
};

export default {
  throwConflictError: throwError(statusCode.CONFLICT),
  throwNotFoundError: throwError(statusCode.NOT_FOUND),
  throwBadRequestError: throwError(statusCode.BAD_REQUEST),
  throwUnauthorizedError: throwError(statusCode.UNAUTHORIZED),
  throwInternalError: throwError(statusCode.INTERNAL_SERVER_ERROR),
  returnOkResponse,
  returnCreatedResponse,
};
