export class CustomError extends Error {
    constructor(message, code, status, data) {
        super();
        this.message = message;
        this.code = code;
        this.status = status;
        this.data = data;
    }
}

export class RouteNotFoundError extends CustomError {
    constructor(originalUrl) {
        super(`Route '${originalUrl}' does not exist.`, 'ROUTE_NOT_FOUND', 404);
    }
}

export class EntityNotFoundError extends CustomError {
    constructor(entityName) {
        super(`${entityName} not found.`, 'ENTITY_NOT_FOUND', 404);
    }
}

export class BadUserInputError extends CustomError {
    constructor(errorData) {
        super('There were validation errors.', 'BAD_USER_INPUT', 400, errorData);
    }
}

export class InvalidTokenError extends CustomError {
    constructor(message = 'Authentication token is invalid.') {
        super(message, 'INVALID_TOKEN', 401);
    }
}