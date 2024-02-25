import { getACharacter } from "@/model/collection"
import Image from "next/image"

interface props {
    id: string
}

export const Char = async (props: props) => {
    const data = await getACharacter(props.id)

    return (
        <div
            style={{
                width: 250,
                margin: "10px auto"
            }}
        >
            <div>
                <Image
                    src={data.image}
                    alt={data.id}
                    width={250}
                    height={150}
                />
            </div>
            <ul style={{ marginLeft: 10, listStyle: "none" }}>
                <li>name：{data.name}</li>
                <li>Birthday：{data.dateOfBirth}</li>
            </ul>
        </div>
    )
}
