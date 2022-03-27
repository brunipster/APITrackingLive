function throwError(status, errorMessage) {
    const error = new Error();
    error.message = errorMessage;
    error.stack = status;
    throw error;
}

export default throwError;