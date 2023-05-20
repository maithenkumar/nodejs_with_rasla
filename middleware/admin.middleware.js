const adminmiddleware = (req, res, next) => {

    const apikey = req.headers.apikey;

    if (apikey === "12345") {
        next();
    } else {
        return res.status(401).send("Unauthorized");
    }
}

// exports.adminmiddleware = adminmiddleware
// const adminmiddleware = (req, res, next) => {

//     const apikey = req.headers.apikey;

//     if (apikey === "12345") {
//         next();
//     } else {
//         return res.status(401).send("Unauthorized");
//     }
// }

exports.adminmiddleware = adminmiddleware