import Link from "next/link"

export const Top = () => {
    return (
        <div>
            <Link href={"/characterCollection"}>
                <button>ハリーポッター図鑑</button>
            </Link>
        </div>
    )
}
