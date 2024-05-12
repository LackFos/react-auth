import UserModel from "../models/UserModel.js";
import { createSendJWT } from "../libs/utils.js";
import responseHelper from "../libs/responseHelper.js";

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return responseHelper.throwBadRequestError(
        "Please provide both email and password",
        res
      );
    }

    const user = await UserModel.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return responseHelper.throwUnauthorizedError(
        "Email address or password invalid",
        res
      );
    }

    user.password = undefined;

    const token = createSendJWT({ id: user.id }, res);

    return responseHelper.returnOkResponse("Successfuly logged in", res, {
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await UserModel.create({ username, email, password });

    const token = createSendJWT({ id: user.id }, res);

    return responseHelper.returnCreatedResponse(
      "User successfuly created",
      res,
      { user, token }
    );
  } catch (error) {
    next(error);
  }
};
