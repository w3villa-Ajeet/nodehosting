import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //validation
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "email is Required" });
    }
    if (!password) {
      return res.send({ message: "password is Required" });
    }

    //existing user
    const exitinguser = await userModel.findOne({ email });

    if (exitinguser) {
      return res.status(200).send({
        success: false,
        message: "User already exist",
      });
    }

    const user = await new userModel({
      name,
      email,
      password,
    }).save();

    res.status(201).send({
      success: true,
      message: "user registerd successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

//login controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation

    if (!email) {
      return res.send({ message: "email is Required" });
    }
    if (!password) {
      return res.send({ message: "password is Required" });
    }

    //existing user
    const exitinguser = await userModel.findOne({ email });

    if (!exitinguser) {
      return res.status(200).send({
        success: false,
        message: "User not registered",
      });
    }

    res.status(201).send({
      success: true,
      message: "user Login successfully",
      exitinguser,
    });
  } catch (error) {
    console.log(error);
  }
};

//forget password
export const forgetpasswordController = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    //validation

    if (!email) {
      return res.send({ message: "email is Required" });
    }

    if (!newPassword) {
      return res.send({ message: "newPassword is Required" });
    }

    //existing user
    const exitinguser = await userModel.findOne({ email });

    if (!exitinguser) {
      return res.status(200).send({
        success: false,
        message: "User not registered",
      });
    }

    exitinguser.password = newPassword;

    await exitinguser.save();

    res.status(201).send({
      success: true,
      message: "user password changed successfully",
      exitinguser,
    });
  } catch (error) {
    console.log(error);
  }
};

//delete user
export const deleteController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation

    if (!email) {
      return res.send({ message: "email is Required" });
    }

    if (!password) {
      return res.send({ message: "newPassword is Required" });
    }

    //existing user
    const exitinguser = await userModel.findOne({ email });

    if (password === exitinguser.password) {
      await userModel.deleteOne({ email });
    }
    res.status(201).send({
      success: true,
      message: "user deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
