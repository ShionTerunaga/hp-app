import { getCollection } from "@/model/collection/getCollection"
import { Char } from "@/view/charColl"

interface props {
    id: string
}

export const generateStaticParams = async () => {
    const data = await getCollection()

    const paths = data.map((item) => {
        return { id: item.id }
    })

    return paths
}

const Character = ({ params }: { params: props }) => {
    const id = params.id

    return <Char id={id} />
}

export default Character
