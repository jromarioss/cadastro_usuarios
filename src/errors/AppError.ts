class AppError {
  declare message: string;
  declare statusCode: number;
  constructor(message: string, statusCode = 401) {
    this.message = message;
    this.statusCode = statusCode;
  };
}

export { AppError };