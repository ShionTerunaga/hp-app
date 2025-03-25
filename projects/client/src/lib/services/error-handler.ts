import { createResult, Result } from "../core/result";
import { CustomError } from "./custom-error";

export function ErrorHandler({
    status
}: {
    status: number;
}): Result<never, CustomError> {
    const error = new CustomError("response error");

    error.status = status;

    return createResult.ng(error);
}
