import express from "express";
import bcryptjs from "bcryptjs";

import User from "../models/user";

const authRouter = express.Router();

authRouter.post(
  "/api/signup",
  async (req: express.Request, res: express.Response): Promise<any> => {
    try {
      const { name, email, password } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ msg: "User with same email address already exists" });
      }

      const hashedPassword = await bcryptjs.hash(password, 10);

      let user = new User({
        email,
        password: hashedPassword,
        name,
      });

      user = await user.save();
      res.status(200).json(user);
    } catch (err: any) {
      res.status(500).json({error: err.message});
    }
  }
);

export default authRouter;
