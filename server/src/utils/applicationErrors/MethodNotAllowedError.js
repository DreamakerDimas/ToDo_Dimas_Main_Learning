import ApplicationError from "./ApplicationError.js";

class MethodNotAllowedError extends ApplicationError{
    constructor(message) {
        super(message || 'Bad Request 405', 405);
    }
}

export default MethodNotAllowedError;