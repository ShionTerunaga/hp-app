import { getCollection } from "@/model/collection/getCollection"
import Image from "next/image"
import Link from "next/link"

export const CharColl = async () => {
    const data = await getCollection()

    return (
        <div
            style={{
                width: "75%",
                margin: "10px auto"
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5,1fr)"
                }}
            >
                {data.map((item, index) => (
                    <div key={index}>
                        {item.image !== "" && (
                            <div style={{ margin: "5px" }}>
                                <Link href={`/characterCollection/${item.id}`}>
                                    <Image
                                        src={item.image}
                                        alt={item.ancestry}
                                        width={250}
                                        height={150}
                                    />
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
