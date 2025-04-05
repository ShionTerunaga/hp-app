import { Option } from "@/lib/core/option";

export interface UsePotter {
    id: string;
    name: string;
    alternateNames: string[];
    species: string;
    gender: "male" | "female" | "";
    house: string;
    dateOfBirth: Option<string>;
    yearOfBirth: Option<number>;
    wizard: boolean;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: {
        wood: string;
        core: string;
        length: Option<number>;
    };
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alternateActors: string[];
    alive: boolean;
    image: string;
}
