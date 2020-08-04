import ApplicationError from "./ApplicationError.js";

class NotFoundError extends ApplicationError{
    constructor(message) {
        super(message || 'Bad Request. Not Found 404', 404);
    }
}

export default NotFoundError;