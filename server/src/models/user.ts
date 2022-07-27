import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    trim: true,
  },
  email: {
    required: true,
    type: String,
    trim: true,
    validate: {
      validator: (value: string) => {
        const re: RegExp =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return value.match(re);
      },
      message: "Invalid format of email address!",
    },
  },
  password: {
    required: true,
    type: String,
    // validate: {
    //     validator: (value: string) => {
    //       return value.length > 6;
    //     },
    //     message: "Please enter stronger password!",
    //   },
  },
  address: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "user",
  },
  // Cart
});

const User = mongoose.model("User", userSchema);

export default User;