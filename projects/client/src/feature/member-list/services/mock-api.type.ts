import { Option } from "@/lib/core/option";

export interface APIRess {
    id: string;
    name: string;
    alternate_names: string[];
    species: string;
    gender: "male" | "female";
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
    alternate_actors: string[];
    alive: boolean;
    image: string;
}
