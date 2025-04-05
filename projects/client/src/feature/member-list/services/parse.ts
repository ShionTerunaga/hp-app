import { createOption, Option } from "@/lib/core/option";
import { UsePotter } from "./mock-api.type";
import { APIRes } from "./response.type";

export function ParseRes(res: APIRes): UsePotter[] {
    const filteredRes = res.filter((item) => item.image !== "");

    const response: UsePotter[] = filteredRes.map((item) => {
        const dateOfBirth: Option<string> =
            item.dateOfBirth !== null
                ? createOption.some(item.dateOfBirth)
                : createOption.none();
        const yearOfBirth: Option<number> =
            item.yearOfBirth !== null
                ? createOption.some(item.yearOfBirth)
                : createOption.none();

        const wand: { wood: string; core: string; length: Option<number> } = {
            wood: item.wand.wood,
            core: item.wand.core,
            length:
                item.wand.length !== null
                    ? createOption.some(item.wand.length)
                    : createOption.none()
        };

        return {
            ...item,
            alternateNames: item.alternate_names,
            dateOfBirth: dateOfBirth,
            yearOfBirth: yearOfBirth,
            wand: wand,
            alternateActors: item.alternate_actors
        };
    });

    return response;
}
