import { Link } from "react-router-dom"


const data = [
    {
        name: "iphone 15",
        price: "80 000 som",
        img: "https://softech.kg/image/cache/8071d88579066b7e6ec5bae6d8efe80a.png",
        slug: "iphone_15",
        id: 1
    },
    {
        name: "iphone 15 Pro",
        price: "95 000 som",
        img: "https://softech.kg/image/cache/e928b338a93c633c8176d455276fad78.jpg",
        slug: "iphone_15_pro",
        id: 2
    }
]


const Products = () => {
    return (
        <div>
            Products
            {data.map(el => {
                return (
                    <div className="card" style={{ width: 250 }}>
                        <img src={el.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{el.name}</h5>
                            <p className="card-text">{el.price}</p>
                            <Link to={`/products/${el.slug}`} className="btn btn-primary">Подробнее</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products