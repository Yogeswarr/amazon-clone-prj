import Image from "next/image"
import { useDispatch } from "react-redux"
import { addToBasket } from "../../slices/basketSlices"

export async function getStaticPaths (context) {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()

    const paths = data.map(prod => {
        return {
            params: { name: prod.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.name
    const res = await fetch("https://fakestoreapi.com/products/" + id)
    const data = await res.json()
    return { 
        props: {
            data
        }
    }
}

const productPage = ({ data }) => {
    const dispatch = useDispatch()
    const price1 = data.price * 75
    const {id, title, price, description, category, image} = data
    const addItemToBasket = () => {
        const product = {
            id, 
            title, 
            price, 
            description, 
            category, 
            image

        }

        // Sending the product as an action to redux store
        dispatch(addToBasket(product))
    }
    return (
        <div className="flex justify-center sm:space-x-14 items-center md:space-x-44 py-10 flex-col sm:flex-row">
            <div>
                <Image 
                    src = {data.image}
                    width = {300}
                    height = {300}
                    objectFit = "contain"
                    className="cursor-pointer img1"
                />
            </div>
            <div className="flex flex-col sm:w-80 mx-10 sm:mx-0">
                <p className="font-bold text-lg">
                    {data.title}
                </p>
                <p className="text-justify pt-4">{data.description}</p>
                <p className="font-bold text-lg pt-4">₹ {price1}</p>
                <button onClick = {addItemToBasket} className="button mt-7 w-48 self-center">Add to Cart</button>
            </div>
        </div>
    )
}

export default productPage
