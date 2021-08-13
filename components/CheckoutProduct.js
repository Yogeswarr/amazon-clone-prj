import Image from "next/image"
import { HiStar } from "react-icons/hi"
import { useDispatch } from "react-redux"
import { addToBasket, removeFromBasket } from "../slices/basketSlices"
import prime from "../static/prime.png"

const CheckoutProduct = ({ id, title, price, rating, description, category, image, hasPrime }) => {
    const dispatch = useDispatch()
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
    const removeItemfromBasket = () => {
        dispatch(removeFromBasket({ id }))
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-5 place-content-stretch pb-4 border-b-2">
            <Image
                src = {image}
                width = {200}
                height = {200}
                objectFit = "contain"
            />
            <div className="col-span-3 mx-0 sm:mx-5">
                <p className="mt-3 sm:mt-0" >{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <HiStar key = {i} className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <p className="font-bold">₹ {price}</p>

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <Image width ={52} height = {10} loading="lazy" className="w-12 pt-1" src={prime} alt="" />
                        <p className="m-0 text-xs text-gray-600">Free One-day Delivery</p>
                    </div>
                )}
            </div>
            <div className="flex flex-row sm:flex-col sm:space-y-3 sm:my-auto sm:mt-0 mt-2 justify-center sm:justify-self-end">
                <button onClick = {addItemToBasket} className="button mt-auto mr-9 sm:mr-0 md:w-40 whitespace-nowrap">Add to Basket</button>
                <button onClick = {removeItemfromBasket} className="button mt-auto md:w-40 whitespace-nowrap">Remove from Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
