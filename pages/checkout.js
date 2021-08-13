import { useSession } from "next-auth/client"
import Image from "next/image"
import { useSelector } from "react-redux"
import CheckoutProduct from "../components/CheckoutProduct"
import { selectItems, selectTotal } from "../slices/basketSlices"
import add from '../static/ad.png'

const Checkout = () => {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const [session] = useSession()
    return ( 
        <main className="lg:flex max-w-screen-xl mx-auto">
            {/* Left */}
            <div className="flex-grow m-1 sm:m-5 shadow-md">
                <Image
                    src={add}
                    width={765}
                    height={216}
                    objectFit="contain"
                />
                <div className="flex flex-col p-5 space-y-10 bg-white">
                    <h1 className="sm:text-3xl text-xl font-bold border-b-2 pb-4">
                        {items.length == 0 ? "Your Amazon Cart is Empty." : "Your Shopping Cart"}
                    </h1>
                    {items.map((item, i) => (
                        <CheckoutProduct 
                            key = {i}
                            id = {item.id}
                            title = {item.title}
                            rating = {item.rating}
                            price = {item.price}
                            description = {item.description}
                            category = {item.category}
                            image = {item.image}
                            hasPrime = {item.hasPrime}
                        />
                    ))}

                </div>
            </div>
            {/* Right */}
            <div className="flex flex-col bg-white p-10 shadow-md">
                {items.length > 0 && (
                    <div className="flex flex-col">
                        <h2 className="whitespace-nowrap">Subtotal ({items.length} items){" "}
                            
                        </h2>
                        <span className="font-bold">
                                ₹ {total}
                        </span>
                        <button disabled={!session} className={`button mt-2 whitespace-nowrap w-36 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-200 cursor-not-allowed'}`}>
                            {!session ? "Sign in to checkout" : "Proceed to payment"}
                        </button>
                    </div>
                )}
            </div>

        </main>
    )
}

export default Checkout
