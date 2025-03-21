export const RESULT_OK = "ok" as const;
export const RESULT_NG = "ng" as const;

interface OK<T> {
    readonly kind: typeof RESULT_OK;
    value: T;
}

interface NG<E> {
    readonly kind: typeof RESULT_NG;
    error: E;
}

export type Result<T, E> = OK<T> | NG<E>;

export const createResult = {
    ok: <T>(value: T): Result<T, never> => {
        return {
            kind: "ok",
            value
        };
    },
    ng: <E>(error: E): Result<never, E> => {
        return {
            kind: "ng",
            error
        };
    }
};
