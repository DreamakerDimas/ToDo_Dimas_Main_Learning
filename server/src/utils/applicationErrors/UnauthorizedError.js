import ApplicationError from "./ApplicationError.js";

class UnauthorizedError extends ApplicationError{
    constructor(message) {
        super(message || 'Bad Request. Unauthorized Error 401', 401);
    }
}

export default UnauthorizedError;