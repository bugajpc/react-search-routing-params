import { useParams } from "react-router-dom"

function Item() {
    const { text } = useParams()
    return(
        <div>
            {text}
        </div>
    )
}
export default Item