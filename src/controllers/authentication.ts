import express from "express";
import { random, authentication } from "helpers";
import { createUser } from "../db/users";
import { getUserByEmail } from "../db/users";

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { username, email, password } = await req.body;
    if (!username || !email || !password) {
      return res.sendStatus(400);
    }
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.sendStatus(400);
    }
    const salt = random();

    const user = await createUser({
      email,
      username,
      authentication: {
        password: { authentication, password },
        salt,
      },
    });
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
  }
};
