import express from "express";
import dotenv from "dotenv";
import JWT from "./auth/jwt.js";
const app = express();
dotenv.config();
app.use(express.json());

const listUser = [
    {
        id: '845654',
        email: 'kdb@gmail.com',
        password: '123123123',
        role: 'USER',
        money: 900000000,
        nameHolderBank: 'KHANH',
        numberAccount: '124452335',
        nameBank: 'BIDV',
        passBank: '998877'
    }
]
// dotenv luôn chạy trong quá trình server running
app.post('/api/auth', (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email) throw new Error('Bạn chưa có email');
        if(!password) throw new Error('Bạn chưa có mật khẩu');

        const findUser = listUser.find((item) => item.email === email);

        if(!findUser) throw new Error('Sai tài khoản hoặc mật khẩu');
        if(password !== findUser.password) throw new Error('Sai tài khoản hoặc mật khẩu');
        
        const token = JWT.generateToken({
            id: findUser.id,
            email: findUser.email,
            role: findUser.role
        });

        res.status(200).send({
            message: "Đăng nhập thành công",
            data: findUser,
            token
        })
    } catch (error) {
        res.status(401).send({
            message: 'Không xác thực được người dùng',
            missing: error.message
        })
    }
})

const authMiddleware = (req, res, next) => {
    try {
        const accessToken = req.headers.authorization;
        if(!accessToken) throw new Error('Thất bại');
        const checkToken = JWT.verifyToken(accessToken);
        req.user = {
            id: checkToken.id,
            role: checkToken.role
        }
        next()
    } catch (error) {
        if(error.message === 'jwt expired'){
            res.status(401).send({
                detail: 'Token hết hạn!'
            })
        }
        res.status(401).send({
            message: 'Không xác thực được người dùng',
            missing: error.message
        })
    }
}
app.get('/api/personal', authMiddleware, (req, res) => {
    const findUser = listUser.find((item) => item.id === req.user.id);
    res.status(200).send({
        findUser
    })
})

app.get('/', (req, res) => {
    res.send({
        message: "Success"
    })
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
})