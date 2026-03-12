const jwt = require('jsonwebtoken');


async function authUserM(req, res, next) {

  // require token if there is any and if there are no tokens others can't access it
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  try {
    //then we verify the token with the jwt secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "user" && decoded.role !== "artist") {
      return res.status(403).json({
        message: "You Don't Have Access",
      });
    }
    // we have added decoded values to a new variable in the request object
    req.user = decoded;
    //then we go to the next function ()=>
    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
}

module.exports = {authUserM};