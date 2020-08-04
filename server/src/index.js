require('dotenv/config');
const bcrypt = require('bcrypt');
import express from 'express';
import { User } from './db/models';
import router from './routes';
import cors from 'cors';
import ApplicationErrorHandler from "./middlewares/ApplicationErrorHandler.js";

const port = process.env.PORT || 5001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(ApplicationErrorHandler);
app.use((err, req, res) => {
    res.status(500).send('Internal server error!');
});

app.listen(port, () => console.log(`Example app listening port on ${port}`));





/*
app.get('/', (req, res) => res.send('Hello World!'));

app.post('/user', async (req, res, next) => {
    try{
        const createdUser = await User.create(req.body);
        return res.send(createdUser);
        // console.log(req.body);
    }catch(e){
        next(e);
    }
});

app.use((err,req,res) => {
    res.status(500).send('Smth broken (((');
});
*/


// const hashPass = async password => {
//     try{
//         return bcrypt.hash(password, 10);
//     } catch (e){
//
//     }
// };
//
// const createUser = async data => {
//     try{
//         data.passwordHash = await hashPass(data.password);
//         const createdUser = await User.create(data);
//         return createdUser.get();
//     } catch (e) {
//         throw e;
//     }
// };
//
// // createUser(
// //     {
// //         firstName: 'Name',
// //         lastName: 'Surname',
// //         email: 'user111@mail.com',
// //         login: 'user111',
// //         password: 'dsdsdsds'
// //     }
// // )
// //     .then(console.log)
// //     .catch(console.err);
//
// const getUserById = async id => {
//     try{
//         return (await User.findByPk(id)).get();
//     }catch(e) {
//         throw e;
//     }
// };
//
// getUserById(101)
//     .then(console.log)
//     .catch(console.error);

// const showAllUsers = async () => {
//     try{
//         return await User.findAll({raw: true});
//         //raw for chose only dataValues, without _previousDataValues
//     }catch(e) {
//         throw e;
//     }
// };
//
// showAllUsers()
// .then(console.log);


// const getUserById = async id => {
//     try{
//         return (await User.findByPk(id)).get();
//     }catch(e) {
//         throw e;
//     }
// };
// //
// getUserById(42).then(console.log);




// const getUserAndHisTasks = async id => {
//     try{
//         const userData = getUserById(id);
//         const userTasks = await Task.findAll({
//             where: {
//                 userId: id
//             },
//             raw: true
//         });
//         return {userData, userTasks};
//     }catch (e) {
//         throw e;
//     }
// };
//
//
// getUserAndHisTasks(42).then(console.log);