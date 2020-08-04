import ApplicationError from "./ApplicationError.js";

class ForbiddenError extends ApplicationError{
    constructor(message) {
        super(message || 'Bad Request. Forbidden Error 403', 403);
    }
}

export default ForbiddenError;