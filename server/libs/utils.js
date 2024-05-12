import jwt from "jsonwebtoken";

/**
 * Signs a JWT token with the given payload.
 * @param {Object} payload The payload to be signed into the JWT token.
 * @returns {string} The signed JWT token.
 */
export const signToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

/**
 * Creates and sends a JWT token as a cookie in the HTTP response.
 * @param {Object} payload The payload to be signed into the JWT token.
 * @param {Object} res The Express response object.
 * @returns {string} The signed JWT token.
 */
export const createSendJWT = (payload, res) => {
  const token = signToken(payload);

  const cookieOptions = {
    httpOnly: true,
    expiresIn:
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  return token;
};
