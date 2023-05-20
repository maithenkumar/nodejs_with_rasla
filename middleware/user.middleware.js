// const usermiddleware = (req, res, next) => {
//   const apikey = req.headers.apikey;

//   if (apikey === "000000") {
//     next();
//   } else {
//     return res.status(401).send("Unauthorized");
//   }
// };
// exports.usermiddleware = usermiddleware;

const usermiddleware = (req, res, next) => {
  const apikey = req.headers.apikey;
  
  if (apikey === "000000") {
    next();
  } else {
    return res.status(401).send("Unauthorized");
  }
};
exports.usermiddleware = usermiddleware;

