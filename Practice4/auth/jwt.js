import jwt from "jsonwebtoken";

const JWT = {
    generateToken: (payload) => {
        const token = jwt.sign(payload, process.env.PRIVATE_KEY, {
            expiresIn: process.env.EXPIRESIN_TOKEN
        });        
        return token;
    },
    verifyToken: (token) => {
        const check = jwt.verify(token.split('Bearer ')[1], process.env.EXPIRESIN_TOKEN);
        return check;
    },
    // destroyToken: () => {

    // }
}
export default JWT;