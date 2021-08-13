import Products from "./Products"
import ad1 from "../static/ad1.png"
import Image from "next/image"

const ProductFeed = ({ products }) => {
    return (
        <div className="mt-0 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            {products.slice(0,4).map(({id, title, price, description, category, image}) => (
                <Products 
                    key ={id}
                    id = {id}
                    title = {title}
                    price = {price}
                    description = {description}
                    category = {category}
                    image = {image}
                />
            ))}
            <div  className="md:col-span-full">
                <Image loading = "lazy" src={ad1} width = {1500} objectFit = "contain" height = {300} alt="" />
            </div>
            <div className="md:col-span-2">
                {products.slice(4,5).map(({id, title, price, description, category, image}) => (
                    <Products 
                        key ={id}
                        id = {id}
                        title = {title}
                        price = {price}
                        description = {description}
                        category = {category}
                        image = {image}
                    />
                ))}
            </div>
            {products.slice(5, products.length).map(({id, title, price, description, category, image}) => (
                    <Products 
                        key ={id}
                        id = {id}
                        title = {title}
                        price = {price}
                        description = {description}
                        category = {category}
                        image = {image}
                    />
                ))}
        </div>
    )
}

export default ProductFeed



// GET --> https://fakestoreapi.com/products