import { collectionType } from "./types"

export const getACharacter = async (id: string) => {
    const res = await fetch("https://hp-api.onrender.com/api/characters")

    const resData = (await res.json()) as collectionType[]

    const data = resData.find((ele) => ele.id === id)

    return data as collectionType
}
