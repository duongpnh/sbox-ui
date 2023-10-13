import jwt from 'jsonwebtoken';

const DEFAULT_OPTIONS = {
  expiresIn: '1h'
}

export const signJwtAccessToken = (payload: any, options = DEFAULT_OPTIONS) => {
  const secretKey = process.env.JWT_SECRET_KEY as string;
  const token = jwt.sign(payload, secretKey, options);
  return token;
}

export const verifyJwt = (token: string) => {
  try {
    const secretKey = process.env.JWT_SECRET_KEY as string;
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  }
  catch (e) {
    console.error(e);
    return null;
  }
}
