export const errorHandler = (
  err: Error,
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction,
): void => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: "Internal Server Error", error: err.message });
};
