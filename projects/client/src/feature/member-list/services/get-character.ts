import { CustomError } from "@/lib/services/custom-error";
import { ErrorHandler } from "@/lib/services/error-handler";
import { appConfig } from "@/shared/config";
import { APIRes, APIScheme } from "./response.type";
import { ParseRes } from "./parse";
import { createResult, Result } from "@/lib/core/result";
import { UsePotter } from "./mock-api.type";

export async function getCharacter(): Promise<
    Result<UsePotter[], CustomError>
> {
    const res = await fetch(appConfig.api);

    if (!res.ok) {
        return ErrorHandler({ status: res.status });
    }

    const body = await res.json();

    const typeResult = APIScheme.safeParse(body);

    if (!typeResult.success) {
        //後で詳細のエラーを作る
        throw new Error("API型が違います");
    }

    const parseBody = ParseRes(typeResult.data);

    return createResult.ok(parseBody);
}
