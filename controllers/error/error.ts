/**
 * A class that constracs an unauthorized access attempt error
 */
export class UnauthorizedError {
  message = "Unauthorized Access";
  error = 401;
}

/**
 * A class that constracs an unauthenticated access attempt error
 */
export class UnauthenticatedError {
  message = "Unauthenticated user";
  error = 402;
}

/**
 * A class that constracs an insufficient input error
 */
export class InsufficientInputError {
  message: string;
  error: number;
  constructor(inputName: string) {
    this.message = `The provided inputs for ${inputName} 
    are wrong or insufficient`;
    this.error = 406;
  }
}

/**
 * A class that constracs an unknown error
 */
export class UnknownError {
  message: string;
  error: number;
  constructor(message: string, code: number) {
    this.message = message;
    this.error = code;
  }
}

/**
 * A class that constracs an unknown error
 */
export class BadRequestError {
  message: string;
  error: number;
  constructor(message: string) {
    this.message = message;
    this.error = 400;
  }
}
