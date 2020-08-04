import ApplicationError from "./ApplicationError.js";

class BadRequestError extends ApplicationError{
    constructor(message) {
        super(message || 'The bad request 400', 400);
    }
}
export default BadRequestError;