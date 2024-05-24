
import { useParams, useNavigate, Link } from "react-router-dom"


const ProductDetail = () => {

    const { slug } = useParams()
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate("/products")
    }
    return (
        <div> <button onClick={handleGoBack}>Назад</button> |<Link to="products">Назад 2</Link>
            ProductDetail</div>
    )
}

export default ProductDetail