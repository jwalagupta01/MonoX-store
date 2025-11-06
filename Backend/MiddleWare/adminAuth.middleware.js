import JWT from "jsonwebtoken";

const AdminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    const decode_token = JWT.verify(token, process.env.JWT_SECRET);

    if (decode_token !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "Not Authorized login Again",
      });
    }
    next();
  } catch (error) {
    console.log("error: ", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default AdminAuth;
