import { collectionType } from "./types"

export const getCollection = async () => {
    const res = await fetch("https://hp-api.onrender.com/api/characters")

    const data = await res.json()

    return data as collectionType[]
}
