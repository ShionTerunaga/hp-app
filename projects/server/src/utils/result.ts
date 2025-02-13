export const RESULT_OK = "ok" as const;
export const RESULT_ERROR = "error" as const;

interface Ok<T> {
    kind: typeof RESULT_OK;
    value: T;
}

interface Err {
    kind: typeof RESULT_ERROR;
    err: Error;
}

export type Result<T> = Ok<T> | Err;

/**
 * Resultはundefinedやnullの場合にエラーを吐き出すときに使用する。
 */
export const createResult = {
    ok: <T>(value: T): Result<T> => {
        return {
            kind: RESULT_OK,
            value
        };
    },
    err: (message: string): Result<never> => {
        return {
            kind: RESULT_ERROR,
            err: new Error(message)
        };
    }
};
