import { User } from '../db/models';

export async function createUser (req, res, next) {
    try{
        const createdUser = await User.create(req.body);
        if (createdUser){
            return res.status(201).send(createdUser);
        }

        return next(new Error());
    } catch (e) {
        next(e);
    }
}

export async function updateUserByPk(req, res, next) {
    try{
        const [RowsCount, Rows] = await User.update(req.body, {
            where: {
                id: req.params.userId
            },
            returning: true
        });

        if (RowsCount){
            const data = Rows[0].get();
            delete data.password;
            return res.send(data);
        }
        next('User info not found');
    } catch (e) {
        next(e);
    }
}

export async function getUserByPk(req, res, next) {
    try{
        const foundUser = await User.findByPk(req.params.userId, {
            attributes: {
                exclude: ['password']
            }
        });
        if ( foundUser ) { return res.send(foundUser); }
        next('User not found!');
    } catch (e) {
        next(e);
    }
}

export async function deleteUserByPk(req, res, next) {
    try{
        const deletedURowsCount = await User.destroy({
            where: { id: req.params.userId }
        });
        if( deletedURowsCount ) { res.send(`${deletedURowsCount}`)};
        next('User not found!');
    } catch(e) { next(e); }
}