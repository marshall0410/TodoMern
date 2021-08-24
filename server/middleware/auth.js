import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(' ')[1];
  Jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(401);
    req.uid = user.uid;
    next();
  });
};
