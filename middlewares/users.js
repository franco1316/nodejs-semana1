const { User } = require("../models/users");

const userExist = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({
        status: "Error",
        message: "User not found given that id: " + id,
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userExist };
