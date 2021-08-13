import Image from "next/image"
import { useState } from "react"
import { HiStar } from "react-icons/hi"
import { useDispatch } from "react-redux"
import { addToBasket } from "../slices/basketSlices"
import { useRouter } from 'next/router'
import prime from "../static/prime.png"

const MAX = 5
const MIN  = 1

const Products = ({id, title, price, description, category, image}) => {
    const dispatch = useDispatch()
    const [rating] = useState(
        Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
    )
    price = price * 75
    const [hasPrime] = useState(Math.random() < 0.5)

    const addItemToBasket = () => {
        const product = {
            id, 
            title, 
            price, 
            rating,
            description, 
            category, 
            image,
            hasPrime
        }

        // Sending the product as an action to redux store
        dispatch(addToBasket(product))
    }
    const router = useRouter()
    return (
        <div key = {id} className="relative flex flex-col m-2 sm:m-5 bg-white z-30 p-5 sm:p-10 rounded-xl">
            <p className="absolute top-2 right-2 text-xs italic text-gray-500"> {category} </p>
            <Image 
                src = {image}
                width = {200}
                height = {200}
                objectFit = "contain"
                className="cursor-pointer img1"
            />
            <p onClick = {() => router.push(`/product/${id}`)} className="my-3 link">{title}</p>
            <div className="flex">
                {Array(rating).fill().map((_, i) => (
                    <HiStar key={i} className="m-0 text-yellow-500" />
                ))}
            </div>
            <p className="text-xs my-2 line-clamp-2"> {description} </p>
            <div className="mb-5">
                ₹ {price}
            </div>
            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <Image width ={52} height = {10} loading="lazy" className="w-12 pt-1" src={prime} alt="" />
                    <p className="m-0 text-xs text-gray-600">Free One-day Delivery</p>
                </div>
            )}
            <button onClick = {addItemToBasket} className="mt-auto button w-44 self-center">Add to Cart</button>
        </div>
    )
}

export default Products
