export type wandType = {
    wood: string
    core: string
    length: number | null
}

export type collectionType = {
    id: string
    name: string
    alternate_names: string[]
    species: string
    gender: string
    house: string
    dateOfBirth: string | null
    yearOfBirth: number | null
    wizard: boolean
    ancestry: string
    eyeColour: string
    hairColour: string
    wand: wandType
    patronus: string
    hogwartsStudent: boolean
    hogwartsStaff: boolean
    actor: string
    alternate_actors: string[]
    alive: boolean
    image: string
}
