import userSchema from '../../utils/validation/user.js';

function createUserValidationMV(isCreateMode=true) {
    return async(req, res, next) => {
        try {
            req.body = await userSchema.validateAsync(req.body, {
                context: {
                    isCreateMode: isCreateMode
                }
            });
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const validateUserOnCreate = createUserValidationMV();
export const validateUserOnUpdate = createUserValidationMV(false)