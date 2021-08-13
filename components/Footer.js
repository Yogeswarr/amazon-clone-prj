const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className="flex flex-col bottom-0 text-white">
            <button onClick = {scrollToTop} className="bg-amazon_blue-light flex justify-center py-2">
                <p className="cursor-pointer font-bold">Back to Top</p>
            </button>
            <div className="bg-amazon_blue flex justify-center space-x-44 xl:space-x-28 lg:space-x-14 md:space-x-7 text-sm py-10 md:px-10 lg:px-40">
                <div className="flex flex-col p-2">
                    <p className="font-bold text-lg pb-2 link">Get to Know Us</p>
                    <p className="link">Carrers</p>
                    <p className="link">Blog</p>
                    <p className="link">About Amozon</p>
                    <p className="link">Inverster Relation</p>
                    <p className="link">Amazon devices</p>
                    <p className="link">Amazon tours</p>
                </div>
                <div className="flex-col p-2 hidden xl:flex">
                    <p className="font-bold pb-2 link">Contact Us</p>
                    <p className="link">Facebook</p>
                    <p className="link">Instagram</p>
                    <p className="link">Linkedin</p>
                    <p className="link">Twitter</p>
                </div>
                <div className="flex-col p-2 hidden md:flex">
                    <p className="font-bold pb-2 link">Make Money With Us</p>
                    <p className="link">Sell on Amazon</p>
                    <p className="link">Sell under Amazon Accelerator</p>
                    <p className="link">Amazon Global Selling</p>
                    <p className="link">Become an Affiliate</p>
                    <p className="link">Fulfilment by Amazon</p>
                    <p className="link">Advertise Your Products</p>
                    <p className="link">Amazon Pay on Merchants</p>
                </div>
                <div className="flex-col p-2 hidden lg:flex">
                    <p className="font-bold pb-2 link">COVID-19 and Amazon</p>
                    <p className="link">Your Account</p>
                    <p className="link">Returns Centre</p>
                    <p className="link">100% Purchase Protection</p>
                    <p className="link">Amazon App Download</p>
                    <p className="link">Amazon Assistant Download</p>
                    <p className="link">Help</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
