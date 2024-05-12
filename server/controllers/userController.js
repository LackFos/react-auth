import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";
import responseHelper from "../libs/responseHelper.js";

export const profile = async (req, res) => {
  const { jwt: token } = req.cookies;

  try {
    const decodedToken = jwt.decode(token);

    if (!decodedToken) {
      return responseHelper.throwUnauthorizedError("Nice try dude", res);
    }

    const user = await UserModel.findById(decodedToken.id);

    return responseHelper.returnOkResponse("User found", res, user);
  } catch (error) {
    next(error);
  }
};
