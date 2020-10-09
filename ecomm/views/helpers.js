module.exports = {
  getError(errors, props) {
    // prop === "email" || "password" || "passwordConfirmation"
    try {
      return errors.mapped()[props].msg;
    } catch (err) {
      return "";
    }

    // errors.mapped() === {
    //   email: {
    //     msg: "Invalid Email"
    //   },
    //   password: {
    //     msg: "Password too short"
    //   },
    //   passwordConfirmation: {
    //     msg: "Password must match"
    //   }
    // }
  },
};
