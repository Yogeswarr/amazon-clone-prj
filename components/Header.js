import Image from 'next/image'
import logo from '../static/logo.png'
import { HiMenu, HiOutlineShoppingCart, HiSearch } from 'react-icons/hi'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlices'

const Header = () => {
    const [session] = useSession()
    const router = useRouter()
    const items = useSelector(selectItems)

    return (
        <header id = "top" className="sticky top-0 z-50">
            {/* top navbar */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                        onClick = {() => router.push('/')}
                        src = {logo}
                        width = {150}
                        height = {40}
                        objectFit = "contain"
                        className = "cursor-pointer"
                    />
                </div>
                {/* Search bar */}
                <div className="hidden sm:flex items-center h-10 ml-3 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" />
                    <div className="h-10 p-3">
                        <HiSearch size = {20} />
                    </div>
                </div>
                {/* Right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick = {!session ? signIn : signOut} className="link">
                        <p>
                            {session ? `Hello, ${session.user.name}` : 'Sign In'}
                        </p>
                        <p className="font-extrabold md:text-sm">Accounts & Lists</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div onClick = {() => router.push('/checkout')} className="link relative flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 bg-yellow-400 h-4 w-4 text-center rounded-full text-black font-bold">
                            {items.length}
                        </span>
                        <HiOutlineShoppingCart size = {30} />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>
            {/* bottom navbar */}
            <div className="flex items-center space-x-3 p-2 sm:pl-6 bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center">
                    <HiMenu size = {23} className="mr-1"/>
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Buisness</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header
